import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorText from "../ui/ErrorText";

function LoginForm() {
  const intialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Enter right format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => console.log(values);
  return (
    <Formik
      initialValues={intialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="  mx-8 rounded-md  text-xl font-normal md:text-2xl">
        <h1 className="mb-3 font-serif text-2xl">Login</h1>
        <div className="mx-2 py-4">
          <div className="relative mb-5  flex flex-col gap-2  ">
            <label htmlFor="email" className="px-2">
              Email
            </label>
            <Field
              name="email"
              type="text"
              placeholder="Enter email"
              className=" w-40 grow rounded-[8px] border-[1px] border-stone-400  px-1  py-1 focus:outline-none  sm:w-auto    "
            />
            <ErrorMessage name="email" component={ErrorText} />
          </div>
          <div className="relative mb-5  flex flex-col gap-2 ">
            <label className="px-2">Password</label>
            <Field
              name="password"
              type="text"
              placeholder="Enter Password"
              className="  w-40 grow rounded-[8px] border-[1px]  border-stone-400  px-1 py-1  focus:outline-none   sm:w-auto"
            />
            <ErrorMessage name="password" component={ErrorText} />
          </div>
        </div>
        <div className=" text-center">
          <button
            className=" mt-2 w-40 rounded-full  bg-red-400 p-2 text-center sm:w-64 "
            type="submit"
          >
            Login
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default LoginForm;
