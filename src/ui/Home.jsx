import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" mt-12 text-center font-semibold ">
      <section className="mx-3 my-2 px-4 py-2 ">
        <h2 className="font-serif text-[40px] text-emerald-600 ">
          Pay your bills online easily
        </h2>
        <p className=" mt-6 text-[30px] font-normal text-black ">
          Use Invoices to pay your bills online easily and securely
        </p>
      </section>
      <section className="mx-3 my-2 px-4 py-2 ">
        <h2 className="font-serif text-[30px] text-black">Site features</h2>
        <div className=" mb-3 text-[24px] font-normal text-black">
          <span>Pay your bills online easily and securely ,</span>
          <span> Access your bills from anywhere </span>
          <p>and Supports multiple payment methods</p>
        </div>
      </section>
      <Link
        to="/invoice"
        className=" rounded-full bg-[#04749B] px-3 py-1 font-medium text-white hover:bg-[#338dac] "
      >
        Get started
      </Link>
    </div>
  );
}

export default Home;
