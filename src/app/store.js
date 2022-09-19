import {
  combineReducers,
  configureStore,
  createAction,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import baseReducer from "modules/base/baseSlice";
import loadingReducer from "modules/loading/LoadingSlice";
import storage from "redux-persist/lib/storage";
import ModalReducer from "modules/Modal/ModalSlice";
import LocationReducer from "modules/location-information/locationSlice";
import DatePickerReducer from "modules/DatePicker/DatePickerSlices";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["caches", "auth"],
};

export const resetAppReducers = createAction("reset-app-reducers");

const appReducer = combineReducers({
  base: baseReducer,
  loading: loadingReducer,
  modal:ModalReducer,
  location:LocationReducer,
  datePicker:DatePickerReducer
});

const rootReducer = (state, action) => {
  console.log({ state });
  console.log({ action: action.type });
  if (state?.auth?.isLoggedIn && action.type === "auth/logout/fulfilled") {
    localStorage.removeItem("persist:root");
    return appReducer(undefined, { type: undefined });
  }
  return appReducer(state, action);
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: pReducer
});

export const persistor = persistStore(store, {}, () => {});
