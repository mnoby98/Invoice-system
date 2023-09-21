import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="   grid h-screen grid-cols-[1fr] sm:grid-cols-[200px_1fr]   ">
      {/* <Header /> */}
      <SideBar />
      <div className=" grid  h-full grid-rows-[auto_1fr]  ">
        <Header />
        <main className=" h-full overflow-scroll bg-[#f2f8fa]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
