import { Form, Formik } from "formik";
// import InputField from "../../ui/InputField";
import Button from "../ui/Button";
import { useState } from "react";
// import { useSelector } from "react-redux";

function InputFormik(props) {
  const [edit, setEdit] = useState();
  const { initialProps, validationProps, onSubmitProps } = props;
  const initialValues = initialProps;
  const validationSchema = validationProps;
  const onSubmit = onSubmitProps;
  return (
    <div className=" h-full  bg-blue-100">
      <div className="ml-10 mr-10  pt-8">
        <Formik
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          <Form className="  rounded-lg border-2 border-gray-300 bg-white">
            <div className="mx-8 flex items-center justify-between ">
              <p className="mb-8 mt-6  text-lg">Profile</p>
              <Button design="active" type="submit">
                edit
              </Button>
            </div>
            <div className=" px-8 pb-8">{props.children}</div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default InputFormik;
