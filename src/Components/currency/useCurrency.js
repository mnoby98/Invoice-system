import { useQuery } from "@tanstack/react-query";
import { GetCurrency } from "../../servers/apiCurrency";
import { useSelector } from "react-redux";
import useUser from "../Login/useUser";

function useCurrency() {
  const userToken = useSelector((state) => state?.user?.token);
  const {
    isLoading,
    error,
    data: currencies,
  } = useQuery({
    queryKey: ["currency"],
    queryFn: () => GetCurrency(userToken),
  });
  return { currencies, isLoading, error };
}

export default useCurrency;
