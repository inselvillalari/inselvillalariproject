// src/store/reservationSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { getAllReservations } from "./thunk";

const initialState = {
  loading: false,
  reservationData: {},
  allReservations: [],
};
``;
export const reservation = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setReservationData: (state, action) => {
      state.reservationData = action.payload;
    },
    resetReservationData: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllReservations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllReservations.fulfilled, (state, action) => {
      state.loading = false;
      state.allReservations = action.payload;
    });
    builder.addCase(getAllReservations.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setReservationData, resetReservationData } = reservation.actions;
export default reservation.reducer;
