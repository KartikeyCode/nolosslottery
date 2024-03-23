"use client"
import Image from "next/image";
import { Aptos } from "@aptos-labs/ts-sdk";
import aptosConfig from "../aptosconfig"
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState } from "react";
import graph from "@/public/Graph.png"
import BalanceHistory from "../components/balancehistory";
import NavbarDeposit from "../components/navbar-deposit";
import ProgressBar from "@ramonak/react-progress-bar";
import DrawHistory from "../components/drawhistory";
export default function Deposit() {
    //variables to be edited
    let prizepool = "7200"
    let drawtime = "00:00:00"
    let winningchance = "54"
    let lastweekprizes = "7200"
    const [depositAmount, setDepositAmount] = useState<number>(0.00)

    // Function to handle input change
    const handleDepositInputChange = (e) => {
        setDepositAmount(e.target.value);
    };
    //initialising aptos
    const aptos = new Aptos(aptosConfig);

    const {

        account,
        network,
        connected,
        signAndSubmitTransaction
    } = useWallet();

    let argdepositamount = depositAmount*10**8

    const onSignAndSubmitTransaction = async () => {
        const response = await signAndSubmitTransaction({
          sender: account?.address,
          data: {
            function: "0x496b7d4caa2f394e9ba633548fe5717b755ebe313736917dd0538440f1e19747::vault_module::deposit",
            typeArguments: ["0x496b7d4caa2f394e9ba633548fe5717b755ebe313736917dd0538440f1e19747::usdc::USDC",],
            functionArguments:[argdepositamount]
          },
        });
        // if you want to wait for transaction
        try {
          await aptos.waitForTransaction({ transactionHash: response.hash });
        } catch (error) {
          console.error(error);
        }
        console.log("Transaction Successful")
      };

      function Deposit() {
        connected
            ? network?.url === "https://fullnode.random.aptoslabs.com/v1"
                ? onSignAndSubmitTransaction()
                : alert("Please change your aptos network to randomnet")
            : alert("Please connect to your aptos wallet");
    }
    

    return (
        <div className="bg-[#F4F4FC] min-h-screen pb-5">
            <NavbarDeposit />
            <div className="pl-7 pt-2 2xl:pl-14  ">
                <div className="mt-7 flex flex-col main ">
                    <div className="upper-container flex">
                        <div className=" depositnow flex flex-col  md:w-[38rem] xl:w-[54rem] 2xl:w-[80rem] md:h-[29rem]  xl:h-[30.5rem]  2xl:h-[31rem] bg-[#292929] rounded-[32px] px-11 py-8 ">
                            <div className="flex">
                                <div className="flex flex-col"> <h1 className="text-[#646D80] text-lg 2xl:text-2xl font-Urbanist md:w"> Prize Pool </h1> <h2 className="text-white font-Urbanist 2xl:text-4xl text-2xl w-20"> ${prizepool} </h2>  </div>
                                <div className="flex  flex-col md:ml-8 xl:ml-44 2xl:ml-[21.5rem] items-center justify-center text-center"> <h1 className="text-white font-Urbanist md:text-3xl xl:text-5xl font-bold md:w-80"> Deposit Now </h1> <h2 className="text-[#646D80] text-lg xl:text-2xl font-medium font-Urbanist" > and earn from the Prize Pool </h2>   </div>
                                <div className="flex flex-col xl:ml-28 2xl:ml-72 items-center xl:justify-center text-center"> <h1 className="text-[#646D80] text-lg font-Urbanist font-medium w-28">Next draw in </h1> <h2 className="text-white font-Urbanist text-2xl font-semibold"> {drawtime} </h2>  </div>
                            </div>
                            <div className="flex flex-col justify-center items-center mt-6">
                                <div className="w-[29.75rem] h-36 bg-[#323232] rounded-2xl flex justify-center items-center ">
                                    <input
                                        className="depositinput w-[13rem] focus:outline-none  h-16 text-[#39C346] text-7xl font-Urbanist font-semibold bg-inherit  placeholder:text-[#39C346]"
                                        type="number"
                                        step="0.01"
                                        placeholder="00.00"
                                        value={depositAmount} // Bind input value to state variable
                                        onChange={handleDepositInputChange} // Handle input change
                                    />
                                    <h2 className="text-[#646D80] font-Urbanist text-2xl font-semibold mt-7 "> USDC </h2>   </div>
                            </div>
                            <div className="flex items-center justify-center gap-64 mt-6">
                                <div className="flex items-center">
                                    <h1 className="text-[#979DAA] text-lg font-Urbanist font-medium mr-2"> Winning Chance </h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 16.875C8.64026 16.875 7.31105 16.4718 6.18046 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52238 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17716 7.32514 3.52237 8.65876 3.2571C9.99238 2.99183 11.3747 3.12798 12.631 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.8729 11.8227 16.1479 13.5702 14.8591 14.8591C13.5702 16.1479 11.8227 16.8729 10 16.875ZM11.25 13.75C11.25 13.9158 11.1842 14.0747 11.0669 14.1919C10.9497 14.3092 10.7908 14.375 10.625 14.375C10.2935 14.375 9.97554 14.2433 9.74112 14.0089C9.5067 13.7745 9.375 13.4565 9.375 13.125V10C9.20924 10 9.05027 9.93415 8.93306 9.81694C8.81585 9.69973 8.75 9.54076 8.75 9.375C8.75 9.20924 8.81585 9.05027 8.93306 8.93306C9.05027 8.81585 9.20924 8.75 9.375 8.75C9.70652 8.75 10.0245 8.8817 10.2589 9.11612C10.4933 9.35054 10.625 9.66848 10.625 10V13.125C10.7908 13.125 10.9497 13.1908 11.0669 13.3081C11.1842 13.4253 11.25 13.5842 11.25 13.75ZM8.75 6.5625C8.75 6.37708 8.80499 6.19582 8.908 6.04165C9.01101 5.88748 9.15743 5.76732 9.32874 5.69636C9.50004 5.62541 9.68854 5.60684 9.8704 5.64301C10.0523 5.67919 10.2193 5.76848 10.3504 5.89959C10.4815 6.0307 10.5708 6.19775 10.607 6.3796C10.6432 6.56146 10.6246 6.74996 10.5536 6.92127C10.4827 7.09257 10.3625 7.23899 10.2084 7.342C10.0542 7.44502 9.87292 7.5 9.6875 7.5C9.43886 7.5 9.20041 7.40123 9.02459 7.22541C8.84878 7.0496 8.75 6.81114 8.75 6.5625Z" fill="#979DAA" />
                                    </svg>
                                </div>
                                <h1 className="text-white font-Urbanist text-2xl font-medium"> {winningchance}% </h1>
                            </div>
                            <div className=" 2xl:ml-[13.5rem] md:ml-[7rem] xl:ml-[10.5rem]">
                                <ProgressBar className="mt-4" isLabelVisible={false} borderRadius="40px" width="75%" height="8px" baseBgColor="#323232" bgColor="#18C258" completed={54} />
                            </div>
                            <button onClick={Deposit} className="w-[29.8rem] hover:scale-105 transition-all self-center mt-7 py-4 px-16 h-14 bg-[#18C258] text-white font-Urbanist text-lg font-semibold rounded-xl"> Deposit </button>
                        </div>
                        <div className=" md:ml-5 2xl:ml-14 flex flex-col xl:mt-24 md:mt-[4.6rem] 2xl:mt-5">
                            <div className="flex ">
                                <h1 className="text-black text-lg font-bold"> Prize Overview </h1>
                                <div className="md:ml-[5.5rem] 2xl:ml-52 w-28 items-center px-2 h-9 bg-[#323232] rounded-[50px] flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.25 2.5H14.375V1.875C14.375 1.70924 14.3092 1.55027 14.1919 1.43306C14.0747 1.31585 13.9158 1.25 13.75 1.25C13.5842 1.25 13.4253 1.31585 13.3081 1.43306C13.1908 1.55027 13.125 1.70924 13.125 1.875V2.5H6.875V1.875C6.875 1.70924 6.80915 1.55027 6.69194 1.43306C6.57473 1.31585 6.41576 1.25 6.25 1.25C6.08424 1.25 5.92527 1.31585 5.80806 1.43306C5.69085 1.55027 5.625 1.70924 5.625 1.875V2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM5.625 3.75V4.375C5.625 4.54076 5.69085 4.69973 5.80806 4.81694C5.92527 4.93415 6.08424 5 6.25 5C6.41576 5 6.57473 4.93415 6.69194 4.81694C6.80915 4.69973 6.875 4.54076 6.875 4.375V3.75H13.125V4.375C13.125 4.54076 13.1908 4.69973 13.3081 4.81694C13.4253 4.93415 13.5842 5 13.75 5C13.9158 5 14.0747 4.93415 14.1919 4.81694C14.3092 4.69973 14.375 4.54076 14.375 4.375V3.75H16.25V6.25H3.75V3.75H5.625ZM16.25 16.25H3.75V7.5H16.25V16.25Z" fill="white" />
                                    </svg>
                                    <select className="bg-inherit  focus:outline-none text-white font-Urbanist font-bold">
                                        <option className=" text-white" value="option1">1W</option>
                                        <option className=" text-white" value="option2">1M</option>
                                        <option className=" text-white" value="option3">1Y</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-between md:w-[20.6rem] 2xl:w-[29.7rem] h-16 items-center  bg-white mt-6 backdrop-blur-sm rounded-md px-4 py-2">
                                <div className="flex flex-col ">
                                    <h1 className="text-black font-Urbanist text-xl font-semibold"> Last Week Prizes </h1>
                                    <h2 className="text-[#979DAA] font-Urbanist text-lg font-medium">7 mar 2024 </h2>
                                </div>
                                <div>
                                    <h1 className="text-[#18C258] font-Urbanist text-2xl font-bold text-right "> ${lastweekprizes} </h1>
                                </div>
                            </div>
                            <div className="graph  self-center mt-6">
                                <Image alt="graph" src={graph} className="xl:-ml-2 md:-ml-3 " />
                            </div>
                        </div>
                    </div>
                    <div className="flex lower-container md:gap-4 xl:gap-5 2xl:gap-14 ">
                                <BalanceHistory/>
                                <DrawHistory/>
                    </div>
                </div>
            </div>
                        </div>
    );
}
