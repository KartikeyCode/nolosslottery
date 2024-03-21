export default function DrawHistory(){
    return(
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
                                <div className="flex justify-between">
                                    <h1 className="text-black font-Urbanist text-base font-semibold">Date</h1>
                                    <h1 className="text-black font-Urbanist text-base font-semibold">Draw</h1>
                                    <h1 className="text-black font-Urbanist text-base font-semibold">Amount</h1>
                                    <h1 className="text-black font-Urbanist text-base font-semibold">Winner(s)</h1>
                                </div>
                            </div>
                        </div>
    )
}