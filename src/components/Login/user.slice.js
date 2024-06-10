import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "userslice",
  initialState: null,
  reducers: {
    setuser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return action.payload;
    },
  },
});
export const { setuser, removeUser } = userslice.actions;
export const selectUsername = (state) => state.userSlice?.displayName;
export default userslice.reducer;
