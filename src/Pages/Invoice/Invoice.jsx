import InvoiceNav from "../../Components/invoice/InvoiceNav";
import TableData from "../../Components/invoice/TableData";

function Invoice() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="relative z-0   grid h-full  grid-cols-[1fr]   sm:grid-rows-[auto_1fr] ">
      <div className="     mr-2  px-12  pt-8  ">
        <InvoiceNav handleClick={handleClick} />
        <TableData handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Invoice;
