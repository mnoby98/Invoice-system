import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInvoice as deleteInvoiceFromApi } from "../../servers/apiInvoice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function useDeleteInvoice() {
  const queryClient = useQueryClient();
  const deleteData = useSelector((state) => state.invoice.invoiceDelete);
  const { mutate: deleteInvoice, isLoading } = useMutation({
    mutationFn: () => deleteInvoiceFromApi(deleteData),
    onSuccess: () => {
      toast.success("success delete Invoice");
      queryClient.invalidateQueries({
        queryKey: ["invoiceList"],
      });
    },
    onError: () => {
      toast.error("error with deleteApi");
    },
  });
  return { deleteInvoice, isLoading };
}

export default useDeleteInvoice;
