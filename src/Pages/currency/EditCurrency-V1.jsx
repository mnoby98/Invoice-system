import * as Yup from "yup";
import InputField from "../../ui/InputField";
import InputFormik from "../../ui/InputFormik";
import { useDispatch, useSelector } from "react-redux";
import { addCurrency } from "../../Components/currency/CurrenctSlice";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorFromApi, setError] = useState();
  const Currency = useSelector((state) => state.currency.currency);
  const currencyTitle = Currency.title;
  const currencySymbol = Currency.symbol;
  const currencyStatus = Currency.status;
  const currencyToken = Currency.userToken;

  const { editCurrency, isEditing } = useEditCurrency({ handleError });

  const options = [
    { key: "true", value: "true" },
    { key: "false", value: "false" },
  ];

  const intialValues = {
    title: currencyTitle || "",
    symbol: currencySymbol || "",
    status: "false" || currencyStatus,
  };

  function handleError(errorFromApi) {
    setError(errorFromApi);
    console.log("error", errorFromApi);
  }

  const validationSchema = Yup.object({
    title: Yup.string().required("Field Is required"),
    symbol: Yup.string().required("Field Is required"),
    status: Yup.string().required("Field Is required"),
  });
  const onSubmit = (values) => {
    editCurrency({
      title: values.title,
      symbol: values.symbol,
      status: currencyStatus,
    });

    dispatch(
      addCurrency({
        title: values.title,
        symbol: values.symbol,
        status: values.status,
        id: Currency.id,
        userToken: currencyToken,
      }),
    );
  };

  return (
    <InputFormik
      initialProps={intialValues}
      // validationProps={validationSchema}
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
        error={errorFromApi?.errors?.[0]}
      />
      <InputField
        name="symbol"
        id="symbol"
        label="Symbol"
        table="table"
        placeholder="Enter symbol"
        type="text"
        error={errorFromApi?.errors?.[1]}
      />
      <RadioField
        mainLabel="Status"
        options={options}
        table="table"
        name="status"
        id="status"
      />
    </InputFormik>
  );
}

export default EditCurrency;
