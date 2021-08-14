import { configureStore } from "@reduxjs/toolkit";

import countriesSlice from "./countriesSlice";
import summaryDataSlice from "./summarySlice";
import historicalDataSlice from "./historicalDataSlice";
import reactTooltipActions from "./reactTooltipSlice";

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    summaryData: summaryDataSlice.reducer,
    historicalData: historicalDataSlice.reducer,
    reactTooltip: reactTooltipActions.reducer,
  },
});

export default store;
