import { AddressLike } from "ethers";

export type Chain = {
    chainId: number;
    name: string;
    icon: string;
    isL1: boolean;
    sendingEnabled: boolean;
    receivingEnabled: boolean;
    refuel: {
        sendingEnabled: boolean;
        receivingEnabled: boolean;
    };
    currency: {
        address: AddressLike;
        icon: string;
        name: string;
        symbol: string;
        decimals: number;
        minNativeCurrencyForGas: string;
    };
    rpcs: string[];
    explorers: string[];
};