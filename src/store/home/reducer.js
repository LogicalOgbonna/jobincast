import { createSlice } from '@reduxjs/toolkit';


const companiesSlice = createSlice({
    name: 'companiesSlice',
    initialState: {
        featuredCompanies: {
            content: []
        },
        featuredCompaniesLoading: true
    },
    reducers: {
        setData: (state, action) => ({
            ...state,
            [action.payload.type]: action.payload.value
        })
    }
})

export const { setData } = companiesSlice.actions;

export default companiesSlice.reducer;