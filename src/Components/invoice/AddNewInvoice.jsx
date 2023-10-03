import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import useDeleteInvoice from "./useDeleteInvoice";
import { deleteInvoice as deleteDataFromSLice } from "../invoice/InvoiceSlice";

function AddNewInvoice({ invoice }) {
  // const newInvoice = useSelector((state) => state.invoice.invoice);
  // const { cost, currency, description, title } = newInvoice;
  const userToken = useSelector((state) => state?.user?.user?.token);
  console.log("userToken form dashboard", userToken);
  const dispatch = useDispatch();
  const { deleteInvoice, isLoading } = useDeleteInvoice();
  function handleDelete() {
    deleteInvoice(invoice.id);
    const deleteData = { id: invoice.id, userToken: userToken };
    dispatch(deleteDataFromSLice(deleteData));
  }
  console.log("from console", invoice.id);

  return (
    <div>
      <div className="grid grid-cols-9 items-center border-b-2  px-4  py-3  text-[#000000]">
        <p>{invoice.invoice} </p>
        <p>{invoice.id}</p>
        <p>{invoice.title} </p>
        <p>{invoice.description} </p>
        <button className="flex items-center ">
          <span>{invoice.cost} </span>
        </button>
        <button className="flex items-center">
          <span> {invoice.status} </span>
        </button>
        <p>{invoice.pending}</p>
        <p>{invoice.transferredTo}</p>
        <button
          onClick={handleDelete}
          className="w-20  rounded-lg bg-[#04749c] font-semibold text-white hover:bg-cyan-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default AddNewInvoice;
