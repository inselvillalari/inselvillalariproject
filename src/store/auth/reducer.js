// src/store/reservationSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "./thunk";

const initialState = {
  loading: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setReservationData: (state, action) => {
    //   state.reservationData = action.payload;
    // },
    // resetReservationData: () => initialState,
    // resetReservationDetail: (state) => {
    //   state.reservationDetail = null;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(adminLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      console.log('action',action.payload)
      state.loading = false;
      const token = action?.payload?.data?.token;
      localStorage.setItem("adminToken", token);
      action?.payload?.router?.push("/admin/dashboard");
    });
    builder.addCase(adminLogin.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {} = auth.actions;
export default auth.reducer;
