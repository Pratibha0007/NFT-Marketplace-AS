import React from "react";

import { useSelector } from "react-redux";
import { selectUsername } from "../Login/user.slice.js";
import PriceCard from "./PriceCard/index.js";
import RecentActivity from "./RecentActivity/index.js";

const Overview = () => {
  const user = useSelector(selectUsername);
  return (
    <div className="flex flex-col ">
      <div className=" text-left pl-[6rem] my-10">
        <h1 className="text-3xl font-semibold">Welcome {user} ,</h1>
        <p className="mt-2 text-gray-500">
          Your dashboard for creating, tracking, and managing digital holdings.
        </p>
      </div>
      <div className="bg-gray-100 pl-[6rem] flex flex-row">
        <PriceCard amount="$26" type="Total NFT Value" />
        <PriceCard amount="$13" type="NFT Sale" />
        <PriceCard amount="$07" type="NFT in Circulation" />
      </div>
      <div>
        <RecentActivity />
      </div>
    </div>
  );
};

export default Overview;
