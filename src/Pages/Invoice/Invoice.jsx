import InvoiceForm from "../../Components/invoice/IvoiceForm";

function Invoice() {
  return (
    <div className="relative z-0   grid h-full  grid-cols-[1fr]   sm:grid-rows-[auto_1fr] ">
      {/* <Header /> */}
      {/* <SideBar /> */}
      <InvoiceForm />
    </div>
  );
}

export default Invoice;
