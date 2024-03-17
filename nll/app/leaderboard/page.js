"use client"
import Navbar from "../components/navbar-leaderboard";
import Leaderboard1 from "../components/leaderboard1";
import Leaderboard2 from "../components/leaderboard2";
import Image from "next/image";
import ad from "@/public/leaderboard.png"
import LeaderboardList from "../components/leaderboardlist";
import DrawsParticipated from "../components/drawsparticipated";

export default function Deposit() {
    return (
        <div className="bg-[#F4F4FC] min-h-screen ">
            <Navbar />
            <div className="flex 2xl:gap-8 flex-col lg:flex-row px-8 py-10">
                <div className="start flex flex-col items-center gap-5">
                    <Leaderboard1/>
                    <Leaderboard2/>
                </div>
                <div className="middle flex flex-col">
                    <Image className="2xl:w-[70rem]" src={ad} alt="ad" /> 
                    <LeaderboardList/>
                </div>
                <div className="flex flex-col">
                    <DrawsParticipated/>
                </div>
            </div>
        </div>
    );
}
