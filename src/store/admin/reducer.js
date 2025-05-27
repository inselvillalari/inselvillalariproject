// src/store/reservationSlice.js

import { createSlice } from "@reduxjs/toolkit";
import {
  getAdminReservationDetail,
  updateReservation,
  createAdminReservation,
  refundReservation,
  getReservationByFilter,
} from "./thunk";

const initialState = {
  loading: false,
  adminReservationDetail: null,
  filteredReservations: [],
};

export const admin = createSlice({
  name: "admin",
  initialState,
  reducers: {
    // setReservationData: (state, action) => {
    //   state.reservationData = action.payload;
    // },
    // resetReservationData: () => initialState,
    resetAdminReservationDetail: (state) => {
      state.adminReservationDetail = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getReservationByFilter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getReservationByFilter.fulfilled, (state, action) => {
      state.loading = false;
      state.filteredReservations = action.payload;
    });
    builder.addCase(getReservationByFilter.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getAdminReservationDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAdminReservationDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.adminReservationDetail = action.payload;
    });
    builder.addCase(getAdminReservationDetail.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(updateReservation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateReservation.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateReservation.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(createAdminReservation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createAdminReservation.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(createAdminReservation.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(refundReservation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(refundReservation.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(refundReservation.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { resetAdminReservationDetail } = admin.actions;
export default admin.reducer;
