import { AptosConfig, Network } from "@aptos-labs/ts-sdk";

export default new AptosConfig({

    network:Network.RANDOMNET,
    fullnode:"https://fullnode.random.aptoslabs.com/v1",
    faucet:"https://faucet.random.aptoslabs.com/",

})