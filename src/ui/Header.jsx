import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  function handleSignOut(e) {
    e.preventDefault();
    navigate("/login");
    localStorage.removeItem("token");
  }
  return (
    <div className="   flex items-center justify-around bg-[#ffffff] font-medium    text-[#4c4f52]       drop-shadow-md">
      <Logo />

      <div className=" flex items-center gap-2  ">
        <button
          onClick={handleSignOut}
          className="mx-2 rounded-full px-4 py-1  transition-all duration-500 hover:bg-white hover:text-black"
        >
          Logout
        </button>
        <Link
          to="/profile"
          className=" rounded-full px-4 py-1  transition-all duration-500 hover:bg-white hover:text-black"
        >
          Profile
        </Link>
        <div className="relative mr-4 rounded-full px-4 py-1  transition-all duration-500 hover:bg-white ">
          <FaBars className=" x hover:text-black marker:hover:absolute " />
          <ul className="  z-10   hidden bg-green-500   ">
            <li className="cursor-pointer px-2 py-3  transition-all duration-300 hover:bg-[#f2f8fa] hover:text-[#04749B] ">
              <Link to="/invoice" className="">
                Dash Board
              </Link>
            </li>
            <li className="px-2 py-3 transition-all duration-300 hover:border-none hover:bg-[#f2f8fa] hover:text-[#04749B] ">
              Woliet
            </li>
            <li className="px-2 py-3 transition-all duration-300  hover:bg-[#f2f8fa] hover:text-[#04749B]">
              Services
            </li>
            <li className="px-2 py-3 transition-all duration-300   hover:bg-[#f2f8fa] hover:text-[#04749B]">
              Clients
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
