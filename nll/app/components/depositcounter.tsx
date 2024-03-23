"use client"
import { useState } from "react"
import { Aptos } from "@aptos-labs/ts-sdk";
import aptosConfig from "../aptosconfig"
import { useWallet } from "@aptos-labs/wallet-adapter-react";


export default function DepositCounter() {
    const [depositAmount, setDepositAmount] = useState<number>(0.00)
    const [active, setActive] = useState('b1')
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

    const onSignAndSubmitTransaction = async () => {
        const response = await signAndSubmitTransaction({
            sender: account?.address,
            data: {
                function: "0x496b7d4caa2f394e9ba633548fe5717b755ebe313736917dd0538440f1e19747::vault_module::deposit",
                typeArguments: ["0x496b7d4caa2f394e9ba633548fe5717b755ebe313736917dd0538440f1e19747::usdc::USDC",],
                functionArguments: [depositAmount*10**8, ]
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
        <div className="bg-white w-80 h-64 rounded-3xl flex flex-col items-center justify-center font-Urbanist">
            <input
                className="rounded-xl w-60 h-14 border-2 border-[#979DAA] placeholder:text-right px-4 placeholder:text-[#646D80] text-2xl" 
                type="number"
                step="0.01"
                placeholder={depositAmount.toString()}
                value={depositAmount} // Bind input value to state variable
                onChange={handleDepositInputChange} // Handle input change
            />
            <div className="flex gap-3 mt-8 text-[#979DAA] text-lg font-semibold ">
                <button onClick={() => {setActive('b1'); setDepositAmount(25);}} className={`w-14 h-10 rounded-lg   border-[#979DAA] ${active === 'b1' ? 'bg-[#18C258] text-white border-0' : 'border-2'}`}> $25 </button>
                <button onClick={() => {setActive('b2');setDepositAmount(50);}} className={`w-14 h-10 rounded-lg   border-[#979DAA] ${active === 'b2' ? 'bg-[#18C258] text-white border-0' : 'border-2'}`}> $50 </button>
                <button onClick={() => {setActive('b3');setDepositAmount(75);}} className={`w-14 h-10 rounded-lg   border-[#979DAA] ${active === 'b3' ? 'bg-[#18C258] text-white border-0' : 'border-2'}`}> $75 </button>
                <button onClick={() => {setActive('b4');setDepositAmount(100);}} className={`w-14 h-10 rounded-lg   border-[#979DAA] ${active === 'b4' ? 'bg-[#18C258] text-white border-0' : 'border-2'}`}> $100 </button>
            </div>
            <button onClick={Deposit} className="bg-black hover:scale-105 transition-all rounded-xl w-60 px-16 py-4 mt-4 text-center text-lg font-semibold font-Urbanist text-white"> Deposit </button>
        </div>
    )
}