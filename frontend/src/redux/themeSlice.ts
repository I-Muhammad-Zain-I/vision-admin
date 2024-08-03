import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  mode: "dark" | "light";
};

const initialState: initialStateType = { mode: "light" };

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
