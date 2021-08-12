import { configureStore } from "@reduxjs/toolkit";

import countriesSlice from "./countriesSlice";
import summaryDataSlice from "./summarySlice";

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    summaryData: summaryDataSlice.reducer,
  },
});

export default store;
