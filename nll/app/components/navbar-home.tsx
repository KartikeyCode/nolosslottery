import "./wallet.css"
import aptosConfig from "../aptosconfig"
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import Image from "next/image";
import { Aptos } from "@aptos-labs/ts-sdk";
import logo from "@/public/logo.png"
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

export default function Navbar() {
  const aptos = new Aptos(aptosConfig);
  const {
    connect,
    account,
    network,
    connected,
    disconnect,
    wallet,
    wallets,
    signAndSubmitTransaction,
    signTransaction,
    signMessage,
    signMessageAndVerify,
  } = useWallet();
 let contract_address = "0x496b7d4caa2f394e9ba633548fe5717b755ebe313736917dd0538440f1e19747"
  const onSignAndSubmitTransaction = async () => {
    const response = await signAndSubmitTransaction({
      sender: account?.address,
      data: {
        function: "0x496b7d4caa2f394e9ba633548fe5717b755ebe313736917dd0538440f1e19747::usdc::mint_to",
        typeArguments: [],
        functionArguments:[ "10000000000"] 
        
      },
    });
    // if you want to wait for transaction
    try {
      await aptos.waitForTransaction({ transactionHash: response.hash });
    } catch (error) {
      console.error(error);
    }
  };

  function Mint(){
    connected?  
    onSignAndSubmitTransaction()
    :
    alert("Please connect to your aptos wallet") 
  }

  return (
    <div className="h-14 ml-14 pt-9  flex  items-center justify-between bg-white z-1" >
      <Image className="" src={logo} alt="logo" />
      <div style={{ zIndex: 1 }} className="flex gap-8 self-center ">
        <a className="text-black text-lg font-semibold font-Urbanist" href="/"> Home </a>
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/deposit"> Deposit </a>
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/leaderboard"> Leaderboard </a>
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/faq"> FAQ </a>
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/refer"> Refer </a>
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/docs"> Docs </a>
      </div>
      <div className="flex z-10 gap-4 items-center">
        <button onClick={Mint} className="w-36 h-12 bg-black text-white rounded-lg hover:scale-105 transition-all"> Mint </button>
        <WalletSelector />
      </div>

    </div>
  );
}
