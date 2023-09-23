import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/Components/Login/loginSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
