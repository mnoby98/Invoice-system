import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import CostInput from "../../ui/CostInput";
import TextArea from "../../ui/TextArea";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addInvoice } from "../../Components/invoice/InvoiceSlice";
function CreateInvoice() {
  const dispatch = useDispatch();
  const initialValues = {
    title: "",
    description: "",
    cost: "",
    currency: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required Field"),
    description: Yup.string().required("Required Field"),
    cost: Yup.number().required("Required Cost"),
    currency: Yup.string().required("Required Currency"),
  });

  const onSubmit = (values) => {
    console.log(values);
    const invoice = {
      title: values.title,
      description: values.description,
      currency: values.currency,
      cost: values.cost,
    };
    if (!values) return toast.error("there is no values ");
    dispatch(addInvoice(invoice));
    toast.success("Success addin invoice to table");
  };

  return (
    <div className="h-full  bg-blue-100 ">
      <div className="mr-2  px-8   pt-6 ">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form className=" rounded-lg   border-2  bg-white pb-4 pt-2   ">
                <div className="my-3 flex justify-between border-b px-3 pb-2">
                  <p>Create incident report</p>
                  <div className="flex items-center justify-between gap-4">
                    <button
                      className="rounded-lg bg-[#04749c] px-3 py-1 font-semibold text-white transition-all  duration-300 visited:bg-[#04749c] visited:text-white hover:bg-[#04749c] hover:text-white focus:bg-[#04749c]  focus:text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                    <button>Cancel</button>
                  </div>
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
                  <TextArea
                    id="description"
                    name="description"
                    table="table"
                    label="Description"
                    placeholder="Enter the description"
                  />
                  {/* <InputField
                    id="cost"
                    name="cost"
                    table="table"
                    label="Cost"
                    type="number"
                    placeholder="Enter the cost"
                  /> */}
                  <CostInput
                    id="cost"
                    id2="currency"
                    name1="cost"
                    name2="currency"
                    table="table"
                    label="Cost"
                    type="number"
                    placeholder="Enter the currency"
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default CreateInvoice;
