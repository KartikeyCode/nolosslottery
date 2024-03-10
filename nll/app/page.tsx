"use client"
import Image from "next/image";
import Navbar from "./components/navbar-home";
import mojis from "@/public/faces.png"
import bgcolours from "@/public/homecolours.png"
export default function Home() {

  return (
    <div className="min-h-screen bg-[#F4F4FC]">
      <Navbar />
      <div className="flex gap-36">
        <div className="lefthalf flex flex-col  md:mt-16 md:ml-16 2xl:mt-32 2xl:ml-32">
          <h1 className="w-[32.5rem] h-40 font-semibold text-6xl font-Urbanist">
            <span style={{ color: '#18C258' }}>Earn</span> with no Loss, No risks involved
          </h1>
          <h2 className=" md:w-[15rem] xl:w-[15rem]  2xl:w-[27.8rem] text-xl font-medium font-Urbanist text-[#646D80]"> Earning made simple than ever with zero loss & risk, Deposit now and get exciting rewards  </h2>
          <div className="flex  md:mt-10 2xl:mt-20 gap-12"> 
          <div className=" learn flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="black" />
          </svg> 
          <a href="/" className="text-black font-Urbanist text-lg font-semibold ">Learn more </a>
          </div> 
          <div className="button">
              <a href="/deposit">
              <div className=" hover:scale-105 transition-all rounded-xl px-16 py-4 bg-gradient-to-r from-[#18C258] to-[#5CC434] font-Urbanist text-white text-lg font-semibold">Deposit </div>
              </a>
          </div>
          </div>
          <Image src={mojis} className="md:mt-10 2xl:mt-20" alt="mojis"/>
          <div className="flex mt-10 gap-11">
              <div className="flex flex-col ">
                <h1 className="text-[#18C258] text-3xl font-Urbanist font-bold"> 1 million + </h1>
                <h2 className="text-[#979DAA] text-xl font-semibold"> Happy users </h2>
              </div>
              <div className="flex flex-col ">
                <h1 className="text-[#18C258] text-3xl font-Urbanist font-bold"> $750,000 </h1>
                <h2 className="text-[#979DAA] text-xl font-semibold"> Distribution </h2>
              </div>
          </div>
        </div>
        <div className="righthalf flex flex-col items-center">
        <Image className="absolute z-0 md:right-1 md:w-[35rem] xl:-top-14 xl:right-1 xl:w-[50rem] 2xl:right-28 2xl:top-9 " src={bgcolours} alt="bgcolours" />
        </div>
      </div>
    </div>
  );
}
