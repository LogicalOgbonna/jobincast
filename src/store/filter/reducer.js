import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: {
        pills: [],
    },
    reducers: {
        setPill: (state, action) => ({
            ...state,
            pills: action.payload
        })
    }
})


export const { setPill } = filterSlice.actions;
export default filterSlice.reducer;