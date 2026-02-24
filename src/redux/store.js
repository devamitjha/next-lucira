import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { rootPersistConfig } from "./persist";

import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(
  rootPersistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);