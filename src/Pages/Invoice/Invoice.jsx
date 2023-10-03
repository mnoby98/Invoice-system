import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import Logo from "../../ui/Logo";

function Invoice() {
  return (
    <div className="relative  h-screen   bg-[#1b3e5d]  ">
      <div className="  absolute right-[50%] top-[50%] mx-auto  my-auto   flex   w-full  max-w-2xl   translate-x-[50%] translate-y-[-50%] items-center justify-center rounded-lg bg-white px-10   py-8 shadow-2xl  ">
        <div className="mx-3  grid grid-rows-[auto_1fr_auto] gap-8 ">
          <div className=" w-98 my-2  flex  h-32  items-center justify-around border-b-2 border-black text-center">
            <Logo />
          </div>
          <div className="my-2 flex flex-col gap-10">
            <div className="grid grid-cols-2">
              <p>Invoice number </p>
              <p>1</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Title </p>
              <p>Adidas Shoes</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Price </p>
              <p>112 USD</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Details </p>
              <div className="flex flex-col gap-2">
                <p>Adidas Shoes blue color size 42</p>
                <p>client data</p>
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
            <Button design="active">Pay by paypal</Button>
            <Button design="active">Stripe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
