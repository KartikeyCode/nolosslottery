"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavbarDeposit from "../components/navbar-deposit";
import DrawHistoryTable from "../components/drawhistorytable";
export default function Deposit() {
    const [active, setActive] = useState('b1')
    return (
        <div className="bg-[#F4F4FC] min-h-screen ">
            <NavbarDeposit />
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col items-center px-8 py-12 2xl:px-24 2xl:py-20">
                    <div className="flex flex-col ">
                        <h1 className="font-Urbanist text-black text-lg font-bold text-left"> Filter </h1>
                        <div className=" filters w-[30rem] grid grid-cols-3 gap-5 2xl:gap-x-7 px-4 py-2 rounded-md mt-8">
                            <button onClick={() => setActive('b1')} className={`text-[#979DAA] hover:scale-105 transition-all font-medium px-3 py-2 rounded-[2.5rem] border-2 border-[#979DAA] ${active === 'b1' ? 'bg-[#18C258] text-white border-0' : ''}`}>General</button>
                            <button onClick={() => setActive('b2')} className={`text-[#979DAA] hover:scale-105 transition-all font-medium px-3 py-2 rounded-[2.5rem] border-2 border-[#979DAA] ${active === 'b2' ? 'bg-[#18C258] text-white border-0' : ''}`}>Most Recent</button>
                            <button onClick={() => setActive('b3')} className={`text-[#979DAA] hover:scale-105 transition-all font-medium px-3 py-2 rounded-[2.5rem] border-2 border-[#979DAA] ${active === 'b3' ? 'bg-[#18C258] text-white border-0' : ''}`}>Highest Prize</button>
                            <button onClick={() => setActive('b4')} className={`text-[#979DAA] hover:scale-105 transition-all font-medium px-3 w-[9rem] py-2 rounded-[2.5rem] border-2 border-[#979DAA] ${active === 'b4' ? 'bg-[#18C258] text-white border-0' : ''}`}>Lowest Prizes</button>
                            <button onClick={() => setActive('b5')} className={`text-[#979DAA] hover:scale-105 transition-all font-medium px-3 py-2 rounded-[2.5rem] border-2 border-[#979DAA] ${active === 'b5' ? 'bg-[#18C258] text-white border-0' : ''}`}>Last Week</button>
                            <button onClick={() => setActive('b6')} className={`text-[#979DAA] hover:scale-105 transition-all font-medium px-3 py-2 rounded-[2.5rem] border-2 border-[#979DAA] ${active === 'b6' ? 'bg-[#18C258] text-white border-0' : ''}`}>Last Month</button>
                            <button onClick={() => setActive('b7')} className={`text-[#979DAA] hover:scale-105 transition-all font-medium px-3 py-2 rounded-[2.5rem] border-2 border-[#979DAA] ${active === 'b7' ? 'bg-[#18C258] text-white border-0' : ''}`}>Last Year</button>
                        </div>
                        <div className="rewards items-center px-36 py-12 bg-[#292929] rounded-2xl flex flex-col w-[28rem] h-[26rem] 2xl:w-[33rem] 2xl:h-[29rem] mt-6">
                            <h1 className="text-white font-Urbanist text-5xl font-semibold"> $7200 </h1>
                            <h1 className="text-[#18C258] text-2xl font-medium mt-5 font-Urbanist "> Rewards </h1>
                            <h1 className="text-[#979DAA] text-3xl font-semibold font-Urbanist w-72 text-center"> Distributed till now </h1>
                            <div className="border-2 border-[#979DAA] flex w-96 h-14 items-center justify-center rounded-xl mt-16">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 0 8)" fill="#D9D9D9" />
                                </svg>
                                <h2 className="text-white font-Urbanist text-lg font-bold"> 1 million+ active users </h2>
                            </div>
                            <Link href="/deposit">
                            <div className="bg-[#18C258] flex items-center justify-center font-Urbanist text-lg font-semibold hover:scale-105 transition-all text-white  w-96 h-14 rounded-xl mt-6 px-16 py-4 cursor-pointer"> Deposit </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <DrawHistoryTable/>
            </div>
        </div>
    );
}
