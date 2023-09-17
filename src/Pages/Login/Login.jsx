import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorText from "../../ui/ErrorText";
import LoginForm from "../LoginForm";
import LoginLogo from "../../ui/LoginLogo";

function Login() {
  return (
    <div className=" relative  h-screen overflow-scroll bg-blue-200">
      <div className=" absolute right-[50%] top-[50%] mx-auto   translate-x-[50%]   translate-y-[-50%]  divide-y-2    rounded-md  bg-stone-50  py-6     shadow-2xl sm:w-[630px] md:h-[700px] md:w-[700px]">
        <div className=" flex items-center justify-center ">
          <LoginLogo />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
