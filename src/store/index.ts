import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/index";
import { homeapis } from "./api/home";
// import menuSlice from "@/store/menu";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [homeapis.reducerPath]: homeapis.reducer,
    // menu: menuSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiSlice.middleware, homeapis.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
