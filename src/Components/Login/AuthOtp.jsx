import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorText from "../../ui/ErrorText";
import { Link } from "react-router-dom";

function AuthOtp() {
  const intialValues = {
    otpNumber: "",
  };
  const validationSchema = Yup.object({
    otpNumber: Yup.string().required("Required"),
  });

  const onSubmit = (values) => console.log(values);

  function handleResentOtp(e) {
    e.preventDefault();
    console.log("ssss");
  }
  return (
    <Formik
      initialValues={intialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="  mx-8   rounded-md text-xl font-normal md:text-2xl">
            <h1 className="mb-3 mt-3 font-serif  text-3xl ">Auth OTP</h1>
            <div className="relative mb-5  flex flex-col gap-2 ">
              <label htmlFor="otpNumber">Otp Number</label>
              <Field
                name="otpNumber"
                id="otpNumber"
                type="text"
                className=" border-[3px] border-red-100 px-3 py-2 outline-none"
              />

              <ErrorMessage name="otpNumber" component={ErrorText} />
            </div>
            <button
              type="button"
              onClick={handleResentOtp}
              className="text-blue-600   underline"
            >
              Sent again to email
            </button>

            <div className=" my-3 pt-4 text-center">
              <Link
                to="/login/auth"
                className=" mt-2 w-40 rounded-full  bg-red-400 p-2 text-center sm:w-64 "
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
