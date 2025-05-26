import API from "../../helpers/api";

const getReservationById = async (id) => {
  const res = await API.get(`/api/reservations/${id}`);
  return res?.data;
};

const getCalendarRanges = async (villa) => {
  const res = await API.post("/api/reservations/calendar", { villa });
  return res?.data;
};

export const ReservationService = {
  getReservationById,
  getCalendarRanges,
};
