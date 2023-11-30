import AddNewInvoice from "./AddNewInvoice";
import useGetInvoiceList from "./useGetInvoiceList";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";
import { useState } from "react";

function TableData({ handleClick }) {
  const { invoiceList, error, isLoading } = useGetInvoiceList();
  const invoices = invoiceList?.data.invoices;
  const pagination = invoiceList?.data.pagination;
  const totalPages = pagination?.total;
  const per_page = pagination?.per_page;
  const current_page = pagination?.current_page;
  const last_page = pagination?.last_page;
  const [currentPage, setCurrentPage] = useState(1);
  const firstInvoiceInPage = (currentPage - 1) * totalPages;
  const lastInvoiceInPage = currentPage * totalPages;
  const invoicesToDisplay = invoices?.slice(
    firstInvoiceInPage,
    lastInvoiceInPage,
  );

  if (error) {
    toast.error(error);
  }
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function Pagination() {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
      <div className="mt-6 flex justify-center   ">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`mx-1 rounded px-3 py-1 ${
              pageNumber === currentPage
                ? "bg-[#7e3af2] text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="mr-2 mt-8 h-[800px] divide-[#dee2e6]    rounded-md border-2 border-solid border-[#ecedee] bg-white        text-lg  font-[400]  ">
        <div className="grid grid-cols-9  items-center justify-center justify-items-center border-b-2  bg-[#f9fafb] px-4 py-3  text-sm font-semibold    uppercase text-[#707275]">
          <p>Invoice </p>
          <p>ID </p>
          <p>Title </p>
          <p>Description </p>
          <button onClick={handleClick} className="flex items-center ">
            <p>Cost </p>
          </button>
          <button onClick={handleClick} className="flex items-center">
            <p> Status </p>
          </button>
          <p>Pending</p>
          <p>Transferred to</p>
        </div>
        {invoicesToDisplay?.map((invoice) => (
          <AddNewInvoice invoice={invoice} key={invoice.id} />
        ))}
        {!invoices && (
          <div className="flex items-center justify-center px-4 py-3 text-gray-400 ">
            No results Found
          </div>
        )}
      </div>
      <Pagination />
    </>
  );
}

export default TableData;
