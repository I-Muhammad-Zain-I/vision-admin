import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./redux/themeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./redux/UserApi";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    theme: themeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
