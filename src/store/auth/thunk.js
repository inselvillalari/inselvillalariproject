import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../services/auth";

const adminLogin = createAsyncThunk("auth/adminLogin", async (values) => {
  try {
    const res = await AuthService.adminLogin({
      username: values.username,
      password: values.password,
    });
    return { data: res, router: values.router };
  } catch (error) {
    // handleError(error);
  }
});

export { adminLogin };
