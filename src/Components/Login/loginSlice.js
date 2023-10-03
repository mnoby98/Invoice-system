import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  token: "",
  userForgetPassword: {},
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
    },
    getToken(state, action) {
      state.token = action.payload;
    },
    userForgetPassword(state, action) {
      state.userForgetPassword = action.payload;
    },
  },
});

export const { loginUser, getToken, userForgetPassword } = loginSlice.actions;

export default loginSlice.reducer;
