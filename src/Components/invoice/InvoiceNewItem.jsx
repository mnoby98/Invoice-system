import { Form, Formik } from "formik";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import * as Yup from "yup";
import RadioField from "../../ui/RadioField";

function InvoiceNewItem() {
  const options = [
    { key: "Precentage", value: "precentage" },
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
                <Button
                  // className="rounded-lg bg-[#04749c] px-3 py-1 font-semibold text-white transition-all  duration-300 visited:bg-[#04749c] visited:text-white hover:bg-[#04749c] hover:text-white focus:bg-[#04749c]  focus:text-white"
                  type="submit"
                  design="addItem"
                >
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
    // // <div className=" h-full  bg-blue-100">
    // <div className="mr-2  px-8   pt-6">
    //   <Formik>
    //     <div className="   rounded-lg   border-2  bg-white  pt-4">
    //       <div className="mx-auto max-w-[50%] ">
    //         <div className=" px-8 ">
    //           <div
    //             className={`
    //           relative  mb-5 grid grid-cols-[1fr_2fr] items-center`}
    //           >
    //             <InputField
    //               name="test"
    //               table="table"
    //               type="text"
    //               id="test"
    //               label="Test"
    //             />
    //           </div>
    //         </div>
    //         <div className=" mb-8  w-full     ">
    //           <Button type="submit" design="addItem">
    //             Add new item
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </Formik>
    // </div>
  );
}

export default InvoiceNewItem;
