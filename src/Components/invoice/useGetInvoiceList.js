import { useQuery } from "@tanstack/react-query";
import { getInvoiceList } from "../../servers/apiInvoice";
import { useSelector } from "react-redux";

function useGetInvoiceList() {
  const userToken = useSelector((state) => state?.user?.token);
  console.log("userToken from useGetInvoiceList", userToken);
  const {
    data: invoiceList,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["invoiceList"],
    queryFn: () => getInvoiceList(userToken),
  });
  return { invoiceList, error, isLoading };
}

export default useGetInvoiceList;
