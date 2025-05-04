// src/store/store.js

import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./reservationSlice";
import generalReducer from "./generalSlice";

export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    general: generalReducer,
  },
});

export default store;
