import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import CostInput from "../../ui/CostInput";
import TextArea from "../../ui/TextArea";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addInvoice } from "../../Components/invoice/InvoiceSlice";
import { useNavigate } from "react-router-dom";
import InvoiceNewItem from "../../Components/invoice/InvoiceNewItem";
import RadioField from "../../ui/RadioField";
import { useState } from "react";

function CreateInvoice() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addItem, setAddItem] = useState(false);

  function handelAddItem(e) {
    e.preventDefault();
    setAddItem((add) => !add);
    console.log(addItem);
  }
  const options = [
    { key: "Precentage", value: "precentage" },
    { key: "Fixed", value: "fixed" },
  ];

  const initialValues = {
    title: "",
    description: "",
    cost: "",
    currency: "",
  };
  const initialValuesWithItem = {
    title: "",
    description: "",
    cost: "",
    currency: "",
    itemTitle: "",
    type: "",
    price: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required Field"),
    description: Yup.string().required("Required Field"),
    cost: Yup.number().required("Required Cost"),
    currency: Yup.string().required("Required Currency"),
  });
  const validationSchemaWithItem = Yup.object({
    title: Yup.string().required("Required Field"),
    description: Yup.string().required("Required Field"),
    cost: Yup.number().required("Required Cost"),
    currency: Yup.string().required("Required Currency"),
    itemTitle: Yup.string().required("Required Field"),
    type: Yup.string().required("Required Field"),
    price: Yup.number().required("Required Cost"),
  });

  const onSubmit = (values) => {
    console.log(values);
    const invoice = {
      title: values.title,
      description: values.description,
      currency: values.currency,
      cost: values.cost,
      // itemTitle: values.itemTitle,
      // type: values.type,
      // price: values.price,
    };
    if (!values) return toast.error("there is no values ");
    dispatch(addInvoice(invoice));
    toast.success("Success addin invoice to table");
    navigate("/invoice");
  };

  return (
    <div className="h-full  bg-blue-100 ">
      <div className="mr-2  px-8   pt-6 ">
        <Formik
          validationSchema={
            addItem ? validationSchemaWithItem : validationSchema
          }
          initialValues={addItem ? initialValuesWithItem : initialValues}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(formik) => {
            console.log(formik);
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
                    // error={formik.errors.title}
                  />
                  <TextArea
                    id="description"
                    name="description"
                    table="table"
                    label="Description"
                    placeholder="Enter the description"
                    // error={formik.errors.description}
                  />
                  <CostInput
                    id="cost"
                    id2="currency"
                    name1="cost"
                    name2="currency"
                    table="table"
                    label="Cost"
                    type="number"
                    placeholder="Enter the currency"
                    // error={formik.errors.cost}
                    // error2={formik.errors.currency}
                  />
                </div>
                <div className="mx-auto my-3 max-w-[50%] border-b px-3 pb-2">
                  <Button
                    onClick={handelAddItem}
                    type="button"
                    design="addItem"
                  >
                    {addItem ? "Cancel new item" : "Add new item"}
                  </Button>
                </div>
                {addItem ? (
                  <div className="mx-auto max-w-[50%]  py-2">
                    <InputField
                      id="itemTitle"
                      name="itemTitle"
                      table="table"
                      label="Item Title"
                      type="text"
                      placeholder="Enter the title"
                      // error={formik.errors.itemTitle}
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
                      // error={formik.errors.type}
                    />
                    <InputField
                      id="price"
                      name="price"
                      table="table"
                      label="Price"
                      type="text"
                      // error={formik.errors.price}
                    />
                  </div>
                ) : (
                  ""
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default CreateInvoice;
