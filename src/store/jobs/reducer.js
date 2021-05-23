import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
    name: "jobSlice",
    initialState: {
        job: null,
        jobs: [],
        jobPostingLoading: false,
        jobsLoading: true
    },
    reducers: {
        setDate: (state, action) => ({
            ...state,
            [action.payload.type]: action.payload.value
        })
    }
})


export const { setData } = jobSlice.actions;

export default jobSlice.reducer