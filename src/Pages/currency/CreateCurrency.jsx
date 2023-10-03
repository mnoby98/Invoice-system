import * as Yup from "yup";
import InputField from "../../ui/InputField";
import InputFormik from "../../ui/InputFormik";
import { useDispatch, useSelector } from "react-redux";
import { addCurrency } from "../../Components/currency/CurrenctSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import RadioField from "../../ui/RadioField";
import useCreateCurrency from "../../Components/currency/useCreateCurrency";
import { useState } from "react";
function CreateCurrency() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = useSelector((state) => state?.user?.user?.token);
  const { createCurrency, isLoading } = useCreateCurrency({ handleError });
  const [errorFromAPi, setError] = useState();

  function handleError(errorFromAPi) {
    setError(errorFromAPi);
  }

  const options = [
    { key: "true", value: "true" },
    { key: "false", value: "false" },
  ];

  const intialValues = {
    title: "",
    symbol: "",
    status: "true",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Field Is required"),
    symbol: Yup.string().required("Field Is required"),
  });
  const onSubmit = (values) => {
    if (!values) return;
    console.log(values);
    createCurrency({
      title: values.title,
      symbol: values.symbol,
      status: values.status,
    });
    // toast.success("Success create currency");
    dispatch(
      addCurrency({
        title: values.title,
        symbol: values.symbol,
        status: values.status,
        userToken: userToken,
      }),
    );
    // navigate("/currency");
  };

  return (
    <InputFormik
      initialProps={intialValues}
      // validationProps={validationSchema}
      onSubmitProps={onSubmit}
    >
      <InputField
        name="title"
        id="title"
        label="Title"
        table="table"
        placeholder="Enter Title"
        type="text"
        error={errorFromAPi?.errors?.title}
      />

      <InputField
        name="symbol"
        id="symbol"
        label="Symbol"
        table="table"
        placeholder="Enter symbol"
        type="text"
        error={errorFromAPi?.errors?.symbol}
      />
      <RadioField
        options={options}
        name="status"
        id="status"
        mainLabel="Status"
        table="table"
        error={errorFromAPi?.errors?.status}
      />
    </InputFormik>
  );
}

export default CreateCurrency;
