import { Form, Formik } from "formik";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import * as Yup from "yup";
import RadioField from "../../ui/RadioField";

function InvoiceNewItem() {
  const options = [
    { key: "Precentage", value: "percentage" },
    { key: "Fixed", value: "fixed" },
  ];

  const initialValues = {
    title: "",
    type: "",
    price: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required Field"),
    type: Yup.string().required("Required Field"),
    price: Yup.number().required("Required Cost"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="mr-2  px-8   pt-6 ">
      <Formik
        initialValues={{ itemTitle: "", type: "", price: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form className=" rounded-lg   border-2  bg-white pb-4 pt-2   ">
              <div className="mx-auto my-3 max-w-[50%] border-b px-3 pb-2">
                <Button type="submit" design="addItem">
                  Add new item
                </Button>
              </div>
              <div className="mx-auto max-w-[50%]     py-2">
                <InputField
                  id="title"
                  name="title"
                  table="table"
                  label="Title"
                  type="text"
                  placeholder="Enter the title"
                />
                <RadioField
                  options={options}
                  id="type"
                  name="type"
                  label="percentage "
                  table="table"
                  label2="fixed"
                  value1="percentage"
                  value2="fixed"
                  mainLabel="Type"
                />
                <InputField
                  id="price"
                  name="price"
                  table="table"
                  label="Price"
                  type="text"
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default InvoiceNewItem;
