import { createSlice } from '@reduxjs/toolkit'

const applicantSlice = createSlice({
    name: 'applicantSlice',
    initialState: {
        applications: { content: [] },
        applicationsLoading: false
    },
    reducers: {
        setData: (state, action) => ({
            ...state,
            [action.payload.type]: action.payload.data
        })
    }
})

export const { setData } = applicantSlice.actions
export default applicantSlice.reducer