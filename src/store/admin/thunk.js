import { createAsyncThunk } from "@reduxjs/toolkit";
import { AdminService } from "../../services/admin";
import { getReservationByFilter } from "../reservation/thunk";
import { toast } from "react-toastify";

const getAdminReservationDetail = createAsyncThunk(
  "admin/getAdminReservationDetail",
  async (id) => {
    try {
      const res = await AdminService.getAdminReservationDetail(id);
      return res?.data;
    } catch (error) {
      // handleError(error);
    }
  }
);
const updateReservation = createAsyncThunk(
  "admin/updateReservation",
  async (values, { dispatch }) => {
    try {
      const res = await AdminService.updateReservation(values);
      dispatch(getReservationByFilter({}));
      toast.success(res?.message);
      return res;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error?.response?.data || error.message);
    }
  }
);

const createReservation = createAsyncThunk(
  "admin/createReservation",
  async (values, { dispatch }) => {
    try {
      const res = await AdminService.createReservation(values);
      dispatch(getReservationByFilter({}));
      toast.success(res?.message);
      return res;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error?.response?.data || error.message);
    }
  }
);

const refundReservation = createAsyncThunk(
  "admin/refundReservation",
  async (values, { dispatch }) => {
    try {
      const res = await AdminService.refundReservation(
        values?.conversationId,
        values?.refundAmount
      );
      dispatch(getReservationByFilter({}));
      toast.success(res?.message);
      return res;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export {
  getAdminReservationDetail,
  updateReservation,
  createReservation,
  refundReservation,
};
