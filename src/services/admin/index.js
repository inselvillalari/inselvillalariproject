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

const updateReservation = async (values) => {
  const token = localStorage.getItem("adminToken");
  const res = await API.put(`/api/admin/reservations/update`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res?.data;
};

const createReservation = async (data) => {
  const token = localStorage.getItem("adminToken");
  const res = await API.post(`/api/admin/reservations`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res?.data;
};

export const AdminService = {
  getAdminReservationDetail,
  updateReservation,
  createReservation,
};
