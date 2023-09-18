import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import InputField from "../../ui/InputField";
import { useEffect, useState } from "react";

function AuthOtp() {
  const [disabled, setDisabled] = useState(true);
  const [timer, setTimer] = useState(10);

  const otpValues = {
    otpNumber: "",
  };
  const validationSchema = Yup.object({
    otpNumber: Yup.string().required("Required"),
  });

  const onSubmit = (values) => console.log(values);

  useEffect(
    function () {
      const interval = setInterval(() => {
        if (disabled === true) return;
        setTimer((timer) => timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    },
    [disabled, timer],
  );

  useEffect(
    function () {
      const interval = setInterval(() => {
        if (disabled === false) setDisabled(true);
        console.log(disabled);
      }, 11000);
      return () => clearInterval(interval);
    },
    [disabled],
  );

  function handleResentOtp(e) {
    e.preventDefault();
    setTimer(10);
    setDisabled(false);
    console.log(disabled);
  }
  return (
    <Formik
      initialValues={otpValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="  mx-8   rounded-md text-xl font-semibold ">
            <h1 className="mb-3 mt-3 text-2xl  font-semibold ">Auth OTP</h1>
            <InputField
              id="otpNumber"
              name="otpNumber"
              placeholder="Enter OTP Number"
              type="text"
              label="Otp Number"
            />
            <button
              type="button"
              onClick={handleResentOtp}
              disabled={!disabled}
              className="text-lg text-blue-600   underline"
            >
              ✉ Sent again to email <span>{timer}</span>
            </button>
            <div className="  my-3 flex justify-center pt-4">
              <Link
                to="/login/auth"
                className=" mt-2 w-40 rounded-full  bg-emerald-500 p-2 text-center text-white sm:w-64 "
              >
                Submit
              </Link>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default AuthOtp;
