import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart"], // persist both
};

export const persistUserReducer = (reducer) =>
  persistReducer(rootPersistConfig, reducer);