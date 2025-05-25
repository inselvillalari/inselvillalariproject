import { createAsyncThunk } from "@reduxjs/toolkit";
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
export const updateReservation = createAsyncThunk(
  "admin/updateReservation",
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await AdminService.updateReservation(id, data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const createReservation = createAsyncThunk(
  "admin/createReservation",
  async (data, thunkAPI) => {
    try {
      const res = await AdminService.createReservation(data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export { getAdminReservationDetail };
