import API from "../../helpers/api";

const getReservationById = async (values) => {
  const res = await API.post(`/api/reservations/${values?.id}`, {
    from: values?.from || null,
  });
  return res?.data;
};

const getCalendarRanges = async (villa) => {
  const res = await API.post("/api/reservations/calendar", { villa });
  return res?.data;
};

const createReservation = async (values) => {
  const res = await API.post("/api/reservations", values);
  return res?.data;
};

export const ReservationService = {
  getReservationById,
  getCalendarRanges,
  createReservation,
};
