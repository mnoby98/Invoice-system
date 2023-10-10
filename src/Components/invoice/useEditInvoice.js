import { useMutation } from "@tanstack/react-query";
import { editInvoice as editInvoiceFromApi } from "../../servers/apiInvoice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function useEditInvoice({ handleError, dataFromApiOneInvoice, newUpdateData }) {
  const navigate = useNavigate();
  // const editInvoiceData = useSelector((state) => state?.invoice?.invoice);
  const userToken = useSelector((state) => state.user?.user?.token);
  console.log("editInvoiceData", dataFromApiOneInvoice);
  const editDataWithToken = { ...newUpdateData, userToken };
  console.log("editInvoiceDataddddddd", editDataWithToken);
  const { mutate: editInvoice, isLoading: isEditing } = useMutation({
    mutationFn: () => editInvoiceFromApi(editDataWithToken),
    onSuccess: (data) => {
      navigate("/dash-board");
      toast.success(data.message);
    },
    onError: (errorFormAPi) => {
      toast.error("Error with Api");
      handleError(errorFormAPi);
    },
  });
  return { editInvoice, isEditing };
}

export default useEditInvoice;
