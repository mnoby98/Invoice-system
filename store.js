import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/Components/Login/loginSlice";
import invoiceReducer from "./src/Components/invoice/InvoiceSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    invoice: invoiceReducer,
  },
});

export default store;
