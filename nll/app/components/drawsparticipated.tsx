export default function DrawsParticipated() {
  // JSON data for card details
  const cardData = [
    { id: 54, name: "Allan Jerrold", rank: "#60", deposit: "6,989", colour: "#F0B90B",balance:68.02 },
    { id: 53, name: "Maharsi", rank: "#60", deposit: "6,989", colour: "#8F46EC",balance:68.02 },
    { id: 52, name: "Tuhin", rank: "#60", deposit: "6,989", colour: "#2071EE",balance:68.02 },
    { id: 51, name: "Tuhin", rank: "#60", deposit: "6,989", colour: "#2071EE",balance:68.02 },
    { id: 50, name: "Tuhin", rank: "#60", deposit: "6,989", colour: "#2071EE",balance:68.02 },
    { id: 49, name: "Maharsi", rank: "#60", deposit: "6,989", colour: "#8F46EC",balance:68.02 },
  ];
  // Card component
  const Card = ({ id, colour, deposit, balance }) => {
    return (
      <div className="card flex items-center justify-between gap-3 border-b-2 pb-2 border-[#EDEDFF]">
        <div className="flex items-center  gap-2">
          <div className="rounded-lg w-11 h-11 flex justify-center items-center" style={{ backgroundColor: colour}}>
          <h1 className="text-white text-base font-semibold font-Urbanist">#{id}</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#979DAA] text-xs  font-semibold">Your deposit</h1>
            <h2 className="text-[#646D80] text-base font-semibold">$ {deposit}</h2>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="flex flex-col">
          <h2 className="text-[#979DAA] "> Balance </h2>
          <h1 className="text-black font-semibold self-center">$ {balance}</h1>
          </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9.33626 14.4132L3.08626 8.16325C2.91014 7.98713 2.8112 7.74826 2.8112 7.49918C2.8112 7.25011 2.91014 7.01124 3.08626 6.83512C3.26238 6.659 3.50125 6.56006 3.75033 6.56006C3.9994 6.56006 4.23827 6.659 4.41439 6.83512L9.99955 12.4218L15.5863 6.83668C15.6735 6.74948 15.777 6.6803 15.8909 6.63311C16.0049 6.58591 16.127 6.56162 16.2503 6.56162C16.3737 6.56162 16.4958 6.58591 16.6097 6.63311C16.7237 6.6803 16.8272 6.74948 16.9144 6.83668C17.0016 6.92389 17.0708 7.02742 17.118 7.14136C17.1652 7.2553 17.1895 7.37742 17.1895 7.50075C17.1895 7.62408 17.1652 7.7462 17.118 7.86014C17.0708 7.97408 17.0016 8.0776 16.9144 8.16481L10.6644 14.4148C10.5772 14.5021 10.4736 14.5713 10.3596 14.6185C10.2456 14.6657 10.1234 14.6899 10 14.6898C9.87661 14.6896 9.75447 14.6651 9.64057 14.6177C9.52667 14.5702 9.42326 14.5007 9.33626 14.4132Z" fill="#646D80" />
        </svg>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-white p-4 flex flex-col gap-4 w-80 rounded-2xl h-[40rem]">
      <div className="flex justify-between">
        <h1 className="text-black font-Urbanist font-semibold text-xl"> Draws participated </h1>
        <h2 className="text-[#18C258] text-xl font-semibold"> 32 </h2>
      </div>
      <div className=" flex gap-10 items-center ">
        <h1 className="text-black font-Urbanist font-semibold w-24 text-xl border-b-2 py-3 border-[#18C258]"> All </h1>
        <label
          htmlFor="AcceptConditions"
          className="relative h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
        >
          <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

          <span
            className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
          ></span>
        </label>
        <h1 className="text-black font-Urbanist font-semibold text-xl "> Live </h1>
      </div>
      <div className="card-container flex font-Urbanist text-base flex-col gap-2 mt-5 ">
                            {/* Mapping over JSON data to render Card components */}
                            {cardData.map((card) => (
                                <Card
                                    key={card.id}
                                    id={card.id}
                                    colour={card.colour}
                                    balance={card.balance}
                                    deposit = {card.deposit}
                                />
                            ))}
                        </div>
    </div>
  )
}