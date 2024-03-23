import Image from "next/image";
import pfp from "@/public/hisoka.jpeg";
import { useState } from "react";

export default function Leaderboard2() {
    // JSON data for card details
    const cardData = [
        { winners: "3", date: "1 Mar 2024", amount: "$ 7.2 million", imgsrc: pfp },
        { winners: "1", date: "1 Mar 2024", amount: "$ 7.2 million", imgsrc: pfp },
        { winners: "3", date: "1 Mar 2024", amount: "$ 7.2 million", imgsrc: pfp },
        { winners: "3", date: "1 Mar 2024", amount: "$ 7.2 million", imgsrc: pfp },
        { winners: "3", date: "1 Mar 2024", amount: "$ 7.2 million", imgsrc: pfp },
    ];

    interface CardProps {
        winners: string; 
        date: string; 
        amount: string; 
        imgsrc:any;
    }

    // Card component
    const Card: React.FC<CardProps> = ({ winners,date,amount,imgsrc }) => {
        return (
            <div className="card flex items-center justify-between gap-3 border-b-2 pb-2 border-[#EDEDFF]">
                <div className="flex items-center gap-2">
                    <Image src={imgsrc} className="w-10 h-10 rounded-full " alt="pfp" />
                    <div className="flex flex-col">
                        <div className="flex gap-1">
                            <h1 className="text-black font-medium">{winners}</h1>
                            <h1 className="text-black font-medium">{parseInt(winners) === 1 ? "winner" : "winners"} </h1>
                        </div>
                        <h2 className="text-[#979DAA] text-xs">{date}</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                <h1 className="text-[#646D80] font-Urbanist text-xs font-semibold"> Pool prize </h1>    
                <h1 className="text-[#18C258] font-semibold self-center">{amount}</h1>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white flex flex-col w-[19.5rem] h-[29rem] rounded-2xl p-4 font-Urbanist">
            <h1 className="text-black text-xl text-left font-Urbanist font-semibold">
                Top 5 Draws
            </h1>
            <div className="flex flex-col mt-2 items-center justify-between">
                <div className="w-72 h-20 flex flex-col justify-center items-center rounded-[20px] bg-[#F4F4FC] ">
                    <h1 className="text-black text-3xl font-semibold"> 542 </h1>
                    <h2 className="text-[#979DAA] text-lg font-medium"> Unique winners </h2>
                </div>
            </div>
            <div className="card-container flex font-Urbanist text-base flex-col gap-2 mt-5 ">
                {/* Mapping over JSON data to render Card components */}
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        winners={card.winners}
                        date={card.date}
                        amount={card.amount}
                        imgsrc={card.imgsrc}
                    />
                ))}
            </div>
        </div>
    );
}
