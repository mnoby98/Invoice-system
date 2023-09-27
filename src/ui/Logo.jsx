import { Link } from "react-router-dom";
import ImageLogo from "../../public/logo_transparent.png";
function Logo() {
  return (
    <Link to="/home">
      <img src={ImageLogo} alt="Logo" className=" h-[10rem] w-auto" />
    </Link>
  );
}

export default Logo;
