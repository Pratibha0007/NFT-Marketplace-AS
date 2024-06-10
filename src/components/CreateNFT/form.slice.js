import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nftName: "",
  nftType: "",
  address: "",
  country: "",
  city: "",
  pinCode: "",
  nftDescription: "",
  totalPropertyValue: "",
  investment: "",
  totalInvestment: "",
  minInvestmentValue: "",
  expectedROI: "",
  investmentStage: "",
  legalEntity: "",
  entityType: "",
  jurisdiction: "",
  taxID: "",
  taxJurisdiction: "",
  taxRate: "",
  participantName: "",
  participantRole: "",
  participantContact: "",
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData(state, action) {
      return { ...state, ...action.payload };
    },
    resetFormData() {
      return initialState;
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;

export default formSlice.reducer;
