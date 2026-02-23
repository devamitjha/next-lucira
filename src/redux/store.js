import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { persistUserReducer } from "./persist";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: persistUserReducer(userReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});