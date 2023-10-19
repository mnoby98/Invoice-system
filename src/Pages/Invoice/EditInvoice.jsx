import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import CostInput from "../../ui/CostInput";
import TextArea from "../../ui/TextArea";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addInvoice } from "../../Components/invoice/InvoiceSlice";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import InvoiceNewItem from "../../Components/invoice/InvoiceNewItem";
import RadioField from "../../ui/RadioField";
import { useState } from "react";
import useCreateInvoice from "../../Components/invoice/useCreateInvoice";
import useCurrency from "../../Components/currency/useCurrency";
import useEditInvoice from "../../Components/invoice/useEditInvoice";
import useGetInvoiceWithId from "../../Components/invoice/useGetInvoiceWithId";
import Spinner from "../../ui/Spinner";
function EditInvoice() {
  const { invoiceId } = useParams();
  const [newUpdateData, setNewUpdateData] = useState({});
  const { invoiceWithId, isLoadingInvoice } = useGetInvoiceWithId({
    invoiceId,
  });
  const dataFromApiOneInvoice = invoiceWithId?.data;
  const { currencies, isLoading, error } = useCurrency();
  const optionsofCurrenies = currencies?.data?.currencies;
  const { editInvoice, isEditing } = useEditInvoice({
    handleError,
    dataFromApiOneInvoice,
    newUpdateData,
  });
  const [addItem, setAddItem] = useState(false);
  const [errorFromApi, setError] = useState();

  function handleError(errorFromApi) {
    setError(errorFromApi);
  }

  // console.log("invoiceWithId", invoiceWithId);

  //////////////////////////////////////////////////////////////////////

  // const editInvoiceData = useSelector((state) => state.invoice?.invoice);
  // console.log("wwwwwww", dataFromApiOneInvoice);
  // console.log(editInvoiceData);

  // console.log("editInvoiceData with", invoiceId);

  // function handelAddItem(e) {
  //   e.preventDefault();
  //   console.log(addItem);
  // }
  const options = [
    { key: "Precentage", value: "percentage" },
    { key: "Fixed", value: "fixed" },
  ];

  // const { title?, description, cost, currency, totals, id } =
  //   dataFromApiOneInvoice;
  const title = invoiceWithId?.data?.title;
  const description = invoiceWithId?.data.description;
  const cost = invoiceWithId?.data.cost;
  const currency = invoiceWithId?.data.currency;
  const totals = invoiceWithId?.data.totals;
  const id = invoiceWithId?.data.id;
  console.log("invoiceWithId.data", invoiceWithId?.data);

  const initialValuesWithItem = {
    title: title || "",
    description: description || "",
    cost: cost || "",
    currency: currency || "",
    totals: totals || [],
    email: "",
    name: "",
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
  function handleGetValues(invoice) {
    setNewUpdateData(invoice);
    console.log(newUpdateData);
  }

  const onSubmit = (values) => {
    console.log(values);
    const invoice = {
      title: values.title,
      description: values.description,
      currency_id: values.currency,
      total: values.cost,
      invoice_status_id: id,
      totals: values.totals,
    };
    handleGetValues(invoice);
    editInvoice(invoice);
    console.log("newUpdateData", values?.currency);
  };

  return isLoadingInvoice && isLoading ? (
    <Spinner />
  ) : (
    <div className="   h-screen bg-[#f2f8fa]  ">
      <div className="  bg-[#f2f8fa]    px-8  py-6 ">
        <Formik
          initialValues={initialValuesWithItem}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ formik, values }) => {
            return (
              <Form className=" rounded-lg   border-2  bg-white py-4   ">
                <div className="my-3 flex justify-between border-b px-3 pb-2">
                  <p className=" rounded-full bg-[#04749c] px-2 py-1 font-semibold text-white">
                    Edit incident report
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <button
                      disabled={isEditing}
                      className="rounded-lg bg-[#04749c] px-3 py-1 font-semibold text-white transition-all  duration-300 visited:bg-[#04749c] visited:text-white hover:bg-[#04749c] hover:text-white focus:bg-[#04749c]  focus:text-white"
                      type="submit"
                    >
                      Edit
                    </button>
                    <Button type="reset" design="active">
                      Reset
                    </Button>
                  </div>
                </div>
                <div className="mx-auto max-w-[50%]     py-10">
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
                      {values?.totals?.length > 0 &&
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
                                placeholder="14 "
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
                {/* {addItem ? (
                  <div className="mx-auto max-w-[50%]  py-2">
                    <InputField
                      id="itemTitle"
                      name="itemTitle"
                      table="table"
                      label="Item Title"
                      type="text"
                      placeholder="Enter the title"
                      error={errorFromApi?.errors.titleError}
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
                      error={errorFromApi?.errors.totals?.[0].type}
                    />
                    <InputField
                      id="price"
                      name="price"
                      table="table"
                      label="Price"
                      type="text"
                      error={errorFromApi?.errors.totals?.[0]?.cost}
                    />
                  </div>
                ) : (
                  ""
                )} */}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default EditInvoice;

// export async function InvoiceDetailsLoader({ params }) {
//   const userToken = useSelector((state) => state.user?.user?.token);
//   const { invoiceId } = params;
//   const res = await fetch(
//     `https://api-invoices.twice-m.com/api/invoices/` + invoiceId,
//     {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + userToken,
//       },
//     },
//   );
//   const data = await res.json();
//   return data;
// }
