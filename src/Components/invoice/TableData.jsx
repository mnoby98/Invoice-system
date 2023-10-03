import { useSelector } from "react-redux";
import AddNewInvoice from "./AddNewInvoice";
import useGetInvoiceList from "./useGetInvoiceList";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";

function TableData({ handleClick }) {
  const { invoiceList, error, isLoading } = useGetInvoiceList();
  const invoices = invoiceList?.data.invoices;
  // const userToken = useSelector((state) => state?.user?.user?.token);
  // console.log("userToken form dashboard", userToken);
  if (error) {
    toast.error(error);
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="mr-2 mt-8 h-full divide-[#dee2e6] rounded-md border-2 border-solid border-[#e0e5e7] bg-white py-3      text-lg  font-[400]  ">
      <div className="grid grid-cols-9 border-b-2   px-4 py-3 text-[#04749c]">
        <p>Invoice </p>
        <p>ID </p>
        <p>Title </p>
        <p>Description </p>
        <button onClick={handleClick} className="flex items-center ">
          <span>Cost </span>
        </button>
        <button onClick={handleClick} className="flex items-center">
          <span> Status </span>
        </button>
        <p>Pending</p>
        <p>Transferred to</p>
      </div>
      {invoices?.map((invoice) => (
        <AddNewInvoice invoice={invoice} key={invoice.id} />
      ))}
      {/* <AddNewInvoice /> */}
      {invoices?.success !== true && (
        <div className="flex items-center justify-center px-4 py-3 text-gray-400 ">
          No results Found
        </div>
      )}
    </div>
  );
}

export default TableData;
