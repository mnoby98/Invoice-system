import { Link } from "react-router-dom";

function LoginLogo() {
  return (
    <Link to="/home">
      <img
        src="../../public/logo_transparent.png"
        alt="Logo"
        className="  h-60 w-auto"
      />
    </Link>
  );
}

export default LoginLogo;
