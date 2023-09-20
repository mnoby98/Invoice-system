import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "../Components/invoice/SideBar";

function AppLayout() {
  return (
    <div className="   grid h-screen grid-cols-[300px_1fr]    ">
      {/* <Header /> */}
      <SideBar />
      <div className="  grid grid-rows-[auto_1fr] overflow-scroll ">
        <Header />
        <main className="h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
