import "./wallet.css"
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import Image from "next/image";
import logo from "@/public/logo.png"
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
export default function Navbar() {
  return (
   <div className="h-14 ml-14 pt-9  flex  items-center justify-between bg-[#F4F4FC] ">
     <Image className="" src={logo} alt="logo"/>
     <div className="md:flex gap-8 self-center hidden ">
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/"> Home </a>
        <a className=" text-[#979DAA] text-lg font-semibold font-Urbanist" href="/deposit"> Deposit </a>
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/leaderboard"> Leaderboard </a>
        <a className="text-black text-lg font-semibold font-Urbanist" href="/faq"> FAQ </a>
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/refer"> Refer </a>
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/docs"> Docs </a>
     </div>
     
     <WalletSelector/>
   
   </div>
  );
}
