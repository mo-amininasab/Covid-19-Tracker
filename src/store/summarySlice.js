import { createSlice } from "@reduxjs/toolkit";

const summaryDataSlice = createSlice({
  name: 'summaryData',
  initialState: {
    summaryData: {},
  },
  reducers: {
    setSummaryData(state, action) {
      state.summaryData = action.payload;
    },
  },
});

export const summaryDataActions = summaryDataSlice.actions;
export default summaryDataSlice;
