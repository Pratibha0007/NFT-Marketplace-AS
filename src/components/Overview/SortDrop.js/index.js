import React, { useState } from "react";
import { BsSortDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import ButtonAll from "../../../ButtonAll";
import { setById, setByName } from "../NFTData/nft.slice";

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSortByName = () => {
    dispatch(setByName());
    setIsOpen(false);
  };

  const handleSortById = () => {
    dispatch(setById());
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="mx-3" onClick={() => setIsOpen((prev) => !prev)}>
        <ButtonAll
          text="Sort by"
          img={<BsSortDown />}
          bgclr="#ffffff"
          txtclr="#000000"
        />
      </div>
      {isOpen && (
        <div className="absolute right-[15px]  w-auto opacity-95 bg-white border border-gray-200 rounded-lg shadow-lg">
          <button
            className="block w-full px-4 py-1 font-semibold text-sm text-center hover:bg-gray-200"
            onClick={handleSortByName}
          >
            Name
          </button>
          <button
            className="block w-full px-4 py-1 font-semibold text-sm text-center hover:bg-gray-200"
            onClick={handleSortById}
          >
            TokenId
          </button>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
