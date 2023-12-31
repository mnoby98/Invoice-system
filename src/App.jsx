import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Login from "./Pages/Login/Login";
import PageNotFound from "./ui/PageNotFound";
import CreateInvoice from "./Pages/Invoice/CreateInvoice";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProtectRoute from "./ui/ProtectRoute";
import Profile from "./Pages/user/Profile";
import LoginForm from "./Pages/Login/LoginForm";
import AuthNewPassword from "./Pages/Login/AuthNewPassword";
import AuthOtp from "./Pages/Login/AuthOtp";
import OtpNumber from "./Pages/Login/OtpNumber";
import Dashboard from "./Pages/Invoice/DashBoard";
import Invoice from "./Pages/Invoice/Invoice";
import CreateCurrency from "./Pages/currency/CreateCurrency";
import CurrenciesTable from "./Pages/currency/CurrenciesTable";
import EditCurrency from "./Pages/currency/EditCurrency";
import EditInvoice from "./Pages/Invoice/EditInvoice";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectRoute>
                  <AppLayout />
                </ProtectRoute>
              }
            >
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dash-board" element={<Dashboard />} />
              <Route path="/create-invoice" element={<CreateInvoice />} />
              <Route
                path="/edit-invoice/:invoiceId"
                element={<EditInvoice />}
                // loader={InvoiceDetailsLoader}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/currency" element={<CurrenciesTable />} />
              <Route path="/create-currency" element={<CreateCurrency />} />
              <Route
                path="/edit-currency/:currencyID"
                element={<EditCurrency />}
              />
              {/* <Route path="/edit-currency" element={<EditCurrency />} /> */}
            </Route>
            <Route element={<Login />}>
              <Route index element={<Navigate replace to="/login" />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/login/authotp" element={<AuthOtp />} />
              <Route path="/login/addotp" element={<OtpNumber />} />
              <Route path="/login/auth" element={<AuthNewPassword />} />
            </Route>
            <Route path="/invoice/:invoiceId" element={<Invoice />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "black",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
