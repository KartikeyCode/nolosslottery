"use client"
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import Image from "next/image";
import trophy from "@/public/trophy.png"
import Navbar from "./components/navbar-home";
import mojis from "@/public/faces.png"
import bgcolours from "@/public/homecolours.png"
export default function Home() {
  let recentdraw = "7200"
  let reward = "75.00"
  return (
    <div className="min-h-screen bg-white">
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
          <Image src={mojis} className="md:mt-10 2xl:mt-20" alt="mojis" />
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
        <div className="righthalf flex flex-col items-center ">
          <Image className="absolute z-0 md:right-1 md:w-[35rem] 2xl:scale-110 xl:-top-14 xl:right-1 xl:w-[50rem] 2xl:right-28 2xl:top-9 " src={bgcolours} alt="bgcolours" />
          <div className="flex flex-col xl:-ml-28 xl:-mt-10 ">

            <div className="shadow-sm justify-between flex py-4 px-4 md:mt-[5rem] xl:mt-[11rem] xl:ml-[14rem] 2xl:mt-[11rem] 2xl:ml-[35.5rem] xl:w-[20rem] 2xl:w-96 h-[5.5rem] bg-[#FFFFFFA3] backdrop-blur-sm rounded-xl ">
              <div className="flex flex-col font-Urbanist ">
                <h1 className="text-black font-semibold text-lg "> Recent Draw </h1>
                <h2 className="text-[#979DAA] text-xl font-medium ">7 mar 2024 </h2>
              </div>
              <h1 className="text-[#18C258] self-center font-bold text-2xl font-Urbanist "> ${recentdraw} </h1>
            </div>
            <div style={{ zIndex: 1 }} className="flex bottomcontainer z-1">
              <div className=" md:w-56 xl:w-60 h-72 bg-[#FFFFFFA3] md:absolute xl:static md:right-[18.5rem] md:top-[15.3rem] 2xl:ml-[20rem] xl:-ml-[1rem] rounded-xl flex flex-col items-center ">
                <h1 className="text-[#646D80] font-Urbanist text-lg font-semibold mt-6"> Win Jackpot </h1>
                <Image src={trophy} alt="trophy" />
                <button className="bg-black w-40 h-10 rounded-xl hover:scale-105 transition-all text-white font-Urbanist"> Participate </button>
              </div>
              <div className="flex flex-col ">

                <div className="bg-[#FFFFFFA3] xl:w-[20rem]  2xl:w-96 h-48 mt-2   ml-2 rounded-xl shadow-sm">

                </div>
                <div className="bg-[#FFFFFFA3] flex xl 2xl:w-96 xl:w-[20rem] ml-2 mt-2 xl:h-20 2xl:mt-2 2xl:ml-2 rounded-xl shadow-sm py-5 px-5 items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                    <path d="M23.7316 46.3362C36.3882 46.3362 46.5705 36.1539 46.5705 23.4972C46.5705 10.8405 36.3882 0.658203 23.7316 0.658203C11.0749 0.658203 0.892578 10.8405 0.892578 23.4972C0.892578 36.1539 11.0749 46.3362 23.7316 46.3362Z" fill="#2775CA" />
                    <path d="M30.0132 27.1132C30.0132 23.7826 28.0148 22.6406 24.0179 22.1649C21.1631 21.7842 20.5921 21.0229 20.5921 19.6905C20.5921 18.3581 21.5438 17.5019 23.447 17.5019C25.1599 17.5019 26.1116 18.0728 26.5873 19.5003C26.6826 19.7858 26.968 19.976 27.2535 19.976H28.776C29.1567 19.976 29.4422 19.6905 29.4422 19.31V19.2148C29.0615 17.1211 27.3485 15.5035 25.1599 15.3132V13.0293C25.1599 12.6486 24.8744 12.3631 24.3987 12.2679H22.9712C22.5905 12.2679 22.305 12.5533 22.2098 13.0293V15.218C19.3549 15.5987 17.547 17.5019 17.547 19.881C17.547 23.0214 19.4501 24.2583 23.447 24.7343C26.1116 25.21 26.968 25.781 26.968 27.3037C26.968 28.8263 25.6356 29.8731 23.8277 29.8731C21.3533 29.8731 20.4968 28.8261 20.2114 27.3987C20.1163 27.0182 19.8309 26.8277 19.5454 26.8277H17.9275C17.547 26.8277 17.2615 27.1132 17.2615 27.4939V27.5892C17.642 29.9681 19.1646 31.681 22.305 32.157V34.4409C22.305 34.8213 22.5905 35.1068 23.0662 35.2021H24.4937C24.8744 35.2021 25.1599 34.9166 25.2551 34.4409V32.157C28.11 31.681 30.0132 29.6826 30.0132 27.1132Z" fill="white" />
                    <path d="M18.8781 37.1054C11.4554 34.441 7.64884 26.1619 10.4087 18.8342C11.8361 14.8374 14.9765 11.7923 18.8781 10.3648C19.2588 10.1746 19.4491 9.88909 19.4491 9.41312V8.08093C19.4491 7.7002 19.2588 7.41471 18.8781 7.3197C18.7828 7.3197 18.5926 7.3197 18.4974 7.41471C9.457 10.2696 4.50848 19.8811 7.36335 28.9215C9.07627 34.2505 13.1683 38.3426 18.4974 40.0555C18.8781 40.2458 19.2588 40.0555 19.3538 39.6748C19.4491 39.5798 19.4491 39.4845 19.4491 39.2943V37.9619C19.4491 37.6764 19.1636 37.2959 18.8781 37.1054ZM28.9654 7.41471C28.5847 7.22446 28.2039 7.41471 28.1089 7.79544C28.0137 7.89068 28.0137 7.98569 28.0137 8.17616V9.50836C28.0137 9.88909 28.2992 10.2696 28.5846 10.4601C36.0073 13.1245 39.8139 21.4036 37.054 28.7313C35.6266 32.7281 32.4862 35.7732 28.5846 37.2006C28.2039 37.3909 28.0137 37.6764 28.0137 38.1523V39.4845C28.0137 39.8653 28.2039 40.1507 28.5846 40.2458C28.6799 40.2458 28.8701 40.2458 28.9654 40.1507C38.0057 37.2959 42.9543 27.6843 40.0994 18.644C38.3865 13.2197 34.1992 9.12764 28.9654 7.41471Z" fill="white" />
                  </svg>
                  <div className="flex flex-col font-Urbanist  ">
                      <h1 className="text-[#979DAA] text-lg font-medium w-28"> Your reward </h1>
                      <h2 className="text-black ] text-xl font-semibold"> USDC </h2>
                  </div>
                  <div className="flex flex-col font-Urbanist gap-px ml-5 2xl:ml-24">
                      <h2 className="text-black ] text-xl font-semibold"> ${reward} </h2>
                      <h1 className="text-[#646D80] text-xs font-semibold "> {reward} USDC </h1>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
