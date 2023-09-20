import Logo from "../../ui/Logo";

function SideBar() {
  return (
    <div className="  hidden h-[100%] bg-emerald-600  text-center  sm:flex sm:flex-col  sm:justify-center sm:gap-4 sm:align-middle">
      <Logo />
      <ul className="h-full   text-[25px] font-medium text-white">
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
  );
}

export default SideBar;
