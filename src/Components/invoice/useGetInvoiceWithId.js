import { useQuery } from "@tanstack/react-query";
import { getInvoiceWithId } from "../../servers/apiInvoice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function useGetInvoiceWithId({ invoiceId }) {
  const userToken = useSelector((state) => state?.user?.token);

  const invoiceData = { invoiceId, userToken };

  const { data: invoiceWithId, isLoading: isLoadingInvoice } = useQuery({
    queryKey: ["invoiceId"],
    queryFn: () => getInvoiceWithId(invoiceData),
  });
  return { invoiceWithId, isLoadingInvoice };
}

export default useGetInvoiceWithId;
