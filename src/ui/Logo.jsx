import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/home">
      <img
        src="../../public/logo_transparent.png"
        alt="Logo"
        className=" h-[6rem] w-auto"
      />
    </Link>
  );
}

export default Logo;
