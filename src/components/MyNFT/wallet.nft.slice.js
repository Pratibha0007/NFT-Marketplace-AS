import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const walletslice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addNFTtoWallet: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addNFTtoWallet } = walletslice.actions;
export default walletslice.reducer;
