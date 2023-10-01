import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addInvoice(state, action) {
      state.invoice.push(action.payload);
    },
    deleteInvoice(state, action) {
      state.invoice = state.invoice.filter(
        (item) => action.payload !== item.id,
      );
    },
    editInvoice(state, action) {
      const editInvoice = state.invoice.find(
        (item) => action.payload === item.id,
      );
    },
  },
});

export const { addInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
