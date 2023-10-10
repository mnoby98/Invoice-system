import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: [],
  currencyOptions: [],
};
const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    addCurrency(state, action) {
      state.currency = action.payload;
    },
    editCurrency(state, action) {
      state.currency = state.currency.find(
        (item) => item.title === action.payload,
      );
    },
    addCurrenciesList(state, action) {
      state.currencyOptions = action.payload;
    },
  },
});

export const { addCurrency, editCurrency, addCurrenciesList } =
  currencySlice.actions;

export default currencySlice.reducer;
