import { configureStore } from "@reduxjs/toolkit";
import { spaceReducer } from "./spacexSlice";
import { capsulesReducer } from "./capsulesSlice";

export const store = configureStore({
  reducer:{
    spacex: spaceReducer,
    capsules: capsulesReducer,
  }
})