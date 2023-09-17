import LoginLogo from "../../ui/LoginLogo";
import { Outlet } from "react-router-dom";

function Login() {
  return (
    <div className=" relative  h-screen overflow-scroll bg-blue-200">
      <div className=" absolute right-[50%] top-[50%] mx-auto   translate-x-[50%]   translate-y-[-50%]  divide-y-2    rounded-md  bg-stone-50  py-6     shadow-2xl sm:w-[630px] md:h-auto md:w-[600px]">
        <div className=" flex items-center justify-center ">
          <LoginLogo />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Login;
