export default [





    /***********************************|
    |              MAINNET              |
    |__________________________________*/
    {
        "api": { "url": "https://api.etherscan.io/api", "key": "" },
        "chainId": "1",
        "network": "Ethereum Mainnet",
        "stargateId": "101",
        "name": "Ethereum Mainnet",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [ 
          "https://mainnet.infura.io/v3/429467ee5c414c8686b4427c9b3dda16"
        ],
        "watch": ["rpc", "api"],
        "contracts": ["0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc"],
        "tokens": [
            {
                "name": "Dai Stablecoin",
                "symbol": "DAI",
                "decimals": 18,
                "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F"
            },
            {
                "name": "USD Coin",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
            },
            {
                "name": "Tether USD",
                "symbol": "USDT",
                "decimals": 6,
                "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7"
            }
        ],
        "xvmList": ["0x3be8b60ddf9feff6b2426e47a7619d7cbc786d97", "0x752bC92211d1ecbb31f84e57c9dFc39A15DF9CFA"],
        "infoURL": "https://etherscan.io"
    },
    {
        "api": { "url": "http://api.arbiscan.io/api", "key": "" },
        "chainId": "42161",
        "network": "Arbitrum",
        "stargateId": "110",
        "name": "Arbitrum",
        "debug": false,
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [ "https://arbitrum-mainnet.infura.io/v3/429467ee5c414c8686b4427c9b3dda16" ],
        "watch": ["rpc", "api"],
        "contracts": ["0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc"],
        "tokens": [
            {
                "name": "Dai Stablecoin",
                "symbol": "DAI",
                "decimals": 18,
                "address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
            },
            {
                "name": "USD Coin",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"
            },
            {
                "name": "Tether USD",
                "symbol": "USDT",
                "decimals": 6,
                "address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
            }
        ],
        "xvmList": ["0x752bC92211d1ecbb31f84e57c9dFc39A15DF9CFA"],
        "infoURL": "https://explorer.arbitrum.io"
    },
    {
        "api": { "url": "https://api.zksync.io/api/v0.2", "key": "" },
        "chainId": "zksync",
        "network": "zksync",
        "stargateId": "3",
        "name": "zkSync Lite",
        "debug": false,
        "nativeCurrency": {
            "id": 0,
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [ "https://mainnet.era.zksync.io" ],
        "watch": ["api"],
        "contracts": [],
        "tokens": [
            {
                "id": 1,
                "name": "DAI",
                "symbol": "DAI",
                "decimals": 18,
                "address": "0x6b175474e89094c44da98b954eedeac495271d0f"
            },
            {
                "id": 2,
                "name": "USDC",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            },
            {
                "id": 4,
                "name": "USDT",
                "symbol": "USDT",
                "decimals": 6,
                "address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
            }
        ],
        "infoURL": ""
    },
    {
        "api": { "url": "", "key": "" },
        "chainId": "SN_MAIN",
        "network": "mainnet-alpha",
        "stargateId": "4",
        "name": "Starknet",
        "debug": false,
        "contracts": ["0x0173f81c529191726c6e7287e24626fe24760ac44dae2a1f7e02080230f8458b"],
        "nativeCurrency": {
            "id": 0,
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"
        },
        "rpc": ["https://starknet-mainnet.infura.io/v3/429467ee5c414c8686b4427c9b3dda16"],
        "watch": ["rpc"],
        "tokens": [
            {
                "name": "DAI",
                "symbol": "DAI",
                "decimals": 18,
                "address": "0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"
            },
            {
                "name": "USDC",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"
            },
            {
                "name": "USDT",
                "symbol": "USDT",
                "decimals": 6,
                "address": "0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8"
            }
        ],
        "infoURL": ""
    },
    {
        "api": { "url": "https://api.polygonscan.com/api", "key": "" },
        "chainId": "137",
        "network": "Polygon",
        "stargateId": "Polygon",
        "name": "Polygon",
        "rpc": [ "https://polygon-mainnet.infura.io/v3/78581dc93b6d43088baba2bb1606d0c8" ],
        "nativeCurrency": {
            "name": "MATIC",
            "symbol": "MATIC",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "watch": ["api", "rpc"],
        "contracts": ["0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc"],
        "tokens": [
            {
                "name": "Dai Stablecoin",
                "symbol": "DAI",
                "decimals": 18,
                "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
            },
            {
                "name": "Wrapped Ether",
                "symbol": "ETH",
                "decimals": 18,
                "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
            },
            {
                "name": "USD Coin",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
            },
            {
                "name": "Tether USD",
                "symbol": "USDT",
                "decimals": 6,
                "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
            }
        ],
        "xvmList": ["0x752bC92211d1ecbb31f84e57c9dFc39A15DF9CFA"],
        "infoURL": "https://polygonscan.com"
    },
    {
        "api": { "url": "https://api-optimistic.etherscan.io/api", "key": "" },
        "chainId": "10",
        "network": "Optimism",
        "stargateId": "111",
        "name": "Optimism",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [ 
          "https://optimism-mainnet.infura.io/v3/429467ee5c414c8686b4427c9b3dda16",
          "https://opt-mainnet.g.alchemy.com/v2/demo" 
        ],
        "watch": ["api", "rpc"],
        "contracts": ["0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc"],
        "debug": false,
        "tokens": [
            {
                "name": "Dai Stablecoin",
                "symbol": "DAI",
                "decimals": 18,
                "address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
            },
            {
                "name": "USD Coin",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607"
            },
            {
                "name": "Tether USD",
                "symbol": "USDT",
                "decimals": 6,
                "address": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"
            }
        ],
        "xvmList": ["0x752bC92211d1ecbb31f84e57c9dFc39A15DF9CFA"],
        "infoURL": "https://optimistic.etherscan.io"
    },
    {
        "api": { "url": "https://api.x.immutable.com/v1", "key": "" },
        "chainId": "immutableX",
        "network": "immutableX",
        "stargateId": "8",
        "name": "Immutable X",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [],
        "watch": ["api"],
        "contracts": [],
        "tokens": [
            {
                "name": "USD Coin",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            }
        ],
        "infoURL": ""
    },
    {
        "api": {
            "url": "https://api3.loopring.io/api/v3",
            "key": ""
        },
        "chainId": "1",
        "network": "Loopring",
        "stargateId": "9",
        "name": "Loopring",
        "nativeCurrency": {
            "id": 0,
            "name": "Ethereum",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": ["wss://ws.api3.loopring.io/v3/ws"],
        "watch": ["api"],
        "contracts": [],
        "tokens": [],
        "infoURL": ""
    },
    {
        "api": { "url": "https://andromeda-explorer.metis.io/api", "key": "" },
        "chain": "ETH",
        "chainId": "1088",
        "network": "1088",
        "stargateId": "10",
        "name": "Metis",
        "nativeCurrency": {
            "name": "Metis Token",
            "symbol": "METIS",
            "decimals": 18,
            "address": "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000"
        },
        "rpc": ["https://metis-mainnet.public.blastapi.io"],
        "watch": ["api", "rpc"],
        "contracts": [],
        "tokens": [
            {
                "name": "Ether (WETH)",
                "symbol": "ETH",
                "decimals": 18,
                "address": "0x420000000000000000000000000000000000000a"
            },
            {
                "name": "USDC Token",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21"
            }
        ],
        "infoURL": "https://andromeda-explorer.metis.io"
    },
    {
        "api": { "url": "https://api.dydx.exchange", "key": "" },
        "chainId": "dydx",
        "network": "dydx",
        "stargateId": "11",
        "name": "Dydx",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 0,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [],
        "watch": ["api"],
        "contracts": [],
        "tokens": [
            {
                "name": "USD Coin",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            }
        ],
        "infoURL": ""
    },
    {
        "api": { "url": "https://api.zks.app/v3/1", "key": "" },
        "chainId": "ZKSpace",
        "network": "13",
        "stargateId": "12",
        "name": "ZKSpace",
        "nativeCurrency": {
            "id": 0,
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [],
        "watch": ["api"],
        "contracts": [],
        "tokens": [
            {
                "id": 4,
                "name": "USD Coin",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            }
        ],
        "infoURL": "https://zkspace.info"
    },
    {
        "api": { "url": "https://api.bobascan.com/api", "key": "" },
        "chainId": "288",
        "network": "288",
        "stargateId": "13",
        "name": "Boba",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [ "https://mainnet.boba.network" ],
        "watch": ["rpc", "api"],
        "contracts": [],
        "tokens": [],
        "infoURL": "https://bobascan.com"
    },
    {
        "api": {
            "url": "https://zksync2-mainnet.zkscan.io/api",
            "key": ""
        },
        "chainId": "324",
        "network": "324",
        "stargateId": "14",
        "name": "zkSync Era",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": ["https://mainnet.era.zksync.io"],
        "watch": ["rpc"],
        "contracts": ["0xbf3922a0cebbcd718e715e83d9187cc4bba23f11"],
        "tokens": [
            {
                "name": "USD Coin",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4"
            }
        ],
        "infoURL": "https://explorer.zksync.io"
    },
    {
        "api": { "url": "https://api.bscscan.com/api", "key": "" },
        "chainId": "56",
        "network": "Binance Smart Chain",
        "stargateId": "102",
        "name": "BNB Chain",
        "debug": false,
        "contracts": [],
        "nativeCurrency": {
            "name": "BNB",
            "symbol": "BNB",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [ "https://bsc-dataseed1.binance.org" ],
        "watch": ["api", "rpc"],
        "tokens": [
            {
                "name": "Binance-Peg Ethereum",
                "symbol": "ETH",
                "decimals": 18,
                "address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
            }
        ],
        "infoURL": "https://bscscan.com"
    },
    {
        "api": { "url": "https://api-nova.arbiscan.io/api", "key": "" },
        "chainId": "42170",
        "network": "42170",
        "stargateId": "16",
        "name": "Arbitrum Nova",
        "debug": false,
        "contracts": ["0xD9D74a29307cc6Fc8BF424ee4217f1A587FBc8Dc"],
        "nativeCurrency": {
            "name": "ETH",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": ["https://arbitrum-mainnet.infura.io/v3/78581dc93b6d43088baba2bb1606d0c8"],
        "watch": ["api", "rpc"],
        "tokens": [
            {
                "name": "USD Coin",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0x750ba8b76187092b0d1e87e28daaf484d1b5273b"
            }
        ],
        "infoURL": "https://nova.arbiscan.io"
    },
    {
        "api": {
            "url": "https://api-zkevm.polygonscan.com",
            "key": "",
            "intervalTime": 10000
        },
        "chainId": "1101",
        "network": "1101",
        "stargateId": "17",
        "name": "Polygon zkEVM",
        "debug": false,
        "contracts": ["0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc"],
        "nativeCurrency": {
            "name": "ETH",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": ["https://zkevm-rpc.com"],
        "xvmList": [],
        "watch": ["rpc"],
        "tokens": [
            {
                "name": "USD Coin",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035"
            },
            {
                "name": "Tether USD",
                "symbol": "USDT",
                "decimals": 6,
                "address": "0x1e4a5963abfd975d8c9021ce480b42188849d41d"
            }
        ],
        "infoURL": "https://zkevm.polygonscan.com/"
    },
    {
        "api": {
            "url": "https://api.basescan.org/api",
            "key": ""
        },
        "chainId": "8453",
        "network": "8453",
        "stargateId": "21",
        "name": "BASE Base",
        "debug": false,
        "contracts": ["0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc"],
        "features": [],
        "nativeCurrency": {
            "name": "ETH",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [ "https://developer-access-mainnet.base.org" ],
        "watch": [
            "rpc",
            "api"
        ],
        "tokens": [],
        "infoURL": "https://basescan.org"
    },
    {
        "api": {
            "url": "https://api.basescan.org/api",
            "key": ""
        },
        "chainId": "43114",
        "network": "43114",
        "stargateId": "",
        "name": "Avalanche C-Chain",
        "debug": false,
        "contracts": ["0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc"],
        "features": [],
        "nativeCurrency": {
            "name": "AVAX",
            "symbol": "AVAX",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [ "https://avalanche-mainnet.infura.io/v3/429467ee5c414c8686b4427c9b3dda16" ],
        "watch": [
            "rpc",
            "api"
        ],
        "tokens": [],
        "infoURL": "https://basescan.org"
    },
    {
        "api": {
            "url": "http://explorer.linea.build/api",
            "key": ""
        },
        "chainId": "59144",
        "network": "59144",
        "stargateId": "23",
        "name": "Linea",
        "debug": false,
        "contracts": ["0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc"],
        "nativeCurrency": {
            "name": "ETH",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [
          "https://linea-mainnet.infura.io/v3/429467ee5c414c8686b4427c9b3dda16",
          "https://linea.drpc.org"
        ],
        "watch": ["rpc"],
        "router": {
            "0x13e46b2a3f8512ed4682a8fb8b560589fe3c2172": "OrbiterRouterV3"
        },
        "tokens": [
            {
                "name": "USDC",
                "symbol": "USDC",
                "decimals": 6,
                "address": "0x176211869ca2b568f2a7d4ee941e073a821ee1ff"
            }
        ],
        "infoURL": "https://lineascan.build"
    },
    {
        "api": {
            "url": "https://explorer.mantle.xyz/api",
            "key": ""
        },
        "chainId": "5000",
        "network": "5000",
        "stargateId": "24",
        "name": "Mantle",
        "debug": false,
        "contracts": ["0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc"],
        "nativeCurrency": {
            "name": "MNT",
            "symbol": "MNT",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": ["https://rpc.mantle.xyz"],
        "watch": ["rpc"],
        "router": {
            "0x13e46b2a3f8512ed4682a8fb8b560589fe3c2172": "OrbiterRouterV3"
        },
        "tokens": [
            {
                "name": "WETH",
                "symbol": "ETH",
                "decimals": 18,
                "address": "0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111"
            }
        ],
        "infoURL": "https://explorer.mantle.xyz"
    },
    {
        "api": {
            "url": "",
            "key": ""
        },
        "chainId": "204",
        "network": "204",
        "stargateId": "25",
        "name": "OPBNB",
        "debug": false,
        "features": [],
        "contracts": ["0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc"],
        "nativeCurrency": {
            "name": "BNB",
            "symbol": "BNB",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": ["https://opbnb-mainnet-rpc.bnbchain.org"],
        "router": {
            "0x13e46b2a3f8512ed4682a8fb8b560589fe3c2172": "OrbiterRouterV3"
        },
        "watch": ["rpc"],
        "tokens": [],
        "infoURL": "https://mainnet.opbnbscan.com"
    },
    {
        "api": {
            "url": "",
            "key": ""
        },
        "chainId": "7777777",
        "network": "7777777",
        "stargateId": "30",
        "name": "Zora",
        "features": [],
        "debug": false,
        "contracts": ["0x13e46b2a3f8512ed4682a8fb8b560589fe3c2172"],
        "nativeCurrency": {
            "name": "ETH",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        },
        "rpc": [ "https://rpc.zora.energy" ],
        "router": {
            "0x2598d7bc9d3b4b6124f3282e49eee68db270f516": "OrbiterRouterV3"
        },
        "watch": ["rpc"],
        "tokens": [],
        "infoURL": "https://explorer.zora.energy"
    },
  
]