import { useMutation } from "@tanstack/react-query";
import { EditCurrency } from "../../servers/apiCurrency";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useEditCurrency({ handleError, currencyDataToApi }) {
  const navigate = useNavigate();

  const { mutate: editCurrency, isLoading: isEditing } = useMutation({
    mutationFn: () => EditCurrency(currencyDataToApi),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/currency");
    },
    onError: (errorFormApi) => {
      toast.error(errorFormApi.message);
      alert("errorFormApi", errorFormApi);
      handleError(errorFormApi);
    },
  });
  return { editCurrency, isEditing };
}

export default useEditCurrency;
