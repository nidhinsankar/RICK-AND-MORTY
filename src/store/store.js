import { configureStore } from "@reduxjs/toolkit";
import characterAPISlice from "./characterAPISlice";

export const store = configureStore({
  reducer: {
    character: characterAPISlice,
  },
});

export default store;
