import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Login from "./Pages/Login/Login";
import LoginForm from "./Components/Login/LoginForm";
import PageNotFound from "./ui/PageNotFound";
import AuthNewPassword from "./Components/Login/AuthNewPassword";
import AuthOtp from "./Components/Login/AuthOtp";
import Invoice from "./Pages/Invoice/Invoice";
import CreateInvoice from "./Pages/createInvoice/CreateInvoice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/create-invoice" element={<CreateInvoice />} />
        </Route>
        <Route element={<Login />}>
          <Route index element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/login/authotp" element={<AuthOtp />} />
          <Route path="/login/auth" element={<AuthNewPassword />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
