import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./slices/jobs";

export const store = configureStore({
    reducer: {
        jobs: jobsReducer,
    },
});
