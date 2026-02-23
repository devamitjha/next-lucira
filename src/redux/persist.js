import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["user", "isAuthenticated"],
};

export const persistUserReducer = (reducer) =>
  persistReducer(userPersistConfig, reducer);