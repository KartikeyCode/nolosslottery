"use client"
import Navbar from "../components/navbar-leaderboard";
import FAQList from "../components/faqdropdown";

export default function FAQ() {
    return (
        <div className="bg-[#F4F4FC] min-h-screen ">
            <Navbar />
            <div className="flex 2xl:gap-8 flex-col items-center justify-center font-Urbanist lg:flex-row px-8 py-6">
                <div className="heading flex flex-col items-center justify-center">
                    <h1 className="text-black text-center xl:text-6xl font-bold" > Frequently asked </h1>
                    <h1 className="text-black text-center xl:text-6xl font-bold " style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: `url("/faqtextbg.jpeg")`, backgroundClip: "text", WebkitTextFillColor: "transparent" }}> questions </h1>
                    <div className="flex flex-col items-center justify-center mt-2">
                        <h2 className="text-[#646D80] text-base font-medium"> Here are some discussions about our product  </h2>
                        <h2 className="text-[#646D80] text-base font-medium"> Hope this helps!  </h2>
                    </div>
                    <FAQList />
                    <div className="footer flex font-Urbanist items-center mt-8 justify-center flex-col">
                        <h1 className="text-black text-2xl text-center font-semibold"> Have further questions? </h1>
                        <h2 className="text-[#646D80] text-center text-base font-medium mt-4"> feel free to reach out to us </h2>
                        <button className="bg-[#E9E9EA] shadow-md hover:scale-105 transition-all rounded-md mt-2 w-60 h-11 px-4 py-3 flex items-center justify-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM12 12.4828L4.92844 6H19.0716L12 12.4828ZM9.25406 12L3.75 17.0447V6.95531L9.25406 12ZM10.3641 13.0172L11.4891 14.0531C11.6274 14.1801 11.8084 14.2506 11.9963 14.2506C12.1841 14.2506 12.3651 14.1801 12.5034 14.0531L13.6284 13.0172L19.0659 18H4.92844L10.3641 13.0172ZM14.7459 12L20.25 6.95438V17.0456L14.7459 12Z" fill="#646D80" />
                            </svg>
                            <h2 className="text-[#646D80] font-medium text-base"> nolosslottery@gmail.com </h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
