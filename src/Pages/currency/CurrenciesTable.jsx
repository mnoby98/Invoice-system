import { useState } from "react";
import AddCurrency from "../../Components/currency/AddCurrency";
import CurrencyNav from "../../Components/currency/CurrencyNav";
import { useSelector } from "react-redux";

function CurrenciesTable() {
  const [edit, setEdit] = useState();
  const [noData, setNoData] = useState(true);
  const Currencies = useSelector((state) => state.currency.currency);
  const CurrenciesLength = Currencies.length;
  console.log(
    "sss",
    Currencies.map((test) => console.log("test", Currencies)),
  );
  return (
    <>
      <div className="relative z-0   grid h-full  grid-cols-[1fr]   sm:grid-rows-[auto_1fr] ">
        <div className="     mr-2  px-12  pt-8  ">
          <CurrencyNav setEdit={setEdit} />
          <div className="mt-8 h-full divide-y-2 divide-[#dee2e6] rounded-md border-2 border-solid border-[#e0e5e7] bg-white py-3      text-lg  font-[400]  ">
            <div className="grid grid-cols-[1fr_1fr_1fr] justify-items-center   px-4 py-3  text-[#04749c]">
              <p>Title </p>
              <p>Symbol </p>
            </div>
            {Currencies.map((currency) => (
              <AddCurrency
                key={currency.title}
                currency={currency}
                setNoData={setNoData}
                CurrenciesLength={CurrenciesLength}
              />
            ))}
            {noData && (
              <div className="flex  justify-center px-4 py-3 text-gray-400 ">
                No results Found
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrenciesTable;
