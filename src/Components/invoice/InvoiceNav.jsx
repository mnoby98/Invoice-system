import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";

function InvoiceNav({ handleClick }) {
  const [row, setRow] = useState("");

  return (
    <div className=" flex items-center justify-between ">
      <div className="flex items-center justify-between gap-3 font-semibold transition-all duration-300">
        <button
          onClick={handleClick}
          className=" rounded-lg bg-[#7e3af2] px-3 py-1 font-semibold text-white transition-all  duration-300 visited:bg-[#7e3af2] visited:text-white hover:bg-[#7e3af2] hover:text-white focus:bg-[#7e3af2]  focus:text-white"
        >
          Active
        </button>
        <button className=" rounded-lg px-3 py-1 font-semibold transition-all duration-300 visited:bg-[#7e3af2] visited:text-white hover:bg-[#7e3af2] hover:text-white focus:bg-[#7e3af2]  focus:text-white">
          Archived
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 ">
        <p className="font-medium text-[#707275]">Rows per page</p>
        <select
          className="cursor-pointer rounded-md border-2  border-[#7e3af2] px-1   py-1"
          value={row}
          onChange={(e) => setRow(e.target.value)}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option className=" hover:bg-[#7e3af2]" key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <button className=" flex items-center  rounded-lg border-2 border-[#ecedee]  px-4 py-1  text-[#7e3af2] transition-all  duration-300 hover:bg-[#7e3af2] hover:text-white">
          <span>Filter</span> <FiFilter className=" hover:text-white" />
        </button>
        <Link
          to={"/create-invoice"}
          className=" rounded-lg border-2 border-[#ecedee] bg-[#7e3af2] px-4 py-1  text-white    "
        >
          + Create
        </Link>
      </div>
    </div>
  );
}

export default InvoiceNav;
