import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../rtkquery/index";
import { homeapis } from "../rtkquery/homeapis";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [homeapis.reducerPath]: homeapis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(homeapis.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
