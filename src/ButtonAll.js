import React from "react";

const ButtonAll = ({ text, img, bgclr, txtclr, fnct }) => {
  return (
    <div>
      <button
        onClick={fnct}
        className="rounded-md px-4 py-1 font-semibold flex items-center justify-center"
        style={{
          backgroundColor: bgclr,
          color: txtclr,
        }}
      >
        {img && <div className="mr-2">{img}</div>}
        <div>{text}</div>
      </button>
    </div>
  );
};

export default ButtonAll;
