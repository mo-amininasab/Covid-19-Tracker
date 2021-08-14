import { createSlice } from "@reduxjs/toolkit";

const reactTooltipSlice = createSlice({
  name: "reactTooltip",
  initialState: {
    content: "",
  },
  reducers: {
    setContent(state, action) {
      state.content = action.payload;
    },
  },
});

export const reactTooltipActions = reactTooltipSlice.actions;
export default reactTooltipSlice;
