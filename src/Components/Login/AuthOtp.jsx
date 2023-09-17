import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorText from "../../ui/ErrorText";
import React, { useState } from "react";
import OTPInput from "react-otp-input";

function AuthOtp() {
  const [otp, setOtp] = useState("");
  console.log(otp);
  const intialValues = {
    otpNumber: [otp],
  };
  const validationSchema = Yup.object({
    otpNumber: Yup.array().required("Required"),
  });

  const onSubmit = (values) => console.log(values);
  return (
    <Formik
      initialValues={intialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="  mx-8   rounded-md text-xl font-normal md:text-2xl">
          <h1 className="mb-3 mt-3 font-serif  text-3xl ">Auth OTP</h1>
          <div className="relative mb-5  flex flex-col gap-2 ">
            <Field name="otpNumber">
              {({ field }) => {
                // console.log(field);
                return (
                  <React.Fragment>
                    <label className="px-2" htmlFor="otpNumber">
                      Enter Otp-Number
                    </label>
                    <OTPInput
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      id="otpNumber"
                      numInputs={4}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => (
                        <input
                          {...props}
                          className=" border-2  border-solid border-black"
                        />
                      )}
                    />
                  </React.Fragment>
                );
              }}
            </Field>
          </div>

          <button className="text-blue-600   underline">
            Sent agien to email
          </button>

          <div className=" text-center">
            <button
              className=" mt-2 w-40 rounded-full  bg-red-400 p-2 text-center sm:w-64 "
              type="submit"
            >
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AuthOtp;
