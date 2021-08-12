import { configureStore } from "@reduxjs/toolkit";

import countriesSlice from "./countriesSlice";
import summaryDataSlice from "./summarySlice";
import historicalDataSlice from './historicalDataSlice'

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    summaryData: summaryDataSlice.reducer,
    historicalData: historicalDataSlice.reducer,
  },
});

export default store;
