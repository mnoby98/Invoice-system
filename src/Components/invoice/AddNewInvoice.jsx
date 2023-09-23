import { useSelector } from "react-redux";

function AddNewInvoice() {
  const newInvoice = useSelector((state) => state.invoice.invoice);
  const { cost, currency, description, title } = newInvoice;

  return (
    <div>
      <div className="grid grid-cols-8 items-center  px-4  py-3  text-[#000000]">
        <p>Invoice </p>
        <p>IDsssssss wwwwwwwwwwwwwwwwwww</p>
        <p>{title} </p>
        <p>{description} </p>
        <button className="flex items-center ">
          <span>{cost} </span>
        </button>
        <button className="flex items-center">
          <span> Status </span>
        </button>
        <p>Pending</p>
        <p>Transferred to</p>
      </div>
    </div>
  );
}

export default AddNewInvoice;
