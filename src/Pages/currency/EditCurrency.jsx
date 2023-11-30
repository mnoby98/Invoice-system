import * as Yup from "yup";
import InputField from "../../ui/InputField";
import InputFormik from "../../ui/InputFormik";
import { useDispatch, useSelector } from "react-redux";
import { addCurrency } from "../../Components/currency/CurrenctSlice";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useEditCurrency from "../../Components/currency/useEditCurrency";
import RadioField from "../../ui/RadioField";
import useGetCurrencyByID from "../../Components/currency/useGetCurrencyByID";

function EditCurrency() {
  const { currencyID } = useParams();
  const userToken = useSelector((state) => state?.user?.token);
  const { currencyData, loadingData, error } = useGetCurrencyByID({
    currencyID,
    userToken,
  });
  const [currencyDataToApi, setCurrencyDataToApi] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorFromApi, setError] = useState();
  const Currency = useSelector((state) => state.currency.currency);
  const currencyTitle = currencyData?.data?.title;
  const currencySymbol = currencyData?.data?.symbol;
  const currencyStatus = currencyData?.data?.status;

  const { editCurrency, isEditing } = useEditCurrency({
    handleError,
    currencyDataToApi,
  });

  const options = [
    { key: "true", value: true },
    { key: "false", value: false },
  ];
  const [newValues, setNewValues] = useState();
  const intialValues = {
    title: currencyTitle || "",
    symbol: currencySymbol || "",
    status: currencyStatus || "",
  };

  function handleError(errorFromApi) {
    setError(errorFromApi);
  }

  const validationSchema = Yup.object({
    title: Yup.string().required("Field Is required"),
    symbol: Yup.string().required("Field Is required"),
    status: Yup.string().required("Field Is required"),
  });

  const onSubmit = (values) => {
    const currency = {
      title: values.title,
      symbol: values.symbol,
      status: values.status,
      userToken: userToken,
      id: currencyID,
    };
    setCurrencyDataToApi(() => currency);
    editCurrency({
      title: values.title,
      symbol: values.symbol,
      status: values.status,
    });
  };

  return (
    <InputFormik
      initialProps={intialValues}
      onSubmitProps={onSubmit}
      edit="edit"
    >
      <InputField
        name="title"
        id="title"
        label="Title"
        table="table"
        placeholder="Enter Title"
        type="text"
        error={errorFromApi?.errors?.title}
      />
      <InputField
        name="symbol"
        id="symbol"
        label="Symbol"
        table="table"
        placeholder="Enter symbol"
        type="text"
        error={errorFromApi?.errors?.symbol}
      />
      <RadioField
        mainLabel="Status"
        options={options}
        table="table"
        name="status"
        id="status"
        error={errorFromApi?.errors?.status}
      />
    </InputFormik>
  );
}

export default EditCurrency;
