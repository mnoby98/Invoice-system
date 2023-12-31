import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import { useSelector } from "react-redux";
import useLogin from "../../Components/Login/useLogin";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const emailMatches = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

function LoginForm() {
  const tokenkey = useSelector((state) => state.user.token);
  console.log("token form selector", tokenkey);

  const [errorFromApi, setError] = useState("");

  function handleError(errorFormApi) {
    setError(errorFormApi);
  }

  const { login, isLoading } = useLogin({ handleError });

  const loginValues = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please Enter right format")
      .matches(emailMatches, "Plz Enter a format without tags ")
      .required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Too Long")
      .required("Required"),
  });

  const onSubmit = (values) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    setError("");

    login(user);
  };
  return (
    <Formik
      initialValues={loginValues}
      // validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="  mx-8 flex  flex-col gap-12 rounded-md text-lg font-normal ">
            <h1 className=" mb-3 mt-3 text-xl font-semibold  text-black">
              Login
            </h1>
            <div className="mx-2 flex flex-col gap-3 py-4">
              <InputField
                id="email"
                name="email"
                placeholder="Example@example.com"
                type="text"
                label="Email"
                error={errorFromApi?.errors?.email?.[0]}
              />
              <InputField
                id="password"
                name="password"
                placeholder="********"
                type="password"
                label="Password"
                error={errorFromApi?.errors?.password?.[0]}
              />
            </div>
            <div className=" text-center">
              {isLoading ? (
                <Button type="submit" disabled={isLoading} design="primary">
                  <BeatLoader color="#ffffff" />
                </Button>
              ) : (
                <Button type="submit" design="primary">
                  Login
                </Button>
              )}
            </div>
            <Link className="text-[18px] text-[#7e3af2]   " to="/login/authotp">
              Forgot password ?
            </Link>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
