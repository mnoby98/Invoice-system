function TableData({ handleClick }) {
  return (
    <div className="mt-8 h-full divide-y-2 divide-[#dee2e6] rounded-md border-2 border-solid border-[#e0e5e7] bg-white py-3      text-lg  font-[400]  ">
      <div className="flex items-center justify-around  px-4 py-3 text-[#04749c]">
        <p>Invoice </p>
        <p>ID </p>
        <p>Title </p>
        <p>Description </p>
        <button onClick={handleClick} className="flex items-center ">
          <span>Cost </span>
        </button>
        <button onClick={handleClick} className="flex items-center">
          <span> Status </span>
        </button>
        <p>Pending</p>
        <p>Transferred to</p>
      </div>
      <div className="flex items-center justify-center px-4 py-3 text-gray-400 ">
        No results Found
      </div>
    </div>
  );
}

export default TableData;
