import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: [],
  invoiceDelete: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addInvoice(state, action) {
      state.invoice = action.payload;
    },
    deleteInvoice(state, action) {
      state.invoiceDelete = action.payload;
      // state.invoice = state.invoice.filter(
      //   (item) => action.payload !== item.id,
      // );
    },
    editInvoice(state, action) {
      const editInvoice = state.invoice.find(
        (item) => action.payload === item.id,
      );
    },
  },
});

export const { addInvoice, deleteInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
