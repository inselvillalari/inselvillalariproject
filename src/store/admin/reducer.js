// src/store/reservationSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { getAdminReservationDetail, updateReservation } from "./thunk";

const initialState = {
  loading: false,
  adminReservationDetail: null,
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
  },
});

export const { resetAdminReservationDetail } = admin.actions;
export default admin.reducer;
