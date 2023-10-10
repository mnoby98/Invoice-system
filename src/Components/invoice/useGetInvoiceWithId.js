import { useQuery } from "@tanstack/react-query";
import { getInvoiceWithId } from "../../servers/apiInvoice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function useGetInvoiceWithId({ invoiceId }) {
  const userToken = useSelector((state) => state.user?.user?.token);
  console.log("userToken form useGetInvoiceWithId ", userToken);

  const invoiceData = { invoiceId, userToken };

  console.log("invoiceId form useGetInvoiceWithId ", invoiceData);
  const { data: invoiceWithId, isLoading: isLoadingInvoice } = useQuery({
    queryKey: ["invoiceId"],
    queryFn: () => getInvoiceWithId(invoiceData),
  });
  console.log("invoiceWithId form useGetInvoiceWithId ", invoiceWithId);
  return { invoiceWithId, isLoadingInvoice };
}

export default useGetInvoiceWithId;
