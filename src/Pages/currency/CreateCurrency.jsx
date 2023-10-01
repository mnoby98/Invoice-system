import * as Yup from "yup";
import InputField from "../../ui/InputField";
import InputFormik from "../../ui/InputFormik";
import { useDispatch } from "react-redux";
import { addCurrency } from "../../Components/currency/CurrenctSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function CreateCurrency() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const intialValues = {
    title: "",
    symbol: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Field Is required"),
    symbol: Yup.string().required("Field Is required"),
  });
  const onSubmit = (values) => {
    if (!values) return;
    console.log(values);
    toast.success("Success create currency");
    dispatch(addCurrency(values));
    navigate("/currency");
  };

  return (
    <InputFormik
      initialProps={intialValues}
      validationProps={validationSchema}
      onSubmitProps={onSubmit}
    >
      <InputField
        name="title"
        id="title"
        label="Title"
        table="table"
        placeholder="Enter Title"
        type="text"
      />

      <InputField
        name="symbol"
        id="symbol"
        label="Symbol"
        table="table"
        placeholder="Enter symbol"
        type="text"
      />
    </InputFormik>
  );
}

export default CreateCurrency;
