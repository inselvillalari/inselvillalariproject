// src/store/store.js

import { configureStore } from "@reduxjs/toolkit";
import reservation from "./reservation/reducer";
import generalReducer from "./generalSlice";

export const store = configureStore({
  reducer: {
    reservation: reservation,
    general: generalReducer,
  },
});

export default store;
