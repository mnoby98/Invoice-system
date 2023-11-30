import { useDispatch, useSelector } from "react-redux";
import useDeleteInvoice from "./useDeleteInvoice";
import { deleteInvoice as deleteDataFromSLice } from "../invoice/InvoiceSlice";
import { useNavigate } from "react-router-dom";

import Spinner from "../../ui/Spinner";

function AddNewInvoice({ invoice }) {
  const userToken = useSelector((state) => state?.user?.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deleteInvoice, isLoading } = useDeleteInvoice();
  function handleDelete() {
    deleteInvoice(invoice.id);
    const deleteData = { id: invoice.id, userToken: userToken };
    dispatch(deleteDataFromSLice(deleteData));
  }

  function handleEdit(e) {
    e.preventDefault();
    navigate(`/edit-invoice/${invoice.id}`);
  }

  function goToInvoiceLink() {
    navigate(`/invoice/${invoice.id}`);
  }

  return (
    <div>
      <div className="grid grid-cols-9 items-center justify-items-center border-b-2   px-4  py-3  text-[#000000]">
        <p>{invoice.invoice} </p>
        <p>{invoice.id}</p>
        <p>{invoice.title} </p>
        <p>{invoice.description} </p>
        <p>{invoice.cost} </p>
        <p> {invoice.status} </p>
        <p>{invoice.pending}</p>
        <button
          onClick={goToInvoiceLink}
          className="w-16  rounded-lg bg-[#9053fa] font-semibold text-white hover:bg-[#7e3af2]"
        >
          invoice
        </button>
        <div className="flex gap-1">
          <button
            onClick={handleDelete}
            className="w-16  rounded-lg bg-[#9053fa] font-semibold text-white hover:bg-[#7e3af2]"
          >
            Delete
          </button>
          <button
            onClick={handleEdit}
            className="w-16  rounded-lg bg-[#9053fa] font-semibold text-white hover:bg-[#7e3af2]"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewInvoice;
