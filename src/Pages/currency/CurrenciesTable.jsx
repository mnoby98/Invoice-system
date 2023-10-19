import { useEffect, useState } from "react";
import AddCurrency from "../../Components/currency/AddCurrency";
import CurrencyNav from "../../Components/currency/CurrencyNav";
import { useDispatch, useSelector } from "react-redux";
import useCurrency from "../../Components/currency/useCurrency";
import { BeatLoader } from "react-spinners";
import { array } from "yup";
import { addCurrenciesList } from "../../Components/currency/CurrenctSlice";

function CurrenciesTable() {
  const [edit, setEdit] = useState();
  const [noData, setNoData] = useState(true);

  const { currencies, isLoading, error } = useCurrency();

  const currenciesToTable = currencies?.data?.currencies;
  const currenciesPagination = currencies?.data?.pagination;
  console.log("currenciesPagination", currenciesPagination?.current_page);

  const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5;
  const itemsPerPage = currenciesPagination?.per_page;
  // const totalPages = Math.ceil(currenciesToTable?.length / itemsPerPage);
  const totalPages = currenciesPagination?.total;
  // const startIndex = (currentPage - 1) * itemsPerPage;
  const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = currentPage * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currenciesToDisplay = currenciesToTable?.slice(startIndex, endIndex);

  function Pagination() {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
      <div className="mt-6 flex  justify-center">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`mx-1 rounded px-3 py-1 ${
              pageNumber === currentPage
                ? "bg-blue-500 text-white"
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

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="relative z-0 grid  h-full grid-cols-[1fr]     sm:grid-rows-[auto_1fr] ">
        <div className="  mb-5 mr-2 bg-[#f2f8fa]  px-12  pb-10  pt-8  ">
          <CurrencyNav setEdit={setEdit} />
          <div className="mt-8  h-[800px] divide-y-2 divide-[#dee2e6] rounded-md border-2 border-solid border-[#e0e5e7] bg-white       text-lg  font-[400]  ">
            <div className="grid grid-cols-[1fr_1fr_1fr] justify-items-center   px-4 py-3  text-[#04749c]">
              <p>Title </p>
              <p>Symbol </p>
            </div>
            {currenciesToDisplay.map((currency) => (
              <AddCurrency
                key={currency.title}
                currency={currency}
                setNoData={setNoData}
              />
            ))}

            {!currencies && (
              <div className="flex  justify-center px-4 py-3 text-gray-400 ">
                No results Found
              </div>
            )}
          </div>
          <Pagination />
          <div></div>
        </div>
      </div>
    </>
  );
}

function Spinner() {
  return (
    <div className="flex h-[100vh] items-center  justify-center bg-slate-50 ">
      <BeatLoader color="#056ba6 " size={50} />
    </div>
  );
}
export default CurrenciesTable;
