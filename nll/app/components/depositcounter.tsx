"use client"
import { useState } from "react"

export default function DepositCounter() {
    const [active, setActive] = useState('b1')
    return (
        <div className="bg-white w-80 h-64 rounded-3xl flex flex-col items-center justify-center font-Urbanist">
            <input className="rounded-xl w-60 h-14 border-2 border-[#979DAA] placeholder:text-right px-4 placeholder:text-[#646D80] text-2xl" placeholder="$ 50.00" />
            <div className="flex gap-3 mt-8 text-[#979DAA] text-lg font-semibold "> 
                <button onClick={() => setActive('b1')} className={`w-14 h-10 rounded-lg   border-[#979DAA] ${active === 'b1' ? 'bg-[#18C258] text-white border-0' : 'border-2'}`}> $25 </button>
                <button onClick={() => setActive('b2')} className={`w-14 h-10 rounded-lg   border-[#979DAA] ${active === 'b2' ? 'bg-[#18C258] text-white border-0' : 'border-2'}`}> $50 </button>
                <button onClick={() => setActive('b3')} className={`w-14 h-10 rounded-lg   border-[#979DAA] ${active === 'b3' ? 'bg-[#18C258] text-white border-0' : 'border-2'}`}> $75 </button>
                <button onClick={() => setActive('b4')} className={`w-14 h-10 rounded-lg   border-[#979DAA] ${active === 'b4' ? 'bg-[#18C258] text-white border-0' : 'border-2'}`}> $100 </button>
            </div>
            <button className="bg-black hover:scale-105 transition-all rounded-xl w-60 px-16 py-4 mt-4 text-center text-lg font-semibold font-Urbanist text-white"> Deposit </button>
        </div>
    )
}