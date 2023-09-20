import { useState } from "react";
import Button from "../../ui/Button";
import { HiOutlineArrowsUpDown, HiMiniArrowSmallDown } from "react-icons/hi2";
import { FiFilter } from "react-icons/fi";
function IvoiceForm() {
  const [row, setRow] = useState(null);
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="     px-12  pt-8   ">
      <div className=" flex items-center justify-between ">
        <div className="flex items-center justify-between gap-3 font-semibold transition-all duration-300">
          <button
            onClick={handleClick}
            className=" rounded-lg bg-[#04749c] px-3 py-1 font-semibold text-white transition-all  duration-300 visited:bg-[#04749c] visited:text-white hover:bg-[#04749c] hover:text-white focus:bg-[#04749c]  focus:text-white"
          >
            Active
          </button>
          <button className=" rounded-lg px-3 py-1 font-semibold transition-all duration-300 visited:bg-[#04749c] visited:text-white hover:bg-[#04749c] hover:text-white focus:bg-[#04749c]  focus:text-white">
            Archived
          </button>
        </div>
        <div className="flex items-center justify-between gap-3 ">
          <p className="font-medium text-[#0c779e]">Rows per page</p>
          <select
            className="cursor-pointer rounded-md border-2  border-[#328bac] px-1   py-1"
            value={row}
            onChange={(e) => setRow(e.target.value)}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num}>{num}</option>
            ))}
          </select>

          <button className=" flex items-center  rounded-lg border-2 border-[#04749B]  px-4 py-1  text-[#04749B] transition-all  duration-300 hover:bg-[#04749B] hover:text-white">
            <span>Filter</span> <FiFilter className=" hover:text-white" />
          </button>
          <button className=" rounded-lg border-2 border-[#04749B] bg-[#04749B] px-4 py-1  text-white    ">
            + Create
          </button>
        </div>
      </div>
      {/* border */}
      <div className="mt-8 h-full divide-y-2 divide-[#dee2e6] rounded-md border-2 border-solid border-[#e0e5e7] bg-white py-3      text-lg  font-[400]  ">
        <div className="flex items-center justify-around  px-4 py-3 text-[#04749c]">
          <p>Invoice </p>
          <p>ID </p>
          <p>Title </p>
          <p>Description </p>
          <button onClick={handleClick} className="flex items-center ">
            <span>Cost </span>{" "}
          </button>
          <button onClick={handleClick} className="flex items-center">
            <span> Status </span>
          </button>
          <p>Pending</p>
          <p>Transferred to</p>
          {/* <button onClick={handleClick} className="flex items-center">
            <span> Date & Time </span> <HiOutlineArrowsUpDown />
          </button>
          <button onClick={handleClick} className="flex items-center">
            <span>Created at </span> <HiMiniArrowSmallDown />
          </button>
          <p>Actions</p> */}
        </div>
        <div className="flex items-center justify-center px-4 py-3 text-gray-400 ">
          No results Found
        </div>
      </div>
    </div>
  );
}

export default IvoiceForm;
