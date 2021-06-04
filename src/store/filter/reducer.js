import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid'
import { countriesFilter } from '../utils/countries';
import { jobExperienceLevelFilter } from '../utils/experience';
import { jobTypeFilter } from '../utils/jobs';
import { salaryFilter } from '../utils/salary';

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: {
        pills: [],
        locations: countriesFilter,
        categories: [
            { id: nanoid(), label: "ENGINEERING", type: "category" },
            { id: nanoid(), label: "TELECOMMUNICATIONS", type: "category" },
            { id: nanoid(), label: "INTERNET_COMPUTING", type: "category" },
            { id: nanoid(), label: "LEGAL", type: "category" },
            { id: nanoid(), label: "BUSINESS_ADMINISTRATION", type: "category" },
            { id: nanoid(), label: "HUMAN_CAPITAL", type: "category" },
            { id: nanoid(), label: "SALES_AND_MARKETING", type: "category" },
            { id: nanoid(), label: "MANUFACTURING", type: "category" },
            { id: nanoid(), label: "BUILDING_AND_CONSTRUCTION", type: "category" },
            { id: nanoid(), label: "HEALTHCARE", type: "category" },
            { id: nanoid(), label: "SERVICES", type: "category" },
            { id: nanoid(), label: "EDUCATIONS", type: "category" },
            { id: nanoid(), label: "HOSPITALITY", type: "category" },
            { id: nanoid(), label: "OTHERS", type: "category" },
        ],
        salaries: salaryFilter,
        jobTypes: jobTypeFilter,
        experiences: jobExperienceLevelFilter,
        degree: [
            {id: nanoid(), type: 'type', label: "BSc"},
            {id: nanoid(), type: 'type', label: "Master"},
            {id: nanoid(), type: 'type', label: "PhD"},
        ]
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