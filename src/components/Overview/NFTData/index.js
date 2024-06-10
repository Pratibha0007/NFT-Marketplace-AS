import React from "react";
import { useSelector } from "react-redux";
import ButtonAll from "../../../ButtonAll";
import useNFT from "../../../useHooks/useNFT";
import { selectPaginatedItems } from "./nft.slice";

const NFTData = () => {
  useNFT();
  const paginatedItems = useSelector(selectPaginatedItems);

  const dateFormat = (createdDate) => {
    const isoDateString = createdDate;
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };
  if (!paginatedItems) {
    return (
      <div className="align-middle justify-center items-center text-6xl">
        LOADING.....
      </div>
    );
  }

  return (
    <div className="px-[6rem]">
      <table className="text-left w-[81rem] table-auto border-collapse border-spacing-2  ">
        <thead>
          <tr className="border-b-2 ">
            <th className="py-2 w-1/4">NFT Name</th>
            <th className="py-2 w-1/5">Token ID</th>
            <th className="py-2  w-1/5">Symbol</th>
            <th className="py-2  w-1/5">Created On</th>
            <th className="py-2  w-1/5">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.map((list) => (
            <tr key={list.token_hash} className="border-b-2 py-2">
              <td className="py-2">{list.name}</td>
              <td className="py-2">{list.token_id}</td>
              <td className="py-2">
                <img className="w-8" src={`${list.collection_logo}`} alt="" />
              </td>
              <td className="py-2">{dateFormat(list.last_metadata_sync)}</td>
              <td className="py-2">
                <ButtonAll txtclr="#ffffff" text="View" bgclr="#000000" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NFTData;
