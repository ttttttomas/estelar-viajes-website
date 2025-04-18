export default function CalendarCard ({ month, day }) {
    return (
      <div className="flex flex-col mx-6 mt-4 items-center justify-center size-[50px] border-2 border-black rounded-lg">
        <div className="bg-[#FF6B6B] text-white font-semibold text-xs w-full text-center py-[1px] border-b-2 border-black rounded-t-md">
          {month}
        </div>
        <div className={`text-black rounded-b-md text-md bg-white w-full font-bold flex-1 flex items-center justify-center`}>
          {day}
        </div>
      </div>
    );
  };