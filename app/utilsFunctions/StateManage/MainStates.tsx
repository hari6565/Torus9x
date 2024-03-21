import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NextUIState {
  sideState: string;
}

const initialState: NextUIState = {
  sideState: "UF",
};

const MainStates = createSlice({
  name: "UF",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<string>) => {
      state.sideState = action.payload;
    },
  },
});

export const { setState } = MainStates.actions;

export default MainStates.reducer;
