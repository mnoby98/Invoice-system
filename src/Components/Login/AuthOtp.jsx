import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import InputField from "../../ui/InputField";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import useAuthRequest from "./useAuthRequest";
import { BeatLoader } from "react-spinners";

const emailMatches = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

function AuthOtp() {
  const [errorFromApi, setError] = useState();
  const [email, setEmail] = useState();

  const { isLoading, sendingOtp } = useAuthRequest({
    handleSetError,
    userdata: email,
  });

  const otpValues = {
    email: "",
  };

  const otpSchema = Yup.object({
    email: Yup.string()
      .email("Please Enter right format")
      .matches(emailMatches, "Plz Enter a format without tags ")
      .required("Required"),
    // otpNumber: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    setEmail({ email: values.email });
    sendingOtp({ email: values.email });
    setError("");
  };

  function handleSetError(errorFromApi) {
    setError(errorFromApi);
  }

  return (
    <Formik
      initialValues={otpValues}
      // validationSchema={otpSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form className="  mx-8    rounded-md text-xl font-semibold ">
            <h1 className="mb-3 mt-3 font-serif text-[25px]    text-black ">
              Auth OTP
            </h1>
            <InputField
              id="email"
              name="email"
              placeholder="Enter email"
              type="text"
              label="Email"
              error={errorFromApi?.errors?.email?.[0]}
            />

            <div className="  my-3 flex justify-center pt-4">
              <Button
                // to="/login/auth"
                design="primary"
                type="submit"
                className=" mt-2 w-40 rounded-full  bg-emerald-500 p-2 text-center text-white sm:w-64 "
              >
                {isLoading ? <BeatLoader color="#ffffff" /> : "Sent OTP"}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default AuthOtp;
