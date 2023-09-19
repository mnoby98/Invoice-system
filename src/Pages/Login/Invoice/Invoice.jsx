function Invoice() {
  return (
    <div className="relative z-0 grid h-[100%] grid-cols-[1fr]   bg-emerald-600 sm:grid-cols-[300px_1fr] ">
      <div className="mt-10 hidden h-[100%]  text-center sm:block ">
        <ul className="h-full  bg-emerald-600 text-[25px] font-medium text-white">
          <li className="px-2 py-3  transition-all hover:bg-white hover:text-emerald-500 ">
            Dash Board
          </li>
          <li className="px-2 py-3 transition-all hover:border-none hover:bg-white hover:text-emerald-500 ">
            Woliet
          </li>
          <li className="px-2 py-3 transition-all  hover:bg-white hover:text-emerald-500">
            Services
          </li>
          <li className="px-2 py-3 transition-all  hover:bg-white hover:text-emerald-500">
            Clients
          </li>
        </ul>
      </div>
      <div className=" absolute  left-[300px]  z-10 h-full  w-full  rounded-3xl  bg-white  px-12 ">
        main content
      </div>
    </div>
  );
}

export default Invoice;
