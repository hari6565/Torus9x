import { configureStore } from "@reduxjs/toolkit";

import MainStates from "./Reducers/MainSlice";
import UFStates from "./Reducers/UFSlice";
import DFStates from "./Reducers/DFSlice";
export const store = configureStore({
  reducer: {
    MainStates: MainStates,
    UFStates: UFStates,
    DFStates: DFStates,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
