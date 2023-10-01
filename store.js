import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/Components/Login/loginSlice";
import invoiceReducer from "./src/Components/invoice/InvoiceSlice";
import currencyReducer from "./src/Components/currency/CurrenctSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    invoice: invoiceReducer,
    currency: currencyReducer,
  },
});

export default store;
