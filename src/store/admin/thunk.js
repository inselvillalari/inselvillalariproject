import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AdminService } from "../../services/admin";

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

const createAdminReservation = createAsyncThunk(
  "admin/createAdminReservation",
  async (values, { dispatch }) => {
    try {
      const res = await AdminService.createAdminReservation(values);
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

const getReservationByFilter = createAsyncThunk(
  "admin/getReservationByFilter",
  async (values, { dispatch }) => {
    try {
      const res = await AdminService.getReservationByFilter(values);
      return res?.data;
    } catch (error) {
      // handleError(error);
    }
  }
);

export {
  getAdminReservationDetail,
  updateReservation,
  createAdminReservation,
  refundReservation,
  getReservationByFilter,
};
