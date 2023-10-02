import { BridgeOptions, Chains } from "../types"
import erc20_abi from "./abis/erc20"
import router_abi from "./abis/router"



// Misc
export const POLYGON_PROVIDER: {[key: string]: string} = {
  "MAINNET": "https://polygon-mainnet.infura.io/v3/78581dc93b6d43088baba2bb1606d0c8",
  "TESTNET": "https://polygon-mumbai.infura.io/v3/78581dc93b6d43088baba2bb1606d0c8",
}






// ABIS
export const ERC20_ABI = erc20_abi
export const ROUTER_ABI = router_abi






// Addressess
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"

export const ROUTER: { [key in Chains]: any } = {
  polygon: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
  polygonTestnet: '0x817436a076060D158204d955E5403b6Ed0A5fac0',
  arbitrum: "0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614",
  arbitrumTestnet: '0xb850873f4c993Ac2405A1AdD71F6ca5D4d4d6b4f',
  optimism: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b",
  ethereum: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
  avalanche: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
  bsc: "0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8",
} 

export const WETH: { [key in Chains]: any } = {
  polygon: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  polygonTestnet: '',
  arbitrum: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1 ",
  arbitrumTestnet: '',
  optimism: "",
  ethereum: "",
  avalanche: "",
  bsc: "",
}


export const TOKENS: { [key in Chains]: any } = {

  polygon: {
    matic: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    wmatic: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    weth: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    usdc:'0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    dai:'0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    usdt:'0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  },

  arbitrum: {
    eth: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    usdc:'0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    dai:'0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    usdt:'0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
  },
  
  optimism: {},

  ethereum: {},

  avalanche: {},

  bsc: {},

  polygonTestnet: {
    matic: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    usdc:'0x742DfA5Aa70a8212857966D491D67B09Ce7D6ec7',
    usdt:'0x6Fc340be8e378c2fF56476409eF48dA9a3B781a0',
    wmatic: "0x5B67676a984807a212b1c59eBFc9B3568a474F0a",
    weth: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
    dai:'0xd393b1E02dA9831Ff419e22eA105aAe4c47E1253',
  },

  arbitrumTestnet: {
    eth: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    sgeth: "0xb45186E02CC4AbC0e390EdFfdc2aBC8D523ea15e",
    weth: '',
    usdc:'0x6aAd876244E7A1Ad44Ec4824Ce813729E5B6C291',
    usdt:'0x533046F316590C19d99c74eE661c6d541b64471C',
  },
}

// Function

export const DEFAULT_BRIDGE_OPTION: BridgeOptions = {
  max: false,
  network: "MAINNET",
  slipage: 2          // 2% of slipage tolerance
}

// STARGATE

export const MINIMUM_GAS: bigint = BigInt( 100000 )

export enum Stargate_func {
  NULL,
  SWAP_REMOTE,
  ADD_LIQUIDITY,          
  REDEEM_LOCAL_CALL_BACK,
  WITHDRAW_REMOTE,
}

export const STARGATE_POOL_IDS: { [key in Chains]: any } = {

  arbitrum: {
    USDC: 1,
    USDT: 2,
    FRAX: 7,
    ETH: 13,
    LUSD: 15,
    MAI: 16,
  },

  polygon: {
    USDC: 1,
    USDT: 2,
    DAI: 3,
    MAI: 16,
  },

  optimism: {
    USDC: 1,
    DAI: 3,
    FRAX: 7,
    ETH: 13,
    sUSD: 14,
    LUSD: 15,
    MAI: 16,
  },

  ethereum: {
    USDC: 1,
    USDT: 2,
    DAI: 3,
    FRAX: 7,
    USDD: 11,
    ETH: 13,
    sUSD: 14,
    LUSD: 15,
    MAI: 16,
    METIS: 17,
    metisUSDT: 19,
  },

  avalanche: {
    USDC: 1,
    USDT: 2,
    FRAX: 7,
    MAI: 16,
    metisUSDT: 19,  
  },

  bsc: {
    USDT: 2,
    BUSD: 5,
    USDD: 11,
    MAI: 16,
    METIS: 17,
    metisUSDT: 19,
  },

  polygonTestnet: {},

  arbitrumTestnet: {},
}

export const STARGATE_CHAIN_ID = {

  ethereum: 101,
  bsc: 102,
  avalanche: 106,
  polygon: 109,
  polygonTestnet: 10109,
  arbitrum: 110,
  arbitrumTestnet: 10143,
  optimism: 111,

  // fantom: 112,
  // metis: 151,
  // base: 184,
  // linea: 183,
  // kava: 177,
}

// Misc 
export const CHAIN_ID: { [ key in Chains ]: number } = {

  arbitrum: 42161,
  arbitrumTestnet: 42170,
  polygon: 137,
  polygonTestnet: 80001,
  optimism: 10,
  ethereum: 1,
  avalanche: 43114,
  bsc: 56,
}