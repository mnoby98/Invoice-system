import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addInvoice(state, action) {
      state.invoice = action.payload;
    },
  },
});

export const { addInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
