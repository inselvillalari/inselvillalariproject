// src/store/store.js

import { configureStore } from "@reduxjs/toolkit";
import reservation from "./reservation/reducer";
import auth from "./auth/reducer";
import generalReducer from "./generalSlice";

export const store = configureStore({
  reducer: {
    auth: auth,
    reservation: reservation,
    general: generalReducer,
  },
});

export default store;
