import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";

const emailMatches = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

function ProfileOtpEmail(props) {
  // const [errorFromApi, setError] = useState();
  const [email, setEmail] = useState();
  const { setEmailpage, setOtpPage } = props;

  // const { isLoading, sendingOtp } = useAuthRequest({
  //   handleSetError,
  //   userdata: email,
  // });

  const otpValues = {
    email: "",
  };

  const otpSchema = Yup.object({
    email: Yup.string()
      .email("Please Enter right format")
      .matches(emailMatches, "Plz Enter a format without tags ")
      .required("Required"),
  });

  const onSubmit = (values) => {
    // setEmail({ email: values.email });
    // sendingOtp({ email: values.email });
    // setError("");
    setOtpPage(false);
    console.log(values);
  };

  // function handleSetError(errorFromApi) {
  //   setError(errorFromApi);
  // }

  return (
    <div className="ml-10 mr-10  pt-8">
      <Formik
        initialValues={otpValues}
        validationSchema={otpSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          console.log(formik);
          return (
            <Form className=" rounded-lg border-2 border-gray-300 bg-white ">
              <div className="mx-8 flex items-center justify-between">
                <h1 className="mb-3 mt-3 font-serif text-[25px]    text-black ">
                  Auth OTP
                </h1>
                <Button design="active" onClick={() => setEmailpage(true)}>
                  Back
                </Button>
              </div>
              <div className="px-8 pb-2">
                <InputField
                  id="email"
                  name="email"
                  type="text"
                  label="Email"
                  table="table"
                  // error={errorFromApi?.errors?.email?.[0]}
                />
              </div>

              <div className="  my-3 flex justify-center pt-4">
                <Button
                  // to="/login/auth"
                  design="primary"
                  type="submit"
                  // className=" mt-2 w-40 rounded-full  bg-emerald-500 p-2 text-center text-white sm:w-64 "
                >
                  {/* {isLoading ? <BeatLoader color="#ffffff" /> : "Sent OTP"} */}
                  Sent OTP
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default ProfileOtpEmail;
