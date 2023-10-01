import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: [],
};
const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    addCurrency(state, action) {
      state.currency.push(action.payload);
    },
    editCurrency(state, action) {
      state.currency = state.currency.find(
        (item) => item.title === action.payload,
      );
    },
  },
});

export const { addCurrency, editCurrency } = currencySlice.actions;

export default currencySlice.reducer;
