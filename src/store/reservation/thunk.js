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
  async (id) => {
    try {
      const res = await ReservationService.getReservationById(id);
      return res?.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export { getReservationById, getCalendarRanges };
