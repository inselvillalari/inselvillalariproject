import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReservationService } from "../../services/reservation";

const getAllReservations = createAsyncThunk(
  "reservation/getAllReservations/getAllReservations",
  async () => {
    try {
      const res = await ReservationService.getAllReservations();
      return res?.data;
    } catch (error) {
      // handleError(error);
    }
  }
);

const deleteReservation = createAsyncThunk(
  "reservation/deleteReservation",
  async (id, { dispatch }) => {
    try {
      const res = await ReservationService.deleteReservation(id);
      return res?.data;
    } catch (error) {
      // handleError(error);
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
    }
  }
);

const getReservationById = createAsyncThunk(
  "reservation/getReservationById",
  async (id, { dispatch }) => {
    try {
      const res = await ReservationService.getReservationById(id);
      return res?.data;
    } catch (error) {
      handleError(error);
    }
  }
);

const getReservationByFilter = createAsyncThunk(
  "reservation/getReservationByFilter",
  async (values, { dispatch }) => {
    try {
      const res = await ReservationService.getReservationByFilter(values);
      return res?.data;
    } catch (error) {
      handleError(error);
    }
  }
);

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

export {
  getAllReservations,
  deleteReservation,
  createReservation,
  getReservationById,
  getReservationByFilter,
  getCalendarRanges,
  //   createReservation,
  //   deleteResarvation,
};
