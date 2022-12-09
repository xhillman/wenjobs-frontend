import { createSlice } from "@reduxjs/toolkit";

export const jobsSlice = createSlice({
    name: "jobs",
    initialState: {
        jobs: [],
        lastVisible: null,
        keyword: "",
    },
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
        setLastVisible: (state, action) => {
            state.lastVisible = action.payload;
        },
        filterJobs: (state, action) => {
            state.keyword = action.payload;

        },
    },
});

export const { setJobs, setLastVisible, filterJobs } = jobsSlice.actions;

export default jobsSlice.reducer;