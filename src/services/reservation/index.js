import API from "../../helpers/api";

const getAllReservations = async () => {
  const res = await API.get("/api/reservations");
  return res?.data;
};

const getReservationById = async (id) => {
  const res = await API.get(`/api/reservations/${id}`);
  return res?.data;
};

const createReservation = async (values) => {
  const res = await API.post("/api/reservations", values);
  return res?.data;
};

const deleteReservation = async (id) => {
  const res = await API.delete(`/api/reservations/${id}`);
  return res?.data;
};

const getReservationByFilter = async (values) => {
  const res = await API.post("/api/reservations/filter", values);
  return res?.data;
};

const getCalendarRanges = async (villa) => {
  const res = await API.post("/api/reservations/calendar", { villa });
  return res?.data;
};

export const ReservationService = {
  getAllReservations,
  getReservationById,
  createReservation,
  deleteReservation,
  getReservationByFilter,
  getCalendarRanges,
};
