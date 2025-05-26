import { createSlice } from "@reduxjs/toolkit";
import { getReservationById, getCalendarRanges } from "./thunk";

const initialState = {
  loading: false,
  reservationData: {},
  reservationDetail: null,
  calendarRanges: {
    agena: [],
    capella: [],
    rigel: [],
    gredi: [],
  },
};

export const reservation = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setReservationData: (state, action) => {
      state.reservationData = action.payload;
    },
    resetReservationData: () => initialState,
    resetReservationDetail: (state) => {
      state.reservationDetail = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCalendarRanges.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCalendarRanges.fulfilled, (state, action) => {
      state.loading = false;
      const { villa, ranges } = action.payload;
      switch (villa) {
        case "Villa Agena":
          state.calendarRanges.agena = ranges;
          break;
        case "Villa Capella":
          state.calendarRanges.capella = ranges;
          break;
        case "Villa Rigel":
          state.calendarRanges.rigel = ranges;
          break;
        case "Villa Gredi":
          state.calendarRanges.gredi = ranges;
          break;
        default:
          break;
      }
    });
    builder.addCase(getCalendarRanges.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getReservationById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getReservationById.fulfilled, (state, action) => {
      state.loading = false;
      state.reservationDetail = action.payload;
    });
    builder.addCase(getReservationById.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {
  setReservationData,
  resetReservationData,
  resetReservationDetail,
} = reservation.actions;
export default reservation.reducer;
