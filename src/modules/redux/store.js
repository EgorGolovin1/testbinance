import { configureStore } from "@reduxjs/toolkit";
import tokensReducer from "./tokensSlice";

export default configureStore({
  reducer: {
    tokens: tokensReducer,
  },
});
