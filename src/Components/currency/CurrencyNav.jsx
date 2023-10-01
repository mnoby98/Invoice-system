import { Link } from "react-router-dom";

function CurrencyNav() {
  return (
    <div className=" flex items-center justify-between ">
      <div className="flex items-center justify-between gap-3 font-semibold transition-all duration-300">
        <button className=" rounded-lg bg-[#04749c] px-3 py-1 font-semibold text-white transition-all  duration-300 visited:bg-[#04749c] visited:text-white hover:bg-[#04749c] hover:text-white focus:bg-[#04749c]  focus:text-white">
          Active
        </button>
        <button className=" rounded-lg px-3 py-1 font-semibold transition-all duration-300 visited:bg-[#04749c] visited:text-white hover:bg-[#04749c] hover:text-white focus:bg-[#04749c]  focus:text-white">
          Archived
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 ">
        <Link
          to={"/create-currency"}
          className=" rounded-lg border-2 border-[#04749B] bg-[#04749B] px-4 py-1  text-white    "
        >
          + Create
        </Link>
      </div>
    </div>
  );
}

export default CurrencyNav;
