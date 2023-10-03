import { useMutation } from "@tanstack/react-query";
import { createInvoice as createInvoiceFromApi } from "../../servers/apiInvoice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function useCreateInvoice({ handleError }) {
  const invoiceCreated = useSelector((status) => status.invoice.invoice);
  const { mutate: createInvoice, isLoading: isCreating } = useMutation({
    mutationFn: () => createInvoiceFromApi(invoiceCreated),
    onSuccess: () => {
      toast.success("Invoice is Created");
    },
    onError: (errorFromApi) => {
      handleError(errorFromApi);
      toast.error("Error with CreateInvice Api");
    },
  });
  return { createInvoice, isCreating };
}

export default useCreateInvoice;
