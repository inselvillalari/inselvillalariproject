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

const createReservation = async (values) => {
  const token = localStorage.getItem("adminToken");
  const res = await API.post(`/api/admin/reservations/create`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res?.data;
};

const refundReservation = async (conversationId, refundAmount = null) => {
  const token = localStorage.getItem("adminToken");
  const body = refundAmount ? { refundAmount } : {};

  const res = await API.post(`/api/refund/${conversationId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res?.data;
};

const getReservationByFilter = async (values) => {
  const token = localStorage.getItem("adminToken");
  const res = await API.post("/api/reservations/filter", values, {
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
  refundReservation,
  getReservationByFilter,
};
