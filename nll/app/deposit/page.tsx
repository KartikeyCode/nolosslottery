"use client"
import Image from "next/image";
import graph from "@/public/Graph.png"
import NavbarDeposit from "../components/navbar-deposit";
import ProgressBar from "@ramonak/react-progress-bar";
export default function Deposit() {
    let prizepool = "7200"
    let drawtime = "00:00:00"
    let winningchance = "54"
    let lastweekprizes = "7200"
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
                                <div className="w-[29.75rem] h-36 bg-[#323232] rounded-2xl flex justify-center items-center "> <input className="w-[13rem] focus:outline-none  h-16 text-[#39C346] text-7xl font-Urbanist font-semibold bg-inherit  placeholder:text-[#39C346]" type="number" step="0.01" placeholder="55.00" />  <h2 className="text-[#646D80] font-Urbanist text-2xl font-semibold mt-7 "> USDC </h2>   </div>
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
                            <button className="w-[29.8rem] self-center mt-7 py-4 px-16 h-14 bg-[#18C258] text-white font-Urbanist text-lg font-semibold rounded-xl"> Deposit </button>
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
                        <div className="flex flex-col gap-4 mt-10">
                            <div className="balance ml-2 md:w-[37rem] xl:w-[53.5rem] 2xl:w-[79rem] flex  justify-between items-center">
                                <h1 className="text-black font-bold text-lg font-Urbanist"> Balance History </h1>
                                <div className="flex gap-1">
                                    <a className="text-[#4CB47C]" href="/balancehistory">{`See all`}</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M14.4133 11.1633L8.16331 17.4133C7.98719 17.5894 7.74832 17.6883 7.49925 17.6883C7.25017 17.6883 7.0113 17.5894 6.83518 17.4133C6.65906 17.2372 6.56012 16.9983 6.56012 16.7492C6.56012 16.5001 6.65906 16.2613 6.83518 16.0852L12.4219 10.5L6.83675 4.91328C6.74954 4.82607 6.68036 4.72254 6.63317 4.6086C6.58597 4.49466 6.56168 4.37254 6.56168 4.24922C6.56168 4.12589 6.58597 4.00377 6.63317 3.88983C6.68036 3.77589 6.74954 3.67236 6.83675 3.58515C6.92395 3.49795 7.02748 3.42877 7.14142 3.38158C7.25536 3.33438 7.37748 3.31009 7.50081 3.31009C7.62414 3.31009 7.74626 3.33438 7.8602 3.38158C7.97414 3.42877 8.07766 3.49795 8.16487 3.58515L14.4149 9.83515C14.5022 9.92235 14.5714 10.0259 14.6186 10.1399C14.6658 10.2539 14.69 10.3762 14.6898 10.4995C14.6897 10.6229 14.6652 10.7451 14.6177 10.859C14.5703 10.9729 14.5008 11.0763 14.4133 11.1633Z" fill="#18C258" />
                                    </svg>
                                </div>
                            </div>
                            <div className=" py-4 px-8 md:w-[38rem] xl:w-[53.5rem] h-[15rem] 2xl:w-[80rem] 2xl:h-[15rem] bg-white rounded-3xl shadow-sm">
                                <div className="flex md:gap-[2rem] xl:gap-[5.5rem] 2xl:gap-48">
                                    <h1 className="text-black font-Urbanist text-base font-semibold">Token</h1>
                                    <div className="flex gap-1"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.25 2.1875H14.6875V1.875C14.6875 1.62636 14.5887 1.3879 14.4129 1.21209C14.2371 1.03627 13.9986 0.9375 13.75 0.9375C13.5014 0.9375 13.2629 1.03627 13.0871 1.21209C12.9113 1.3879 12.8125 1.62636 12.8125 1.875V2.1875H7.1875V1.875C7.1875 1.62636 7.08873 1.3879 6.91291 1.21209C6.7371 1.03627 6.49864 0.9375 6.25 0.9375C6.00136 0.9375 5.7629 1.03627 5.58709 1.21209C5.41127 1.3879 5.3125 1.62636 5.3125 1.875V2.1875H3.75C3.3356 2.1875 2.93817 2.35212 2.64515 2.64515C2.35212 2.93817 2.1875 3.3356 2.1875 3.75V16.25C2.1875 16.6644 2.35212 17.0618 2.64515 17.3549C2.93817 17.6479 3.3356 17.8125 3.75 17.8125H16.25C16.6644 17.8125 17.0618 17.6479 17.3549 17.3549C17.6479 17.0618 17.8125 16.6644 17.8125 16.25V3.75C17.8125 3.3356 17.6479 2.93817 17.3549 2.64515C17.0618 2.35212 16.6644 2.1875 16.25 2.1875ZM5.3125 4.0625C5.3125 4.31114 5.41127 4.5496 5.58709 4.72541C5.7629 4.90123 6.00136 5 6.25 5C6.49864 5 6.7371 4.90123 6.91291 4.72541C7.08873 4.5496 7.1875 4.31114 7.1875 4.0625H12.8125C12.8125 4.31114 12.9113 4.5496 13.0871 4.72541C13.2629 4.90123 13.5014 5 13.75 5C13.9986 5 14.2371 4.90123 14.4129 4.72541C14.5887 4.5496 14.6875 4.31114 14.6875 4.0625H15.9375V5.9375H4.0625V4.0625H5.3125ZM4.0625 15.9375V7.8125H15.9375V15.9375H4.0625Z" fill="black" />
                                    </svg> <h1 className="text-black font-Urbanist text-base font-semibold">Date</h1>
                                    </div>
                                    <div className="flex gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M18.125 4.6875H16.5625V4.375C16.5625 3.9606 16.3979 3.56317 16.1049 3.27015C15.8118 2.97712 15.4144 2.8125 15 2.8125H5C4.5856 2.8125 4.18817 2.97712 3.89515 3.27015C3.60212 3.56317 3.4375 3.9606 3.4375 4.375V4.6875H1.875C1.66981 4.6875 1.46663 4.72792 1.27706 4.80644C1.08749 4.88496 0.915237 5.00005 0.770146 5.14515C0.47712 5.43817 0.3125 5.8356 0.3125 6.25V7.5C0.313534 8.41136 0.67603 9.28511 1.32046 9.92954C1.96489 10.574 2.83864 10.9365 3.75 10.9375H3.81016C4.21057 12.0657 4.91134 13.0632 5.83692 13.8225C6.7625 14.5818 7.87778 15.074 9.0625 15.2461V16.5625H7.5C7.25136 16.5625 7.0129 16.6613 6.83709 16.8371C6.66127 17.0129 6.5625 17.2514 6.5625 17.5C6.5625 17.7486 6.66127 17.9871 6.83709 18.1629C7.0129 18.3387 7.25136 18.4375 7.5 18.4375H12.5C12.7486 18.4375 12.9871 18.3387 13.1629 18.1629C13.3387 17.9871 13.4375 17.7486 13.4375 17.5C13.4375 17.2514 13.3387 17.0129 13.1629 16.8371C12.9871 16.6613 12.7486 16.5625 12.5 16.5625H10.9375V15.243C13.3547 14.8906 15.3539 13.1961 16.1719 10.9375H16.25C17.1614 10.9365 18.0351 10.574 18.6795 9.92954C19.324 9.28511 19.6865 8.41136 19.6875 7.5V6.25C19.6875 5.8356 19.5229 5.43817 19.2299 5.14515C18.9368 4.85212 18.5394 4.6875 18.125 4.6875ZM2.1875 7.5V6.5625H3.4375V8.75C3.4375 8.84453 3.4375 8.93828 3.44453 9.03203C3.09018 8.96139 2.77126 8.77013 2.54207 8.49079C2.31287 8.21146 2.18757 7.86133 2.1875 7.5ZM14.6875 8.67969C14.6875 11.2836 12.6008 13.418 10.0359 13.4375C9.41735 13.4422 8.80394 13.3245 8.23107 13.0911C7.6582 12.8576 7.13721 12.5131 6.69812 12.0773C6.25903 11.6416 5.91053 11.1232 5.67272 10.5522C5.43491 9.9811 5.31248 9.36861 5.3125 8.75V4.6875H14.6875V8.67969ZM17.8125 7.5C17.8125 7.86179 17.6869 8.21237 17.4573 8.49191C17.2276 8.77145 16.908 8.96263 16.5531 9.03281C16.5594 8.91563 16.5625 8.79844 16.5625 8.67969V6.5625H17.8125V7.5Z" fill="black" />
                                        </svg>
                                        <h1 className="text-black font-Urbanist text-base font-semibold w-24">Win Chance</h1>
                                    </div>
                                    <div className="flex gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.41331 13.0867C9.50071 13.1738 9.57006 13.2773 9.61737 13.3913C9.66469 13.5052 9.68905 13.6274 9.68905 13.7508C9.68905 13.8742 9.66469 13.9963 9.61737 14.1103C9.57006 14.2242 9.50071 14.3277 9.41331 14.4148L6.91331 16.9148C6.82621 17.0022 6.72272 17.0716 6.60876 17.1189C6.49481 17.1662 6.37263 17.1906 6.24925 17.1906C6.12586 17.1906 6.00368 17.1662 5.88973 17.1189C5.77577 17.0716 5.67228 17.0022 5.58518 16.9148L3.08518 14.4148C2.99798 14.3276 2.9288 14.2241 2.88161 14.1102C2.83441 13.9962 2.81012 13.8741 2.81012 13.7508C2.81012 13.6274 2.83441 13.5053 2.88161 13.3914C2.9288 13.2774 2.99798 13.1739 3.08518 13.0867C3.17239 12.9995 3.27592 12.9303 3.38986 12.8831C3.5038 12.8359 3.62592 12.8116 3.74925 12.8116C3.87257 12.8116 3.99469 12.8359 4.10863 12.8831C4.22257 12.9303 4.3261 12.9995 4.41331 13.0867L5.31253 13.9844V3.74999C5.31253 3.50135 5.4113 3.2629 5.58711 3.08708C5.76293 2.91127 6.00139 2.81249 6.25003 2.81249C6.49867 2.81249 6.73712 2.91127 6.91294 3.08708C7.08876 3.2629 7.18753 3.50135 7.18753 3.74999V13.9844L8.08675 13.0844C8.17397 12.9974 8.27749 12.9284 8.39138 12.8814C8.50527 12.8344 8.62731 12.8104 8.75051 12.8106C8.87371 12.8108 8.99567 12.8353 9.10939 12.8827C9.22312 12.9301 9.32639 12.9994 9.41331 13.0867ZM16.9133 5.58671L14.4133 3.08671C14.3262 2.99931 14.2227 2.92997 14.1088 2.88265C13.9948 2.83533 13.8726 2.81097 13.7492 2.81097C13.6259 2.81097 13.5037 2.83533 13.3897 2.88265C13.2758 2.92997 13.1723 2.99931 13.0852 3.08671L10.5852 5.58671C10.4091 5.76283 10.3101 6.0017 10.3101 6.25078C10.3101 6.49985 10.4091 6.73872 10.5852 6.91484C10.7613 7.09096 11.0002 7.1899 11.2492 7.1899C11.4983 7.1899 11.7372 7.09096 11.9133 6.91484L12.8125 6.01562V16.25C12.8125 16.4986 12.9113 16.7371 13.0871 16.9129C13.2629 17.0887 13.5014 17.1875 13.75 17.1875C13.9987 17.1875 14.2371 17.0887 14.4129 16.9129C14.5888 16.7371 14.6875 16.4986 14.6875 16.25V6.01562L15.5867 6.91562C15.7629 7.09174 16.0017 7.19068 16.2508 7.19068C16.4999 7.19068 16.7387 7.09174 16.9149 6.91562C17.091 6.7395 17.1899 6.50063 17.1899 6.25156C17.1899 6.00249 17.091 5.76361 16.9149 5.58749L16.9133 5.58671Z" fill="black" />
                                        </svg>
                                        <h1 className="text-black font-Urbanist text-base font-semibold w-28">Total Deposits</h1>
                                    </div>
                                    <h1 className="text-black font-Urbanist text-base font-semibold">Balance</h1>

                                </div>
                            </div>
                            
                    </div>
                    <div className="draw flex flex-col gap-4 mt-10">
                                <div className="draw ml-2 md:w-[19rem] xl:w-[20rem] 2xl:w-[25rem] flex  justify-between items-center">
                                    <h1 className="text-black font-bold text-lg font-Urbanist"> Draw History </h1>
                                    <div className="flex gap-1">
                                        <a className="text-[#4CB47C]" href="/drawhistory">{`See all`}</a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                            <path d="M14.4133 11.1633L8.16331 17.4133C7.98719 17.5894 7.74832 17.6883 7.49925 17.6883C7.25017 17.6883 7.0113 17.5894 6.83518 17.4133C6.65906 17.2372 6.56012 16.9983 6.56012 16.7492C6.56012 16.5001 6.65906 16.2613 6.83518 16.0852L12.4219 10.5L6.83675 4.91328C6.74954 4.82607 6.68036 4.72254 6.63317 4.6086C6.58597 4.49466 6.56168 4.37254 6.56168 4.24922C6.56168 4.12589 6.58597 4.00377 6.63317 3.88983C6.68036 3.77589 6.74954 3.67236 6.83675 3.58515C6.92395 3.49795 7.02748 3.42877 7.14142 3.38158C7.25536 3.33438 7.37748 3.31009 7.50081 3.31009C7.62414 3.31009 7.74626 3.33438 7.8602 3.38158C7.97414 3.42877 8.07766 3.49795 8.16487 3.58515L14.4149 9.83515C14.5022 9.92235 14.5714 10.0259 14.6186 10.1399C14.6658 10.2539 14.69 10.3762 14.6898 10.4995C14.6897 10.6229 14.6652 10.7451 14.6177 10.859C14.5703 10.9729 14.5008 11.0763 14.4133 11.1633Z" fill="#18C258" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="bg-white md:w-[21rem] 2xl:w-[29.5rem] h-[15rem] py-4 px-6 rounded-3xl shadow-sm">
                                    <div className="flex gap-8">
                                    <h1 className="text-black font-Urbanist text-base font-semibold">Date</h1>
                                    <h1 className="text-black font-Urbanist text-base font-semibold">Draw</h1>
                                    <h1 className="text-black font-Urbanist text-base font-semibold">Amount</h1>
                                    <h1 className="text-black font-Urbanist text-base font-semibold">Winner(s)</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
