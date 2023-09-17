import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" flex  items-center  justify-around border-b-[1px] border-stone-200 bg-stone-50">
      <Logo />
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Header;
