import API from "../../helpers/api";

const getAdminReservationDetail = async (id) => {
  const token = localStorage.getItem("adminToken");
  const res = await API.get(`/api/admin/reservations/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res?.data;
};

export const AdminService = {
  getAdminReservationDetail,
};
