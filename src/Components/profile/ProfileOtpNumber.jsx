import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";

function ProfileOtpNumber(props) {
  // const [errorFromApi, setError] = useState();
  // const [otp, setOtp] = useState();
  // const email = useSelector((state) => state.user.userForgetPassword?.email);
  // const { sendingOtp } = useAuthRequest({
  //   userdata: { email, type: "resend" },
  // });
  const { setOtpPage, setNewPage } = props;
  const [timer, setTimer] = useState(9);
  const [disabled, setDisabled] = useState(true);
  // const { isLoading, applyOTP } = usePutOTP({
  //   handleSetError,
  //   email,
  //   otp,
  // });

  const initialValues = {
    otpNumber: "",
  };

  // function handleSetError(errorFromApi) {
  //   setError(errorFromApi);
  // }

  const onSubmit = (values) => {
    // const user = {
    //   email: email,
    //   otp: values.otpNumber,
    // };
    // setOtp({
    //   otp: values.otpNumber,
    // });
    console.log("user");
    setNewPage(true);
    // applyOTP({
    //   email: email,
    //   otp: values.otpNumber,
    // });
    console.log("number otp", values);
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
    // sendingOtp({ email: email, type: "resend" });
    setTimer(9);
    setDisabled(false);
  }

  return (
    <div className="ml-10 mr-10  pt-8">
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {(formik) => {
          return (
            <Form className=" rounded-lg border-2 border-gray-300 bg-white ">
              <div className=" mx-8 flex items-center justify-between px-8 pb-8">
                <h1 className="mb-3 mt-3 font-serif text-[25px]    text-black ">
                  Auth OTP
                </h1>
                <Button design="active" onClick={() => setOtpPage(true)}>
                  Back
                </Button>
              </div>
              <div className="px-8 pb-2">
                <InputField
                  id="otpNumber"
                  name="otpNumber"
                  placeholder="Enter OTP Number"
                  type="text"
                  label="Otp Number"
                  table="table"
                  // error={errorFromApi}
                />
              </div>

              {
                <div className="flex justify-between px-8 pb-2">
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

              <div className="my-3 flex  justify-center px-8 pb-2 pt-4">
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
    </div>
  );
}

export default ProfileOtpNumber;
