import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import CostInput from "../../ui/CostInput";
import TextArea from "../../ui/TextArea";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addInvoice } from "../../Components/invoice/InvoiceSlice";
import { useNavigate } from "react-router-dom";
import InvoiceNewItem from "../../Components/invoice/InvoiceNewItem";
import RadioField from "../../ui/RadioField";
import { useState } from "react";
import useCreateInvoice from "../../Components/invoice/useCreateInvoice";
import useCurrency from "../../Components/currency/useCurrency";

function CreateInvoice() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = useSelector((state) => state?.user?.user?.token);
  const { currencies, isLoading, error } = useCurrency();
  // console.log("currencies from createInvoice", currencies.data.currencies);
  // const currenciesOptions = currencies.data.currencies;
  // const currenciesOptions = useSelector(
  //   (state) => state.currency?.currencyOptions,
  // );
  // const { currencies, isLoading, error } = useCurrency();
  const optionsofCurrenies = currencies?.data?.currencies;
  const [addItem, setAddItem] = useState(true);
  const { createInvoice, isCreating } = useCreateInvoice({ handleError });
  const [errorFromApi, setError] = useState();

  function handleError(errorFromApi) {
    setError(errorFromApi);
  }

  const options = [
    { key: "Precentage", value: "percentage" },
    { key: "Fixed", value: "fixed" },
  ];

  // const initialValues = {
  //   title: "",
  //   description: "",
  //   cost: "",
  //   currency: "",
  // };
  const initialValuesWithItem = {
    title: "",
    description: "",
    cost: "",
    currency: "",
    totals: [
      // {
      //   title: "",
      //   cost: "",
      //   type: "",
      // },
    ],
    email: "",
    name: "",
  };
  console.log(initialValuesWithItem.totals);
  function handelAddItem(formik) {
    // e.preventDefault();
    initialValuesWithItem.totals.push({
      title: "",
      cost: "",
      type: "",
    });
    formik.resetForm();
    initialValuesWithItem.totals.map((item) => console.log("items", item));
  }
  const validationSchema = Yup.object({
    title: Yup.string().required("Required Field"),
    description: Yup.string().required("Required Field"),
    cost: Yup.number().required("Required Cost"),
    currency: Yup.string().required("Required Currency"),
  });
  const validationTotals = Yup.object({
    itemTitle: Yup.string().required("Required Field"),
    type: Yup.string().required("Required Field"),
    price: Yup.number().required("Required Cost"),
  });
  // const totalSchema = Yup.array().of(validationTotals);
  const validationSchemaWithItem = Yup.object({
    title: Yup.string().required("Required Field"),
    description: Yup.string().required("Required Field"),
    cost: Yup.number().required("Required Cost"),
    currency: Yup.string().required("Required Currency"),
    totals: Yup.array().of(validationTotals),
    // totals: Yup.array().optional(),

    // itemTitle: Yup.string().required("Required Field"),
    // type: Yup.string().required("Required Field"),
    // price: Yup.number().required("Required Cost"),
  });

  const onSubmit = (values) => {
    console.log(values);

    const invoice = {
      title: values.title,
      description: values.description,
      currency_id: values.currency,
      total: values.cost,
      totals: values.totals,
      // totals: [
      //   { title: values.itemTitle, cost: values.price, type: values.type },
      // ],
    };
    createInvoice(invoice);
    if (!values) return toast.error("there is no values ");
    dispatch(addInvoice({ ...invoice, userToken }));
  };

  return (
    <div className="h-full  bg-[#f2f8fa] ">
      <div className="mr-2  bg-[#f2f8fa] px-8 pb-8  pt-6 ">
        <Formik
          // validationSchema={
          //   addItem ? validationSchemaWithItem : validationSchema
          // }
          // initialValues={addItem ? initialValuesWithItem : initialValues}
          initialValues={initialValuesWithItem}
          onSubmit={onSubmit}
        >
          {({ formik, values }) => {
            console.log("formik", formik);
            console.log("values", values);
            return (
              <Form className="     rounded-lg border-2  bg-white pb-4 pt-2   ">
                <div className="my-3 flex  justify-between border-b px-3 pb-2">
                  <p className="rounded-lg bg-[#04749c] px-2 py-1    text-xl font-semibold text-white">
                    Create incident report
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <button
                      disabled={isCreating}
                      className="rounded-lg bg-[#04749c] px-3 py-1 font-semibold text-white transition-all  duration-300 visited:bg-[#04749c] visited:text-white hover:bg-[#04749c] hover:text-white focus:bg-[#04749c]  focus:text-white"
                      type="submit"
                    >
                      Create
                    </button>
                    <Button type="reset" design="active">
                      Reset
                    </Button>
                  </div>
                </div>
                <div className="mx-auto max-w-[50%] border-b-2     py-16">
                  <InputField
                    id="email"
                    name="email"
                    table="table"
                    label="E-mail"
                    type="text"
                    placeholder="example@example.com"
                    error={errorFromApi?.errors.title}
                  />
                  <InputField
                    id="name"
                    name="name"
                    table="table"
                    label="Name"
                    type="text"
                    placeholder="Mahmoud Mahmoud"
                    error={errorFromApi?.errors.title}
                  />
                  <InputField
                    id="title"
                    name="title"
                    table="table"
                    label="Title"
                    type="text"
                    placeholder="T-Shirt"
                    error={errorFromApi?.errors.title}
                  />
                  <TextArea
                    id="description"
                    name="description"
                    table="table"
                    label="Description"
                    placeholder="Red T-Shirt with  collar"
                    error={errorFromApi?.errors.description}
                  />
                  <CostInput
                    id="cost"
                    id2="currency"
                    name1="cost"
                    name2="currency"
                    table="table"
                    label="Cost"
                    type="number"
                    placeholder="120"
                    error={errorFromApi?.errors.total}
                    error2={errorFromApi?.errors.currency_id}
                    currenciesOptions={optionsofCurrenies}
                  />
                </div>
                <FieldArray name="totals">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.totals.length > 0 &&
                        values.totals.map((item, i) => (
                          <div
                            className="mx-auto max-w-[50%] border-b-2  py-2"
                            key={i}
                          >
                            <div className="">
                              <div className="flex  justify-between py-2">
                                <p className="rounded-lg bg-[#04749c] px-6 py-1 text-2xl text-white">{`item ${i}`}</p>
                                <div className="col">
                                  <button
                                    design="addItem"
                                    className=" rounded-lg bg-red-300 px-2 py-1 text-xl font-medium"
                                    type="button"
                                    onClick={() => remove(i)}
                                  >
                                    Delete Item
                                  </button>
                                </div>
                              </div>
                              <InputField
                                name={`totals.${i}.title`}
                                id={`totals.${i}.title`}
                                table="table"
                                label="Item Title"
                                placeholder="Tax"
                                type="text"
                                error={
                                  errorFromApi?.errors?.[`totals.${i}.title`]
                                }
                              />
                              <RadioField
                                options={options}
                                id={`totals.${i}.type`}
                                name={`totals.${i}.type`}
                                label="percentage "
                                table="table"
                                label2="fixed"
                                value1="percentage"
                                value2="fixed"
                                mainLabel="Type"
                                error={
                                  errorFromApi?.errors?.[`totals.${i}.type`]
                                }
                              />
                              <InputField
                                id={`totals.${i}.cost`}
                                name={`totals.${i}.cost`}
                                table="table"
                                label="Price"
                                type="text"
                                placeholder="14"
                                error={
                                  errorFromApi?.errors?.[`totals.${i}.cost`]
                                }
                              />
                            </div>
                          </div>
                        ))}

                      <div className=" mx-auto max-w-[50%]  py-2 text-center">
                        <Button
                          className=" "
                          design="addItem"
                          type="button"
                          onClick={() => {
                            push({
                              title: "",
                              cost: "",
                              type: "",
                            });
                          }}
                        >
                          Add new item
                        </Button>
                      </div>
                    </div>
                  )}
                </FieldArray>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default CreateInvoice;
