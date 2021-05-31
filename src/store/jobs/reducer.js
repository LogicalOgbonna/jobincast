import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
    name: "jobSlice",
    initialState: {
        job: null,
        jobLoading: true,
        jobs: {
            content: []
        },
        jobsLoading: true,
        jobPostingLoading: false,
        recruiterJobsLoading: true,
        recruiterJobs: {
            content: []
        }
    },
    reducers: {
        setData: (state, action) => ({
            ...state,
            [action.payload.type]: action.payload.value
        })
    }
})


export const { setData } = jobSlice.actions;

export default jobSlice.reducer