import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className=" grid    h-screen  grid-cols-[1fr]   sm:grid-cols-[200px_1fr]   ">
      <SideBar />
      <div className=" grid  grid-rows-[auto_1fr] overflow-y-scroll     ">
        <Header />
        <main className=" h-screen bg-[#f2f8fa]     ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
