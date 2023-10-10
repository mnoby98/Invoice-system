import { useMutation } from "@tanstack/react-query";
import { createInvoice as createInvoiceFromApi } from "../../servers/apiInvoice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function useCreateInvoice({ handleError }) {
  const navigate = useNavigate();
  const invoiceCreated = useSelector((status) => status.invoice.invoice);
  const { mutate: createInvoice, isLoading: isCreating } = useMutation({
    mutationFn: () => createInvoiceFromApi(invoiceCreated),
    onSuccess: (data) => {
      toast.success(data?.message);
      navigate("/dash-board");
    },
    onError: (errorFromApi) => {
      handleError(errorFromApi);
      toast.error("Error with CreateInvice Api");
    },
  });
  return { createInvoice, isCreating };
}

export default useCreateInvoice;
