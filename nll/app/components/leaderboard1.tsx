"use client"
import Image from "next/image";
import pfp from "@/public/hisoka.jpeg";
import { useState } from "react";

export default function Leaderboard1(){
// JSON data for card details
const cardData = [
    { id: 1, name: "Allan Jerrold", rank: "#60", amount: "$62,989", imgsrc: pfp },
    { id: 2, name: "Maharsi", rank: "#60", amount: "$62,989", imgsrc: pfp },
    { id: 3, name: "Tuhin", rank: "#60", amount: "$62,989", imgsrc: pfp },
];
// Card component
const Card = ({ id, name, rank, amount, imgsrc }) => {
    return (
        <div className="card flex items-center justify-between gap-3 border-b-2 pb-2 border-[#EDEDFF]">
            <div className="flex items-center  gap-2">
                <h1 className="text-[#646D80] font-extrabold mr-3">{id}</h1>
                <Image src={imgsrc} className="w-10 h-10 rounded-full " alt="pfp" />
                <div className="flex flex-col">
                    <h1 className="text-[#646D80] font-medium">{name}</h1>
                    <h2 className="text-[#979DAA] text-xs">{rank}</h2>
                </div>
            </div>
            <h1 className="text-black font-semibold self-center">{amount}</h1>
        </div>
    );
};
    return(
<div className="bg-white flex flex-col w-[19.5rem] h-[21rem] rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <h1 className="text-black font-Urbanist font-semibold">
                                    Leader board
                                </h1>
                                <h2 className="text-[#979DAA] text-base font-Urbanist font-medium">
                                    #65 draw
                                </h2>
                            </div>
                            <div className="flex w-16 h-6 items-center justify-center rounded-[1.88rem] gap-1 bg-[#FF2323]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                >
                                    <circle cx="4" cy="4.5" r="4" fill="white" />
                                </svg>
                                <h2 className="text-white font-Urbanist text-base font-medium">
                                    Live
                                </h2>
                            </div>
                        </div>
                        <div className="card-container flex font-Urbanist text-base flex-col gap-2 mt-5 ">
                            {/* Mapping over JSON data to render Card components */}
                            {cardData.map((card) => (
                                <Card
                                    key={card.id}
                                    id={card.id}
                                    name={card.name}
                                    rank={card.rank}
                                    amount={card.amount}
                                    imgsrc={card.imgsrc}
                                />
                            ))}
                        </div>
                        <div className="ends flex mt-5 gap-4">
                            <div className="flex-col flex w-24">
                                <h1 className="text-black font-Urbanist text-base font-semibold"> Draw ends in </h1>
                                <h2 className="text-[#979DAA] text-sm font-medium "> 16:23:20 </h2>
                            </div>
                            <div className=" w-5 h-5 bg-[#EDEDFF] rounded-md self-center items-center justify-center flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.6012 12.9633C16.923 11.7969 16.5629 10.1227 16.5629 8.125C16.5629 6.38452 15.8715 4.71532 14.6408 3.48461C13.4101 2.2539 11.7409 1.5625 10.0004 1.5625C8.2599 1.5625 6.59071 2.2539 5.36 3.48461C4.12929 4.71532 3.43789 6.38452 3.43789 8.125C3.43789 10.1234 3.07929 11.7969 2.40117 12.9633C2.2628 13.2012 2.18945 13.4713 2.18849 13.7465C2.18753 14.0218 2.25899 14.2924 2.3957 14.5312C2.53155 14.7702 2.72872 14.9687 2.96686 15.106C3.20501 15.2433 3.47549 15.3146 3.75039 15.3125H6.57695C6.65447 16.1669 7.04868 16.9614 7.68213 17.54C8.31558 18.1186 9.14248 18.4394 10.0004 18.4394C10.8583 18.4394 11.6852 18.1186 12.3186 17.54C12.9521 16.9614 13.3463 16.1669 13.4238 15.3125H16.2504C16.5249 15.3142 16.7949 15.2427 17.0326 15.1054C17.2703 14.9681 17.4671 14.7699 17.6027 14.5312C17.74 14.2927 17.8122 14.0223 17.8119 13.7471C17.8116 13.4718 17.7389 13.2015 17.6012 12.9633ZM10.0004 16.5625C9.64018 16.5626 9.29102 16.4382 9.01198 16.2104C8.73294 15.9826 8.54118 15.6654 8.46914 15.3125H11.5316C11.4596 15.6654 11.2678 15.9826 10.9888 16.2104C10.7098 16.4382 10.3606 16.5626 10.0004 16.5625ZM4.2707 13.4375C4.96211 12.0312 5.31289 10.2453 5.31289 8.125C5.31289 6.8818 5.80675 5.68951 6.68582 4.81044C7.5649 3.93136 8.75719 3.4375 10.0004 3.4375C11.2436 3.4375 12.4359 3.93136 13.315 4.81044C14.194 5.68951 14.6879 6.8818 14.6879 8.125C14.6879 10.2445 15.0379 12.0312 15.7293 13.4375H4.2707Z" fill="#979DAA" />
                            </svg>
                            </div>
                            <button className="bg-[#18C258] w-24 ml-10 h-11 text-white font-Urbanist text-base font-semibold py-2 px-6 rounded-3xl"> Join </button>
                        </div>
                    </div>
    )
}
