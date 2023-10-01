import { Link } from "react-router-dom";
import Logo from "./Logo";

function SideBar() {
  return (
    <div className="  hidden h-full  bg-[#04749B]  text-center  sm:flex sm:flex-col  sm:justify-center sm:gap-4 sm:align-middle">
      <Logo />
      <ul className="h-full   text-[20px] font-medium text-white">
        <Link to="/dash-board">
          <li className="cursor-pointer px-2 py-3  transition-all duration-300 hover:bg-[#f2f8fa] hover:text-[#04749B] ">
            Dash Board
          </li>
        </Link>
        <Link to="/currency">
          <li className="cursor-pointer px-2 py-3  transition-all duration-300 hover:bg-[#f2f8fa] hover:text-[#04749B] ">
            Currencies
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
