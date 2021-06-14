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
        jobsPage: {
            locations: countriesFilter('jobCountry'),
            categories: [
                { id: nanoid(), label: "ENGINEERING", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "TELECOMMUNICATIONS", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "INTERNET_COMPUTING", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "LEGAL", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "BUSINESS_ADMINISTRATION", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "HUMAN_CAPITAL", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "SALES_AND_MARKETING", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "MANUFACTURING", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "BUILDING_AND_CONSTRUCTION", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "HEALTHCARE", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "SERVICES", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "EDUCATIONS", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "HOSPITALITY", type: "category", searchKey: "jobCategory" },
                { id: nanoid(), label: "OTHERS", type: "category", searchKey: "jobCategory" },
            ],
            salaries: salaryFilter("maxAmount"),
            jobTypes: jobTypeFilter("jobType"),
            experiences: jobExperienceLevelFilter("experienceLevel"),
            degree: [
                { id: nanoid(), type: 'type', label: "BSc", searchKey: "jobCategory" },
                { id: nanoid(), type: 'type', label: "Master", searchKey: "jobCategory" },
                { id: nanoid(), type: 'type', label: "PhD", searchKey: "jobCategory" },
            ]
        },
        companiesPage: {
            locations: countriesFilter('contact.country'),
            industry: [
                { id: nanoid(), label: "ENGINEERING", type: "category", searchKey: "category" },
                { id: nanoid(), label: "TELECOMMUNICATIONS", type: "category", searchKey: "category" },
                { id: nanoid(), label: "INTERNET_COMPUTING", type: "category", searchKey: "category" },
                { id: nanoid(), label: "LEGAL", type: "category", searchKey: "category" },
                { id: nanoid(), label: "BUSINESS_ADMINISTRATION", type: "category", searchKey: "category" },
                { id: nanoid(), label: "HUMAN_CAPITAL", type: "category", searchKey: "category" },
                { id: nanoid(), label: "SALES_AND_MARKETING", type: "category", searchKey: "category" },
                { id: nanoid(), label: "MANUFACTURING", type: "category", searchKey: "category" },
                { id: nanoid(), label: "BUILDING_AND_CONSTRUCTION", type: "category", searchKey: "category" },
                { id: nanoid(), label: "HEALTHCARE", type: "category", searchKey: "category" },
                { id: nanoid(), label: "SERVICES", type: "category", searchKey: "category" },
                { id: nanoid(), label: "EDUCATIONS", type: "category", searchKey: "category" },
                { id: nanoid(), label: "HOSPITALITY", type: "category", searchKey: "category" },
                { id: nanoid(), label: "OTHERS", type: "category", searchKey: "category" },
            ],
            companySize: [
                { id: nanoid(), type: 'salary', label: "0-50", searchKey: "companySize" },
                { id: nanoid(), type: 'salary', label: "50-100", searchKey: "companySize" },
                { id: nanoid(), type: 'salary', label: "100-500", searchKey: "companySize" },
                { id: nanoid(), type: 'salary', label: "more than 500", searchKey: "companySize" },
            ]
        },
        resumePage: {
            locations: countriesFilter('contact.country'),
            alphabetical: [
                { id: nanoid(), label: "A-Z", type: "category", searchKey: "alphabetical" },
                { id: nanoid(), label: "Z-A", type: "category", searchKey: "alphabetical" },
            ],
            degree: [
                { id: nanoid(), type: 'type', label: "Diploma", searchKey: "degree" },
                { id: nanoid(), type: 'type', label: "Higher Diploma", searchKey: "degree" },
                { id: nanoid(), type: 'type', label: "BSc", searchKey: "degree" },
                { id: nanoid(), type: 'type', label: "Masters", searchKey: "degree" },
                { id: nanoid(), type: 'type', label: "PhD", searchKey: "degree" },
            ],
            experiences: [
                { id: nanoid(), type: 'experience', label: "0-1", searchKey: "yearsOfExperience" },
                { id: nanoid(), type: 'experience', label: "2-5", searchKey: "yearsOfExperience" },
                { id: nanoid(), type: 'experience', label: "6-10", searchKey: "yearsOfExperience" },
                { id: nanoid(), type: 'experience', label: "more than 10", searchKey: "yearsOfExperience" },
            ],
        },
        locations: countriesFilter('location'),
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
        salaries: salaryFilter('companySize'),
        jobTypes: jobTypeFilter('jobType'),
        experiences: jobExperienceLevelFilter('experienceLevel'),
        degree: [
            { id: nanoid(), type: 'type', label: "BSc" },
            { id: nanoid(), type: 'type', label: "Master" },
            { id: nanoid(), type: 'type', label: "PhD" },
        ],
        currentState: {}
    },
    reducers: {
        setPill: (state, action) => ({
            ...state,
            pills: action.payload
        }),
        setCurrentState: (state, action) => ({
            ...state,
            currentState: action.payload
        })
    }
})


export const { setPill, setCurrentState } = filterSlice.actions;
export default filterSlice.reducer;