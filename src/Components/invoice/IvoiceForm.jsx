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
    <div className=" bg-white         px-12  pt-8 ">
      <div className="  flex items-center justify-between">
        <div className="flex items-center justify-between gap-3 transition-all duration-300">
          <button
            onClick={handleClick}
            className=" rounded-lg bg-cyan-600 px-3 py-1 font-semibold text-white transition-all  duration-300 visited:bg-cyan-600 visited:text-white hover:bg-cyan-600 hover:text-white focus:bg-cyan-600  focus:text-white"
          >
            Active
          </button>
          <button className=" rounded-lg px-3 py-1 font-semibold transition-all duration-300 visited:bg-cyan-600 visited:text-white hover:bg-cyan-600 hover:text-white focus:bg-cyan-600  focus:text-white">
            Archived
          </button>
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-cyan-700">Rows per page</p>
          <select
            className="cursor-pointer rounded-md border-2  border-cyan-600 px-1   py-1"
            value={row}
            onChange={(e) => setRow(e.target.value)}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num}>{num}</option>
            ))}
          </select>

          <button className=" flex  items-center rounded-lg border-2  border-cyan-600 px-4  py-1 transition-all  duration-300 hover:bg-cyan-600 hover:text-white">
            <span>Filter</span> <FiFilter />
          </button>
          <button className=" rounded-lg border-2 border-cyan-600 bg-cyan-600 px-4 py-1  text-white    ">
            + Create
          </button>
        </div>
      </div>
      <div className="mt-8 h-full divide-y rounded-md border-2  border-solid  py-3">
        <div className="flex items-center justify-around px-4 py-3 text-cyan-600">
          <p>ID</p>
          <p>Client type</p>
          <button onClick={handleClick} className="flex items-center">
            <span> Reported by </span> <HiOutlineArrowsUpDown />
          </button>
          <button onClick={handleClick} className="flex items-center">
            <span> Reported to </span> <HiOutlineArrowsUpDown />
          </button>
          <p>Logged by</p>
          <p>Transferred to</p>
          <button onClick={handleClick} className="flex items-center">
            <span> Date & Time </span> <HiOutlineArrowsUpDown />
          </button>
          <button onClick={handleClick} className="flex items-center">
            <span>Created at </span> <HiMiniArrowSmallDown />
          </button>
          <p>Actions</p>
        </div>
        <div className="flex items-center justify-center px-4 py-3 text-gray-400 ">
          No results Found
        </div>
      </div>
    </div>
  );
}

export default IvoiceForm;
