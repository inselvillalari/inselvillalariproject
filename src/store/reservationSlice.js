// src/store/reservationSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  villa: "",
  entryDate: null,
  exitDate: null,
  heatedPool: false,
  wantsCrib: false,
  adults: 1,
  children: 0,
  hirerName: "",
  hirerIdNumber: "",
  phone: "",
  email: "",
  extraPersons: [],
  totalVillaPrice: 0,
  totalHeatedPoolPrice: 0,
  grandTotal: 0,
  totalNights: 0,
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setReservationData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetReservationData: () => initialState,
  },
});

export const { setReservationData, resetReservationData } =
  reservationSlice.actions;
export default reservationSlice.reducer;
