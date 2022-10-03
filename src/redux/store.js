import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
})

export const store = configureStore({
 reducer: rootReducer,
 middleware: [thunk]
});


export const persistor = persistStore(store)