import { Form, Formik } from "formik";
import Button from "../ui/Button";

function InputFormik(props) {
  const { initialProps, validationProps, onSubmitProps, edit } = props;
  const initialValues = initialProps;
  const validationSchema = validationProps;
  const onSubmit = onSubmitProps;
  return (
    <div className=" h-full  bg-[#f9fafb]">
      <div className="ml-10 mr-10  pt-8">
        <Formik
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          initialValues={initialValues}
          enableReinitialize
        >
          <Form className="  rounded-lg border-2 border-[#ecedee] bg-[white]">
            <div className="mx-8 flex items-center justify-between ">
              <p className="mb-8 mt-6  text-lg">Currencies</p>
              <Button design="active" type="submit">
                {edit ? "edit" : "Create"}
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
