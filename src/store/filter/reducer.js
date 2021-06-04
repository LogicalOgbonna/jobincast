import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: {
        pills: [],
        locations: [{ id: 0, label: "Istanbul, TR (AHL)", type: "location" }, { id: 1, label: "Paris, FR (CDG)", type: "location" }, { id: 2, label: "Paris, FR (CDG)", type: "location" }],
        categories: [
            { id: 0, label: "ENGINEERING", type: "category" },
            { id: 1, label: "TELECOMMUNICATIONS", type: "category" },
            { id: 2, label: "INTERNET_COMPUTING", type: "category" },
            { id: 3, label: "LEGAL", type: "category" },
            { id: 4, label: "BUSINESS_ADMINISTRATION", type: "category" },
            { id: 5, label: "HUMAN_CAPITAL", type: "category" },
            { id: 6, label: "SALES_AND_MARKETING", type: "category" },
            { id: 7, label: "MANUFACTURING", type: "category" },
            { id: 8, label: "BUILDING_AND_CONSTRUCTION", type: "category" },
            { id: 9, label: "HEALTHCARE", type: "category" },
            { id: 10, label: "SERVICES", type: "category" },
            { id: 11, label: "EDUCATIONS", type: "category" },
            { id: 12, label: "HOSPITALITY", type: "category" },
            { id: 13, label: "OTHERS", type: "category" },
        ],
        salaries: [{ id: 0, label: "Istanbul, TR (AHL)", type: "salary" }, { id: 1, label: "Paris, FR (CDG)", type: "salary" }, { id: 2, label: "Paris, FR (CDG)", type: "salary" }],
        jobTypes: [{ id: 0, label: "Istanbul, TR (AHL)", type: "type" }, { id: 1, label: "Paris, FR (CDG)", type: "type" }, { id: 2, label: "Paris, FR (CDG)", type: "type" }],
        experiences: [{ id: 0, label: "Istanbul, TR (AHL)", type: "experience" }, { id: 1, label: "Paris, FR (CDG)", type: "experience" }, { id: 2, label: "Paris, FR (CDG)", type: "experience" }],
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