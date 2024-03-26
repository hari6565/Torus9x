import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConterState {
  serverData: [];
  appName: string;
  artfactName: string;
  fabrics: string;
  TRSVersion: string;
  ER_Artifacts: string;
  TRNstate: string;
}

const initialState: ConterState = {
  serverData: [],
  appName: "",
  artfactName: "",
  fabrics: "",
  TRSVersion: "",
  ER_Artifacts: "",
  TRNstate: "VIDT",
};

const DFStates = createSlice({
  name: "UF",
  initialState,
  reducers: {
    getServer: (state, action: PayloadAction<[]>) => {
      state.serverData = action.payload;
    },
    selectApp: (state, action: PayloadAction<string>) => {
      state.appName = action.payload;
    },
    selectArtifact: (state, action: PayloadAction<string>) => {
      state.artfactName = action.payload;
    },
    selectFabrics: (state, action: PayloadAction<string>) => {
      state.fabrics = action.payload;
    },
    setTRSVersion: (state, action: PayloadAction<string>) => {
      state.TRSVersion = action.payload;
    },
    setER_Artifacts: (state, action: PayloadAction<string>) => {
      state.ER_Artifacts = action.payload;
    },
    setTRNstate: (state, action: PayloadAction<string>) => {
      state.TRNstate = action.payload;
    },
  },
});

export const {
  getServer,
  selectApp,
  selectFabrics,
  selectArtifact,
  setTRSVersion,
  setER_Artifacts,
  setTRNstate,
} = DFStates.actions;

export default DFStates.reducer;
