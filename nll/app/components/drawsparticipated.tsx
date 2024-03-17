export default function DrawsParticipated(){
    return(
        <div className="bg-white p-4 flex flex-col gap-4 w-80 rounded-2xl h-[40rem]">
            <div className="flex justify-between">
                <h1 className="text-black font-Urbanist font-semibold text-xl"> Draws participated </h1>
                <h2 className="text-[#18C258] text-xl font-semibold"> 32 </h2>
            </div>
            <div className=" flex justify-between items-center ">
            <h1 className="text-black font-Urbanist font-semibold text-xl"> All </h1>
            <label
  htmlFor="AcceptConditions"
  className="relative h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
>
  <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

  <span
    className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
  ></span>
</label>
<h1 className="text-black font-Urbanist font-semibold text-xl self-center"> Live </h1>
            </div>
        </div>
    )
}