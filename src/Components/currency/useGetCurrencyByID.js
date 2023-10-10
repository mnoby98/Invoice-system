import { useQuery } from "@tanstack/react-query";
import { GetCurrencyByID } from "../../servers/apiCurrency";

function useGetCurrencyByID({ currencyID, userToken }) {
  const currencyDataForApi = { currencyID, userToken };
  const {
    data: currencyData,
    isLoading: loadingData,
    error,
  } = useQuery({
    queryKey: ["currencyID"],
    queryFn: () => GetCurrencyByID(currencyDataForApi),
  });
  return { currencyData, loadingData, error };
}

export default useGetCurrencyByID;
