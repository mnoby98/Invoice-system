import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import Logo from "../../ui/Logo";
import { useParams } from "react-router-dom";
import useGetInvoiceWithId from "../../Components/invoice/useGetInvoiceWithId";
import Spinner from "../../ui/Spinner";
import { payment } from "../../servers/apiPayment";

function Invoice() {
  const { invoiceId } = useParams();
  const { invoiceWithId, isLoadingInvoice } = useGetInvoiceWithId({
    invoiceId,
  });
  console.log(invoiceWithId);
  const title = invoiceWithId?.data?.title;
  const description = invoiceWithId?.data.description;
  const cost = invoiceWithId?.data.cost;
  const currency = invoiceWithId?.data.currency;
  const totals = invoiceWithId?.data.totals;
  const id = invoiceWithId?.data.id;
  console.log(isLoadingInvoice);

  async function handlePayment() {
    console.log("test");
    const paymentApi = await payment();
    // console.log(paymentApi);
  }

  return isLoadingInvoice ? (
    <Spinner />
  ) : (
    <div className="relative  h-screen   bg-[#1b3e5d]  ">
      <div className="  absolute right-[50%] top-[50%] mx-auto  my-auto   flex   w-full  max-w-2xl   translate-x-[50%] translate-y-[-50%] items-center justify-center rounded-lg bg-white px-10   py-8 shadow-2xl  ">
        <div className="mx-3  grid grid-rows-[auto_1fr_auto] gap-8 ">
          <div className=" my-2 flex  h-32  w-[500px]  max-w-4xl items-center justify-around border-b-2 border-black text-center">
            <Logo />
          </div>
          <div className="my-2 flex flex-col gap-10">
            <div className="grid grid-cols-2 gap-3">
              <p>Invoice number</p>
              <p>{id}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Title </p>
              <p>{title}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Price </p>
              <p>
                {cost} {currency}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p>description</p>
              <p>{description}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Details </p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <p>Mohamed</p>
                  <p>01234567891</p>
                  <p>Egypt</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex
          gap-2"
          >
            <Button onClick={handlePayment} design="active">
              Pay by paypal
            </Button>
            <Button design="active">Stripe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
