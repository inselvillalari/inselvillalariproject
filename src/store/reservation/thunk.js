import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReservationService } from "../../services/reservation";
import errorHandler from "../../helpers/api/errorHandler";
import { toast } from "react-toastify";

const getCalendarRanges = createAsyncThunk(
  "reservation/getCalendarRanges",
  async (villa) => {
    try {
      const res = await ReservationService.getCalendarRanges(villa);
      return { villa, ranges: res.data };
    } catch (error) {
      errorHandler(error);
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
      errorHandler(error);
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
      errorHandler(error);
    }
  }
);

export { getReservationById, getCalendarRanges, createReservation };
