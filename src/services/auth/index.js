import API from "../../helpers/api";

const adminLogin = async (values) => {
  const res = await API.post("/api/admin/login",values);
  return res?.data;
};

export const AuthService = {
  adminLogin,
};
