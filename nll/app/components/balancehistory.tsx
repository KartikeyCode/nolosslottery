import { Aptos, InputViewRequestData } from "@aptos-labs/ts-sdk";
import aptosConfig from "../aptosconfig"
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState,useEffect } from "react";


export default function BalanceHistory() {
//initialising aptos
const aptos = new Aptos(aptosConfig);
const [balance,setBalance] = useState<number>(0.00)
const {

    account,
    network,
    connected,
    signAndSubmitTransaction
} = useWallet();
const [withdrawComplete,setWithdrawComplete] = useState(false)

const  ViewRequest : InputViewRequestData = {
    functionArguments: [account?.address], 
    function: `0x496b7d4caa2f394e9ba633548fe5717b755ebe313736917dd0538440f1e19747::vault_module::get_user_balance`,
    typeArguments: ["0x496b7d4caa2f394e9ba633548fe5717b755ebe313736917dd0538440f1e19747::usdc::USDC",],
};

async function ViewFunction() {
    try {
        const result = await aptos.view({ payload: ViewRequest });
        setBalance(result[0] / 10 ** 8);
    } catch (error) {
        console.error("Error calling view function:", error);
        throw error;
    }
}

useEffect(() => {
    if (connected) {
        ViewFunction();
    }
}, [connected,withdrawComplete]);

const onSignAndSubmitTransaction = async () => {
    const response = await signAndSubmitTransaction({
      sender: account?.address,
      data: {
        function: "0x496b7d4caa2f394e9ba633548fe5717b755ebe313736917dd0538440f1e19747::vault_module::withdraw",
        typeArguments: ["0x496b7d4caa2f394e9ba633548fe5717b755ebe313736917dd0538440f1e19747::usdc::USDC",],
        functionArguments:[balance*10**8]
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

  function Withdraw() {
    connected
        ? network?.url === "https://fullnode.random.aptoslabs.com/v1"
            ? (onSignAndSubmitTransaction(), setWithdrawComplete(true))
            : alert("Please change your aptos network to randomnet")
        : alert("Please connect to your aptos wallet");
}



    const cardData = [
        { id: 1, date: "1 mar 2024", winchance: 51, totaldeposit: "1,673,235", balance: balance, balanceUSDC: 2 },
        { id: 2, date: "1 mar 2024", winchance: 51, totaldeposit: "1,673,235", balance: balance, balanceUSDC: 2 },

    ];
    const Card = ({ date, winchance, totaldeposit, balance, balanceUSDC }) => {
        return (
            <div className="card font-Urbanist xl:pr-16 px-4 py-4 rounded-xl bg-white flex items-center justify-between border-b-2 pb-2 border-[#EDEDFF]">
                <div className="w-[61rem] flex justify-between items-center">

                <div className="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_304_3392)">
                            <path d="M10 20.5C4.48438 20.5 0 16.0156 0 10.5C0 4.98438 4.48438 0.5 10 0.5C15.5156 0.5 20 4.98438 20 10.5C20 16.0156 15.5156 20.5 10 20.5Z" fill="black" />
                            <path d="M10.1875 14.125V17.6719L14.5781 11.5L10.1875 14.125ZM14.4219 10.3594L10.1875 3.32812V8.4375L14.4219 10.3594ZM10.1875 8.82812V13.2031L14.3906 10.75L10.1875 8.82812ZM5.59375 10.3594L9.8125 3.32812V8.4375L5.59375 10.3594ZM9.8125 8.82812V13.2031L5.60938 10.75L9.8125 8.82812ZM9.8125 14.125V17.6719L5.42188 11.5L9.8125 14.125Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_304_3392">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className="flex items-center ">
                    <h1 className="text-[#646D80] font-Urbanist text-base text-center w-24 font-medium">{date}</h1>
                </div>
                <div className="flex items-center  font-Urbanist text-left">
                    <h1 className="text-[#646D80] text-base font-semibold text-center 2xl:pr-16 ">{winchance}%</h1>
                </div>
                <h1 className="text-[#21C253] text-base font-semibold "> ${totaldeposit} </h1>
                <div className="flex flex-col gap-px font-Urbanist items-center justify-center">
                    <h1 className="text-[#646D80] font-semibold text-base text-center"> ${balance} </h1>
                    <h2 className="text-[#979DAA] font-semibold text-xs">{balanceUSDC} USDC.e</h2>
                </div>
                </div>
                <button onClick={Withdraw} className="text-[#18C258] self-center hover:scale-105 transition-all w-24 h-9 font-Urbanist font-medium text-base text-center px-3  bg-white border-[1px] rounded-lg border-[#18C258] "> Withdraw </button>
            </div>
        );
    };

    return (
        connected ? (
            <div className="flex flex-col gap-4 mt-10">
                <div className="balance ml-2 md:w-[37rem] xl:w-[53.5rem] 2xl:w-[79rem] flex justify-between items-center">
                    <h1 className="text-black font-bold text-lg font-Urbanist"> Balance History </h1>
                    <div className="flex gap-1">
                        <a className="text-[#4CB47C]" href="/balancehistory">{`See all`}</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M14.4133 11.1633L8.16331 17.4133C7.98719 17.5894 7.74832 17.6883 7.49925 17.6883C7.25017 17.6883 7.0113 17.5894 6.83518 17.4133C6.65906 17.2372 6.56012 16.9983 6.56012 16.7492C6.56012 16.5001 6.65906 16.2613 6.83518 16.0852L12.4219 10.5L6.83675 4.91328C6.74954 4.82607 6.68036 4.72254 6.63317 4.6086C6.58597 4.49466 6.56168 4.37254 6.56168 4.24922C6.56168 4.12589 6.58597 4.00377 6.63317 3.88983C6.68036 3.77589 6.74954 3.67236 6.83675 3.58515C6.92395 3.49795 7.02748 3.42877 7.14142 3.38158C7.25536 3.33438 7.37748 3.31009 7.50081 3.31009C7.62414 3.31009 7.74626 3.33438 7.8602 3.38158C7.97414 3.42877 8.07766 3.49795 8.16487 3.58515L14.4149 9.83515C14.5022 9.92235 14.5714 10.0259 14.6186 10.1399C14.6658 10.2539 14.69 10.3762 14.6898 10.4995C14.6897 10.6229 14.6652 10.7451 14.6177 10.859C14.5703 10.9729 14.5008 11.0763 14.4133 11.1633Z" fill="#18C258" />
                        </svg>
                    </div>
                </div>
                <div className=" py-4 px-4 md:w-[38rem] xl:w-[53.5rem] h-[15rem] 2xl:w-[80rem] 2xl:h-[15rem] bg-[#F4F4FC] rounded-3xl ">
                    <div className="flex px-3 md:gap-[2rem] xl:gap-[5.5rem] 2xl:gap-36">
                        <h1 className="text-black font-Urbanist text-base font-semibold">Token</h1>
                        {/* Rest of the code */}
                    </div>
                    <div className="card-container mt-2 flex font-Urbanist text-base flex-col gap-2 ">
                        {/* Mapping over JSON data to render Card components */}
                        {cardData.map((card) => (
                            <Card
                                key={card.id}
                                date={card.date}
                                winchance={card.winchance}
                                totaldeposit={card.totaldeposit}
                                balance={card.balance}
                                balanceUSDC={card.balanceUSDC}
                            />
                        ))}
                    </div>
                </div>
            </div>
        ) : (
            <div className="font-Urbanist text-2xl text-black font-semibold flex justify-center flex-col items-center">
                <h1> Please connect your aptos wallet with network as randomnet to see your balance history </h1>
            </div>
        )
    );
        }    