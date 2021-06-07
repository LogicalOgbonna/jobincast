import { createSlice } from "@reduxjs/toolkit";

const employerSlice = createSlice({
    name: 'employerSlice',
    initialState: {
        applicants: { content: [] },
        applicantsLoading: true
    },
    reducers: {
        setData: (state, action) => ({
            ...state,
            [action.payload.type]: action.payload.value
        })
    }
})

export const { setData } = employerSlice.actions;

export default employerSlice.reducer;