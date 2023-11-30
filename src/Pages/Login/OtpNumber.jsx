import { Formik, Form } from "formik";
import InputField from "../../ui/InputField";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import useAuthRequest from "../../Components/Login/useAuthRequest";
import { useSelector } from "react-redux";
import usePutOTP from "../../Components/Login/usePutOTP";

function OtpNumber() {
  const [errorFromApi, setError] = useState();
  const [otp, setOtp] = useState();
  const email = useSelector((state) => state.user.userForgetPassword?.email);
  const { sendingOtp } = useAuthRequest({
    userdata: { email, type: "resend" },
  });
  const [timer, setTimer] = useState(9);
  const [disabled, setDisabled] = useState(true);
  const { isLoading, applyOTP } = usePutOTP({
    handleSetError,
    email,
    otp,
  });

  const initialValues = {
    otpNumber: "",
  };

  function handleSetError(errorFromApi) {
    setError(errorFromApi);
  }

  const onSubmit = (values) => {
    setOtp({
      otp: values.otpNumber,
    });
    applyOTP({
      email: email,
      otp: values.otpNumber,
    });
  };

  useEffect(
    function () {
      if (disabled === true) return;
      const interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    },
    [disabled],
  );

  useEffect(
    function () {
      if (timer === 0) return setDisabled(true);
    },
    [timer],
  );

  function handleResentOtp(e) {
    e.preventDefault();
    sendingOtp({ email: email, type: "resend" });
    setTimer(9);
    setDisabled(false);
  }

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      {(formik) => {
        return (
          <Form className="  mx-8    rounded-md text-xl font-semibold ">
            <h1 className="mb-3 mt-3 font-serif text-[25px]    text-black ">
              Auth OTP
            </h1>
            <InputField
              id="otpNumber"
              name="otpNumber"
              placeholder="Enter OTP Number"
              type="text"
              label="Otp Number"
              error={errorFromApi}
            />
            {
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleResentOtp}
                  disabled={!disabled}
                  className={`text-lg ${
                    disabled ? "text-blue-600" : " text-gray-700 opacity-50"
                  }   `}
                >
                  ✉ Resend OTP to email
                </button>
                {disabled ? (
                  ""
                ) : (
                  <span className={`text-lg text-green-700 opacity-50  `}>
                    {timer}
                  </span>
                )}
              </div>
            }

            <div className="  my-3 flex justify-center pt-4">
              <Button
                // to="/login/auth"
                design="primary"
                type="submit"
                className=" mt-2 w-40 rounded-full  bg-emerald-500 p-2 text-center text-white sm:w-64 "
              >
                Submit
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default OtpNumber;
