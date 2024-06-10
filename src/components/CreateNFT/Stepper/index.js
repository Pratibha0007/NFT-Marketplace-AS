// src/components/Stepper.js
import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col items-start py-24 px-20 border-r-2 h-screen">
      {steps.map((step, index) => (
        <div key={index} className="relative flex flex-col ">
          <div className="flex flex-row">
            <div className="flex items-center flex-col">
              <div
                className={`w-4 h-4 flex items-center justify-center my-1 rounded-full ${
                  index <= currentStep
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              ></div>
            </div>
            <div className="text-black font-semibold text-sm mx-2">{step}</div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-[0.15rem] h-9 flex mx-[0.4rem] my-1 l ${
                index < currentStep
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
