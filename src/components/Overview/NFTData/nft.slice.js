import { createSelector, createSlice } from "@reduxjs/toolkit";

const nftslice = createSlice({
  name: "nftslice",
  initialState: {
    items: [],
    itemsPerPage: 10,
    currentPage: 1,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setByName: (state) => {
      state.items = [...state.items].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },
    setById: (state) => {
      state.items = [...state.items].sort((a, b) => a.token_id - b.token_id);
    },
  },
});
export const { setItems, setPage, setById, setByName } = nftslice.actions;
export default nftslice.reducer;

export const selectItems = (state) => state.nftSlice.items;
export const selectCurrentPage = (state) => state.nftSlice.currentPage;
export const selectItemsPerPage = (state) => state.nftSlice.itemsPerPage;

export const selectPaginatedItems = createSelector(
  [selectItems, selectCurrentPage, selectItemsPerPage],
  (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }
);
