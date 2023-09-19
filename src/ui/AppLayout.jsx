import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function AppLayout() {
  return (
    <div className="   grid h-screen grid-rows-[auto_1fr_auto]   ">
      <Header />
      <div className="  overflow-auto ">
        <main className="h-full">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
