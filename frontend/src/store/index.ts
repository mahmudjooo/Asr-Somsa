import { configureStore } from "@reduxjs/toolkit";
import samsaReducer from "./slice/sliceSamsa";

export const store = configureStore({
  reducer: {
    samsas: samsaReducer,
  },
});

// 🔹 Type’larni export qilish
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 🔹 Default export (ixtiyoriy)
export default store;
