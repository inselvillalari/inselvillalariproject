import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReservationService } from "../../services/reservation";

const getCalendarRanges = createAsyncThunk(
  "reservation/getCalendarRanges",
  async (villa) => {
    try {
      const res = await ReservationService.getCalendarRanges(villa);
      return { villa, ranges: res.data };
    } catch (error) {
      handleError(error);
    }
  }
);

const getReservationById = createAsyncThunk(
  "reservation/getReservationById",
  async (values) => {
    try {
      const res = await ReservationService.getReservationById(values);
      return res?.data;
    } catch (error) {
      handleError(error);
    }
  }
);

const createReservation = createAsyncThunk(
  "reservation/createReservation",
  async (values, { dispatch }) => {
    try {
      const res = await ReservationService.createReservation(values);
      return res?.data;
    } catch (error) {
      // handleError(error);
      handleError(error);
    }
  }
);

export { getReservationById, getCalendarRanges, createReservation };
