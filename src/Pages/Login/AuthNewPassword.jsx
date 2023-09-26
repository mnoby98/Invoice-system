import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
import useNewPassword from "../../Components/Login/useNewPassword";

function AuthNewPassword() {
  const { email, otp } = useSelector((state) => state.user.userForgetPassword);

  const [errorFromApi, setError] = useState();

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { isLoading, newPassword } = useNewPassword({
    handleError,
    email,
    otp,
    password,
    confirmPassword,
  });

  const newPasswordValues = {
    password: "",
    confirmPassword: "",
  };

  // const newPasswordSchema = Yup.object({
  //   password: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(15, "Too Long")
  //     .required("Required"),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref("password"), ""], "Passwords must match")
  //   .required("Required"),
  // });

  function handleError(ErrorFromApi) {
    setError(ErrorFromApi);
  }

  const onSubmit = (values) => {
    console.log(values);

    setConfirmPassword({ password_confirmation: values.confirmPassword });
    setPassword({
      password: values.password,
    });
    newPassword({
      password: values.password,
      password_confirmation: values.confirmPassword,
      email: email,
      otp: otp.otp,
    });
  };

  return (
    <Formik
      initialValues={newPasswordValues}
      // validationSchema={newPasswordSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="  mx-8   rounded-md text-xl font-semibold ">
          <h1 className="mb-3 mt-3 text-[25px]  font-normal text-gray-800  ">
            Auth
          </h1>
          <div className="mx-2 py-4">
            <div className="relative mb-5  flex flex-col gap-2   text-xl ">
              {/* <h2 className="   font-sans  text-[20px]     text-emerald-700">
                Enter New Password
              </h2> */}
            </div>
            <InputField
              id="password"
              name="password"
              type="password"
              placeholder="Enter new password"
              label="Password"
              error={errorFromApi}
            />
            <InputField
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              placeholder="Enter Password"
              label="Confirm password"
              error={errorFromApi}
            />
          </div>
          <div className=" text-center">
            <Button
              type="submit"
              design="primary"
              className=" mt-2 w-40 rounded-full  bg-emerald-500 p-2 text-center text-white sm:w-64 "
            >
              Login
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default AuthNewPassword;
