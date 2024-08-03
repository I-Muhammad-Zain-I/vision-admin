import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  mode: "dark" | "light";
  userId: string;
};

const initialState: initialStateType = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;
