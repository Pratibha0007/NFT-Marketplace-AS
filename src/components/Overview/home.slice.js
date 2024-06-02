import { createSlice } from "@reduxjs/toolkit";

const homeslice = createSlice({
  name: "homeslice",
  initialState: {
    history: null,
  },
  reducers: {
    setHistory: (state, action) => {
      state.history = action.payload();
    },
  },
});
export default homeslice.reducers;
