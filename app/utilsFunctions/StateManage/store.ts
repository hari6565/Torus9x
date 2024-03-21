import { configureStore } from "@reduxjs/toolkit";

import MainStates from "./MainStates";
import UFStates from "./UFStates";
import DFStates from "./DFStates";
export const store = configureStore({
  reducer: {
    MainStates: MainStates,
    UFStates: UFStates,
    DFStates: DFStates,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
