import { Link } from "react-router-dom";
import ImageLogo from "../../public/logo_transparent.png";
function LoginLogo() {
  return (
    <Link to="/home">
      <img
        src={ImageLogo}
        alt="Logo"
        className="  h-60 w-auto"
      />
    </Link>
  );
}

export default LoginLogo;
