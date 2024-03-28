import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NextUIState {
  fabric : string;
  isLogin: boolean;
  applicationName : string
}

const initialState: NextUIState = {
  fabric : "UF",
  isLogin: false,
  applicationName : "",
};

const MainStates = createSlice({
  name: "UF",
  initialState,
  reducers: {
    setFabric: (state, action: PayloadAction<string>) => {
      state.fabric = action.payload;
    },
    setLogin: (state) => {
      state.isLogin = !state.isLogin;
    },
    setApplicationName : (state , action:PayloadAction<string>) => {
      state.applicationName = action.payload;
    },
  },
});

export const { setFabric, setLogin, setApplicationName } = MainStates.actions;

export default MainStates.reducer;
