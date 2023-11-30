import { Link } from "react-router-dom";
import Logo from "./Logo";
import { IoHome } from "react-icons/io5";
import { PiMoney } from "react-icons/pi";
import { useState } from "react";

function SideBar() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="  hidden h-full  bg-[#ffffff]  text-center  text-[#707275] sm:flex sm:flex-col sm:justify-center sm:gap-4 sm:align-middle">
      <Link
        className="mx-2    py-3   font-mono  text-2xl text-black "
        to="/home"
      >
        Invoice Twice
      </Link>
      <ul className="flex h-full flex-col gap-3 py-20  text-[20px] font-medium ">
        <Link
          to="/dash-board"
          onClick={() => setActive("dashboard")}
          className={` border-l-4 border-transparent ${
            active === "dashboard" && "   border-l-[#7e3af2] "
          } `}
        >
          <li className="flex cursor-pointer items-center  justify-around     py-2   transition-all duration-300   hover:text-black ">
            <span>
              <IoHome />
            </span>
            Dash Board
          </li>
        </Link>
        <Link
          to="/currency"
          onClick={() => setActive("currency")}
          className={`${
            active === "currency" && "border-l-[#7e3af2]"
          } border-l-4 border-transparent `}
        >
          <li className=" flex cursor-pointer items-center justify-around  rounded-l-full   py-2 transition-all duration-300  hover:text-black ">
            <PiMoney />
            <span>Currencies</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
