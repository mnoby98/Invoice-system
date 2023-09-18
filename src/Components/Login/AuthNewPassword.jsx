import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorText from "../../ui/ErrorText";

function AuthNewPassword() {
  const intialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
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
          <h1 className="mb-3 mt-3 font-serif  text-3xl ">Auth</h1>
          <div className="mx-2 py-4">
            <div className="relative mb-5  flex flex-col gap-2  ">
              <h2 className=" font-medium">Enter New Password</h2>
            </div>
            <div className="relative mb-5  flex flex-col gap-2 ">
              <label htmlFor="password" className="px-2">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                className="  w-40 grow rounded-[8px] border-[1px]  border-stone-400  px-1 py-1  focus:outline-none   sm:w-auto"
              />
              <ErrorMessage name="password" component={ErrorText} />
            </div>
            <div className="relative mb-5  flex flex-col gap-2 ">
              <label htmlFor="confirmPassword" className="px-2">
                Confirm password
              </label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Enter Password"
                className="  w-40 grow rounded-[8px] border-[1px]  border-stone-400  px-1 py-1  focus:outline-none   sm:w-auto"
              />
              <ErrorMessage name="confirmPassword" component={ErrorText} />
            </div>
          </div>
          <div className=" text-center">
            <button
              type="submit"
              className=" mt-2 w-40 rounded-full  bg-red-400 p-2 text-center sm:w-64 "
            >
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default AuthNewPassword;
