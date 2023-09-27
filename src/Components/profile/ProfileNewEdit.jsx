import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import useNewPassword from "../Login/useNewPassword";
import { useSelector } from "react-redux";

function ProfileNewEdit(props) {
  const { email, otp } = useSelector((state) => state.user.userForgetPassword);

  const [errorFromApi, setError] = useState();
  const { setNewPage } = props;
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

  const newPasswordSchema = Yup.object({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Too Long")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
  });

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
    <div className="ml-10 mr-10  pt-8">
      <Formik
        initialValues={newPasswordValues}
        // validationSchema={newPasswordSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className=" rounded-lg border-2 border-gray-300 bg-white ">
            <div className="mx-8 flex items-center justify-between px-8 pb-8">
              <h1 className="mb-3 mt-3 text-[25px]  font-normal text-gray-800  ">
                Auth
              </h1>
              <Button design="active" onClick={() => setNewPage(false)}>
                Back
              </Button>
            </div>
            <div className="px-8 pb-2">
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
                table="table"
                error={errorFromApi}
              />
              <InputField
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="Enter Password"
                label="Confirm password"
                table="table"
                error={errorFromApi}
              />
            </div>
            <div className=" pb-3 text-center">
              <Button
                type="submit"
                design="primary"
                // className=" mt-2 w-40 rounded-full  bg-emerald-500 p-2 text-center text-white sm:w-64 "
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProfileNewEdit;
