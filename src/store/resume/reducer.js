import { createSlice } from "@reduxjs/toolkit";


const resumeSlice = createSlice({
    name: 'resumeSlice',
    initialState: {
        resumes: { content: [] },
        resumesLoading: true,
    },
    reducers: {
        setData: (state, action) => ({
            ...state,
            [action.payload.type]: action.payload.value
        })
    }
})

export const { setData } = resumeSlice.actions;

export default resumeSlice.reducer;