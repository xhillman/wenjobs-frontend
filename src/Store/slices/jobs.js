import { createSlice } from "@reduxjs/toolkit";

// jobs array is more like a master list of jobs, or a cache. Filtered jobs are what is actually rendered, and keyword is the search term
export const jobsSlice = createSlice({
    name: "jobs",
    initialState: {
        jobs: [],
        filteredJobs: [],
        keyword: "",
    },
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
            state.filteredJobs = action.payload;
        },
        filterJobs: (state, action) => {
            // set the filtered jobs in state
            state.filteredJobs = state.jobs.filter(job => job.title.toLowerCase().includes(state.keyword.toLowerCase()));
        },
        setKeyword: (state, action) => {
            state.keyword = action.payload;
        },
    },
});

export const { setJobs, filterJobs, setKeyword } = jobsSlice.actions;

export default jobsSlice.reducer;