"use client"
import Image from "next/image";
import Navbar from "./components/navbar-home";
import ProgressBar from "@ramonak/react-progress-bar";
export default function Home() {
  let prizepool = "7200"
  let drawtime = "00:00:00"
  let winningchance = "54"
  return (
    <div className="min-h-screen bg-[#F4F4FC]">
      <Navbar/>
    </div>
  );
}
