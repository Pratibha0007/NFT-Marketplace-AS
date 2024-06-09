import React from "react";
import { useSelector } from "react-redux";

const MyNFT = () => {
  const nftData = useSelector((store) => store.walletslice);
  return (
    <div className="px-[6rem] mt-10">
      <table className="text-left w-[81rem] table-auto border-collapse border-spacing-2  ">
        <thead>
          <tr className="border-b-2 ">
            <th className="py-2 w-1/4">NFT Name</th>
            <th className="py-2 w-1/5">NFT Type</th>
            <th className="py-2  w-1/5">Country</th>
            <th className="py-2  w-1/5">Description</th>
            <th className="py-2  w-1/5">Total value</th>
          </tr>
        </thead>
        <tbody>
          {nftData &&
            nftData.map((list) => (
              <tr key={list.token_hash} className="border-b-2 py-2">
                <td className="py-2">{list.nftName}</td>
                <td className="py-2">{list.nftType}</td>
                <td className="py-2">{list.country}</td>
                <td className="py-2">{list.nftDescription}</td>
                <td className="py-2">{list.totalPropertyValue}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyNFT;
