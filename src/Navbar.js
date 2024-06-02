import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import { LOGO } from "./utils/srcLinks";

const Navbar = () => {
  return (
    <nav className="border-b-2">
      <ul className="text-black flex flex-row justify-between h-20 mx-5 items-center text-lg font-semibold">
        <div className="flex flex-row items-center">
          <li className="mx-2">
            <img src={LOGO} alt="" className="w-12" />
          </li>
          <li className="mx-2">
            <Link to="/">Overview</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Create NFT</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Publish NFT</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Trade NFT</Link>
          </li>
        </div>
        <div className="flex flex-row items-center">
          <li className="mx-2">
            <FaUserCircle size={38} />
          </li>
          <li className="mx-2">
            <div className="flex flex-col">
              <div>Astitwa Raj</div>
              <div className="text-gray-600 text-sm font-semibold -mt-2">
                NFT Owner
              </div>
            </div>
          </li>
          <li>
            <button className="bg-slate-200 w-10 h-10 rounded-lg mx-4 pl-[3px]">
              <RiArrowDropDownLine size={35} />
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
