import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function AppLayout() {
  return (
    <div className="   grid h-screen grid-rows-[auto_1fr_auto]  ">
      <Header />
      <div className=" overflow-y-scroll  ">
        <main className=" mx-auto    max-w-4xl ">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
