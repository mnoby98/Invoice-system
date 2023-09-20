import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "../Components/invoice/SideBar";

function AppLayout() {
  return (
    <div className="   grid h-screen grid-cols-[200px_1fr]    ">
      {/* <Header /> */}
      <SideBar />
      <div className=" grid  h-full grid-rows-[auto_1fr] overflow-scroll ">
        <Header />
        <main className=" h-full bg-[#f2f8fa]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
