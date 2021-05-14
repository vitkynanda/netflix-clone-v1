import { createSlice } from "@reduxjs/toolkit";

export const subSlice = createSlice({
  name: "sub",
  initialState: {
    sub: "unsubscribe",
  },
  reducers: {
    subs: (state, action) => {
      state.sub = action.payload;
    },
    unsubs: (state) => {
      state.sub = "unsubscribe";
    },
  },
});

export const { subs, unsubs } = subSlice.actions;

export const selectSub = (state) => state.sub.sub;

export default subSlice.reducer;
