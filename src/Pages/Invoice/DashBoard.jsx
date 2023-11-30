import InvoiceNav from "../../Components/invoice/InvoiceNav";
import TableData from "../../Components/invoice/TableData";

function Dashboard() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="   grid grid-cols-[1fr]  bg-[#f9fafb]  pb-8  sm:grid-rows-[auto_1fr] ">
      <div className="   mr-2 px-12      pt-8  ">
        <InvoiceNav handleClick={handleClick} />
        <TableData handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Dashboard;
