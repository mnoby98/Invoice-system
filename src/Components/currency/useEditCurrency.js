import { useMutation } from "@tanstack/react-query";
import { EditCurrency } from "../../servers/apiCurrency";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useEditCurrency({ handleError }) {
  const navigate = useNavigate();
  const Currency = useSelector((state) => state.currency.currency);

  const { mutate: editCurrency, isLoading: isEditing } = useMutation({
    mutationFn: () => EditCurrency(Currency),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/currency");
    },
    onError: (errorFormApi) => {
      toast.error("test Form Error");
      alert("errorFormApi", errorFormApi);
      handleError(errorFormApi.errors);
    },
  });
  return { editCurrency, isEditing };
}

export default useEditCurrency;
