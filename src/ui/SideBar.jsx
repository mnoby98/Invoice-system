import Logo from "./Logo";

function SideBar() {
  return (
    <div className="  hidden h-[100%] bg-[#04749B]  text-center  sm:flex sm:flex-col  sm:justify-center sm:gap-4 sm:align-middle">
      <Logo />
      <ul className="h-full   text-[20px] font-medium text-white">
        <li className="px-2 py-3  transition-all duration-300 hover:bg-[#f2f8fa] hover:text-[#04749B] ">
          Dash Board
        </li>
        <li className="px-2 py-3 transition-all duration-300 hover:border-none hover:bg-[#f2f8fa] hover:text-[#04749B] ">
          Woliet
        </li>
        <li className="px-2 py-3 transition-all duration-300  hover:bg-[#f2f8fa] hover:text-[#04749B]">
          Services
        </li>
        <li className="px-2 py-3 transition-all duration-300   hover:bg-[#f2f8fa] hover:text-[#04749B]">
          Clients
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
