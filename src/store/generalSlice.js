// src/store/reservationSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = generalSlice.actions;
export default generalSlice.reducer;
