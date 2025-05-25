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

export { getAdminReservationDetail };
