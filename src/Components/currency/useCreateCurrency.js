import { useMutation } from "@tanstack/react-query";
import { CreateCurrency } from "../../servers/apiCurrency";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useCreateCurrency({ handleError }) {
  const navigate = useNavigate();
  const Currency = useSelector((state) => state.currency.currency);
  const { mutate: createCurrency, isLoading } = useMutation({
    mutationFn: () => CreateCurrency(Currency),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/currency");
    },
    onError: (errorFromApi) => {
      toast.error(errorFromApi.message);
      handleError(errorFromApi);
    },
  });
  return { createCurrency, isLoading };
}

export default useCreateCurrency;
