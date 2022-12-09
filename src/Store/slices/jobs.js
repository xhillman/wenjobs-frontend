import { createSlice } from "@reduxjs/toolkit";

export const jobsSlice = createSlice({
    name: "jobs",
    initialState: {
        jobs: [],
        lastVisible: null,
    },
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
        setLastVisible: (state, action) => {
            state.lastVisible = action.payload;
        },
    },
});

export const { setJobs, setLastVisible } = jobsSlice.actions;

export default jobsSlice.reducer;