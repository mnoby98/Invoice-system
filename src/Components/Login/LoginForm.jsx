import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";

function LoginForm() {
  const loginValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Enter right format!").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => console.log(values);
  return (
    <Formik
      initialValues={loginValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="  mx-8 rounded-md  text-xl font-semibold ">
          <h1 className="mb-3 mt-3 text-2xl font-semibold">Login</h1>
          <div className="mx-2 py-4">
            <InputField
              id="email"
              name="email"
              placeholder="Enter email"
              type="text"
              label="Email"
            />
            <InputField
              id="password"
              name="password"
              placeholder="Enter Password"
              type="text"
              label="Password"
            />
            <Link
              className="text-lg text-blue-600   underline"
              to="/login/authotp"
            >
              Forgot password ?
            </Link>
          </div>
          <div className=" text-center">
            <Button type="submit" design="primary">
              Login
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
