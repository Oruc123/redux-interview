import { configureStore } from "@reduxjs/toolkit";
import { todosService } from "./servers/todosService";

export const store = configureStore({
  reducer: {
    [todosService.reducerPath]: todosService.reducer,
  },
  // there middlweares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosService.middleware),
});
