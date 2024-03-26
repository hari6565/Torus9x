import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NextUIState {
  sideState: string;
  isLogin: boolean;
}

const initialState: NextUIState = {
  sideState: "UF",
  isLogin: false,
};

const MainStates = createSlice({
  name: "UF",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<string>) => {
      state.sideState = action.payload;
    },
    setLogin: (state) => {
      state.isLogin = !state.isLogin;
    },
  },
});

export const { setState, setLogin } = MainStates.actions;

export default MainStates.reducer;
