import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    selectedCountry: "global",
  },
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
    },
    setSelectedCountry(state, action) {
      state.selectedCountry = action.payload;
    },
  },
});

export const countriesActions = countriesSlice.actions;
export default countriesSlice;
