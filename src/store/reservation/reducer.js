// src/store/reservationSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { getAllReservations, getReservationById } from "./thunk";

const initialState = {
  loading: false,
  reservationData: {},
  allReservations: [],
  reservationDetail: null,
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
    resetReservationDetail: (state) => {
      state.reservationDetail = null;
    },
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
    builder.addCase(getReservationById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getReservationById.fulfilled, (state, action) => {
      state.loading = false;
      state.reservationDetail = action.payload;
    });
    builder.addCase(getReservationById.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {
  setReservationData,
  resetReservationData,
  resetReservationDetail,
} = reservation.actions;
export default reservation.reducer;
