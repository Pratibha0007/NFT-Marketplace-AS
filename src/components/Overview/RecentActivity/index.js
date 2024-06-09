import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { MdFilterList } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ButtonAll from "../../../ButtonAll.js";
import NFTData from "../NFTData/index";
import {
  selectCurrentPage,
  selectItems,
  selectItemsPerPage,
  setPage,
} from "../NFTData/nft.slice";
import SortDropdown from "../SortDrop.js";

const RecentActivity = () => {
  const [totalPages, setTotalPages] = useState(null);

  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const totalItems = useSelector(selectItems);

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems.length / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const hanldePageChnage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      dispatch(setPage(newPage));
    }
  };

  return (
    <div className="mt-10">
      <div className="flex flex-row px-[6rem] justify-between">
        <div className="font-semibold">Recent Activity</div>
        <div className="flex flex-row mr-16">
          <SortDropdown />
          <div>
            <ButtonAll
              text="Filter"
              img={<MdFilterList />}
              bgclr="#ffffff"
              txtclr="#000000"
            />
          </div>
        </div>
      </div>
      <div className="my-7">
        <NFTData />
      </div>
      {totalPages ? (
        <div className="flex flex-row justify-center items-center align-middle mb-10 ">
          <button
            className="mx-1 bg-slate-200 rounded-md"
            onClick={() => hanldePageChnage(currentPage - 1)}
          >
            <HiChevronLeft size={20} />
          </button>
          <span className="mx-1 font-bold text-xs text-gray-600">
            {currentPage} of {totalPages}
          </span>
          <button
            className="mx-1 bg-slate-200 rounded-md"
            onClick={() => hanldePageChnage(currentPage + 1)}
          >
            <HiChevronRight size={20} />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default RecentActivity;
