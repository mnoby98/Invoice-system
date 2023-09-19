import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" flex  items-center  justify-around border-b-[1px] border-stone-50  font-medium shadow-2xl">
      <Logo />
      <Link
        to="/login"
        className="rounded-full px-4 py-1 transition-all hover:bg-emerald-500"
      >
        Sign In
      </Link>
    </div>
  );
}

export default Header;
