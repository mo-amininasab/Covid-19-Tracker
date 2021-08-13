import { createSlice } from "@reduxjs/toolkit";

const historicalDataSlice = createSlice({
  name: "historicalData",
  initialState: {
    global: [],
    country: [],
    data: [],
  },
  reducers: {
    setHistoricalGlobalData(state, action) {
      state.global = action.payload;
    },
    setHistoricalData(state, action) {
      state.data = action.payload;
    },
  },
});

export const historicalDataActions = historicalDataSlice.actions;
export default historicalDataSlice;
