import React from "react";

export const PriceCard = ({ amount, type }) => {
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const timeString = hours + ":" + minutes + " " + ampm;
    return timeString;
  };
  return (
    <div className="w-[15rem] h-[10rem] bg-white mx-2 my-4 rounded-md text-left p-5 ">
      <div className="text-5xl font-bold">
        {amount}
        <span className="text-base font-normal ml-1 text-yellow-300">
          Million
        </span>
      </div>
      <div className="my-4">{type}</div>
      <div className="font-semibold text-xs text-gray-500">
        Updated: {getCurrentTime()}
      </div>
    </div>
  );
};
export default PriceCard;
