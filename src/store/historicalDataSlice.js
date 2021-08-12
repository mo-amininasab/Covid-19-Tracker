import { createSlice } from "@reduxjs/toolkit";

const historicalDataSlice = createSlice({
  name: "historicalData",
  initialState: {
    global: [],
  },
  reducers: {
    setHistoricalGlobalData(state, action) {
      state.global = action.payload;
    },
  },
});

export const historicalDataActions = historicalDataSlice.actions;
export default historicalDataSlice;
