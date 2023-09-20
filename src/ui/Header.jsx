import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" flex  items-center justify-around    bg-[#04749B]  font-medium shadow-2xl">
      {/* <Logo /> */}
      <Link className="py-4 text-[25px] font-semibold text-white" to="/home">
        Invoice Twice
      </Link>
      <Link
        to="/login"
        className="rounded-full px-4 py-1 text-white transition-all hover:bg-white hover:text-black"
      >
        Sign In
      </Link>
    </div>
  );
}

export default Header;
