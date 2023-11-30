import LoginLogo from "../../ui/LoginLogo";
import { Outlet } from "react-router-dom";

function Login() {
  return (
    <div className="  relative  h-screen   bg-[#f9fafb]">
      <div className=" absolute right-[50%] top-[50%] mx-auto   translate-x-[50%]   translate-y-[-50%]   divide-y-2  rounded-xl      bg-[#ffffff]     shadow-2xl sm:w-[400px] md:h-auto md:w-[900px]">
        <div className="  grid    h-[600px]  grid-cols-2  rounded-xl  bg-[#ffffff] ">
          <div className="  overflow-hidden rounded-l-xl">
            <img
              src="/public/login-office.jpeg"
              className=" h-full  w-[500px] scale-x-[2] rounded-l-xl  "
            />
          </div>
          <div className="py-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
