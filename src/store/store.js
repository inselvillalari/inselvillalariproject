// src/store/store.js

import { configureStore } from "@reduxjs/toolkit";
import reservation from "./reservation/reducer";
import admin from "./admin/reducer";
import auth from "./auth/reducer";
import generalReducer from "./generalSlice";

export const store = configureStore({
  reducer: {
    admin: admin,
    auth: auth,
    reservation: reservation,
    general: generalReducer,
  },
});

export default store;
