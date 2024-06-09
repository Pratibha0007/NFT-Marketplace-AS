import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { removeUser, selectUsername } from "./components/Login/user.slice";

import { LOGO } from "./utils/srcLinks";

const Navbar = () => {
  const user = useSelector(selectUsername);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <nav className="border-b-2 fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <ul className=" flex flex-row justify-between h-16 mx-5 items-center text-base font-semibold">
        <div className="flex flex-row items-center">
          <li className="mx-2">
            <img src={LOGO} alt="" className="w-10 mr-4" />
          </li>
          <li className="mx-2">
            <Link to="/">Overview</Link>
          </li>
          <li className="mx-2">
            <Link to="/createnft">Create NFT</Link>
          </li>
          <li className="mx-2">
            <Link to="/mynft">My NFT</Link>
          </li>
        </div>
        <div className="flex flex-row items-center">
          <li className="mx-2">
            <FaUserCircle size={35} />
          </li>
          <li className="mx-2">
            <div className="flex flex-col">
              <div>{user}</div>
              <div className="text-gray-600 text-sm font-semibold -mt-1">
                NFT Owner
              </div>
            </div>
          </li>
          <li>
            <button
              className="bg-slate-200 w-10 h-10 rounded-lg mx-4 pl-[3px]"
              onClick={toggleDropdown} // Call handleSignOut on sign-out button click
            >
              <RiArrowDropDownLine size={35} />
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg">
                <li>
                  <button
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
