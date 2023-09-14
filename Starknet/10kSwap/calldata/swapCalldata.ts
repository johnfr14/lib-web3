import { ethers } from "ethers";
import { Account, CallData, Contract, uint256 } from "starknet"
import { TradeType, TokenAmount, Fetcher, Route, Trade, Percent, Pair, Token, JSBI } from "l0k_swap-sdk";
import { SwapCallData } from "../types";
import { get_token, jsbi_to_Uint256 } from "../utils";
import { ROUTER_ADDRESSES, l0K_ROUTER_ABI } from "../constant";



export const get_swap_calldata = async(
    signer: Account,
    path: [string, string],
    amountIn: string | null,
    amountOut: string | null,
    network: 'TESTNET' | 'MAINNET',
    slipage: number,
    priceImpact: number,
    deadline?: number,
): Promise<SwapCallData> => {

    let amount_out_min: JSBI | undefined
    let amount_in_max: JSBI | undefined

    try {

        const l0k_router = new Contract( l0K_ROUTER_ABI, ROUTER_ADDRESSES[ network ], signer )

        const token_in: Token = await get_token( path[0], network, signer )
        const token_out: Token = await get_token( path[1], network, signer )

        const token_a: Token = BigInt( token_in.address ) < BigInt( token_out.address ) ? token_in : token_out
        const token_b: Token = BigInt( token_in.address ) < BigInt( token_out.address ) ? token_out : token_in
        
        const amount_in: TokenAmount | null  = amountIn ? new TokenAmount( token_in, ethers.parseUnits( amountIn, token_in.decimals ) ) : null
        const amount_out: TokenAmount | null = amountOut ? new TokenAmount( token_out, ethers.parseUnits( amountOut, token_out.decimals ) ) : null

        const pool: Pair = await Fetcher.fetchPairData( token_a, token_b )

        const route = new Route( [ pool ], token_in )
        const trade = new Trade( route, amount_in ?? amount_out! , amount_in ? TradeType.EXACT_INPUT : TradeType.EXACT_OUTPUT )

        if ( parseFloat( trade.priceImpact.toSignificant(2) ) > priceImpact )
            throw new Error(`Price impact tolerance exceeded: ${ trade.priceImpact.toSignificant(2) }`)

        if ( trade.tradeType === 0 ) amount_out_min = trade.minimumAmountOut( new Percent( BigInt( slipage * 100 ), BigInt( 100 * 100 ) ) ).raw
        if ( trade.tradeType === 1 ) amount_in_max  = trade.maximumAmountIn( new Percent( BigInt( 100 * 100 ), BigInt( slipage * 100 ) ) ).raw

        deadline = deadline ? deadline : Math.floor( Date.now() / 1000 ) + 60 * 20 // 20 minutes from the current Unix time
    
        const calldata: SwapCallData = {
            contractAddress: l0k_router.address,
            entrypoint: trade.tradeType ? "swapTokensForExactTokens" : "swapExactTokensForTokens",
            calldata: [
                amount_in_max ? jsbi_to_Uint256( amount_in_max, token_in.decimals ) : jsbi_to_Uint256( amount_in!.raw, token_in.decimals ),
                amount_out_min ? jsbi_to_Uint256( amount_out_min, token_out.decimals ) : jsbi_to_Uint256( amount_out!.raw, token_out.decimals ), 
                path,
                signer.address,
                deadline,
            ],
            utils: {
                priceImpact: trade.priceImpact.toSignificant(2),
                tradeType: trade.tradeType
            }
        }

        return calldata

    } catch (error: any) {
        
        throw error

    }
}