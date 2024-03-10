import Image from "next/image";
import logo from "@/public/logo.png"
export default function NavbarDeposit() {
  return (
   <div className="h-14 ml-14 pt-9  flex  items-center bg-[#F4F4FC]">
     <Image className="self-center" src={logo} alt="logo"/>
     <div className="flex gap-8 self-center md:ml-[9rem]  xl:ml-[19rem] 2xl:ml-[36rem] ">
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/"> Home </a>
        <a className="text-black text-lg font-semibold font-Urbanist" href="/deposit"> Deposit </a>
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/leaderboard"> Leaderboard </a>
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/faq"> FAQ </a>
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/refer"> Refer </a>
        <a className="text-[#979DAA] text-lg font-semibold font-Urbanist" href="/docs"> Docs </a>
     </div>
   </div>
  );
}
