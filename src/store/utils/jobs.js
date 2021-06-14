import { nanoid } from "@reduxjs/toolkit"

const jobCategories = [
    "ACCOUNTING_AND_FINANCE",
    "ENGINEERING",
    "TELECOMMUNICATIONS",
    "INTERNET_COMPUTING",
    "LEGAL",
    "BUSINESS_ADMINISTRATION",
    "HUMAN_CAPITAL",
    "SALES_AND_MARKETING",
    "MANUFACTURING",
    "BUILDING_AND_CONSTRUCTION",
    "HEALTHCARE",
    "SERVICES",
    "EDUCATIONS",
    "HOSPITALITY",
    "OTHERS"
]

const jobType = [
    "CONTRACT",
    "PART_TIME",
    "FULL_TIME",
    "REMOTE",
    "FREELANCE",
    "ON_PREMISE",
    "MIXED_REMOTE"
]

const jobTypeFilter = (searchKey) => jobType.map(value => ({ type: 'type', label: value, id: nanoid(), searchKey }))
export { jobCategories, jobTypeFilter, jobType }

const mappedJobTypes = jobType.map(value => ({ label: value.replace(/_/g, " ").toLowerCase(), value }))
const mappedJobCategories = jobCategories.map(value => ({ label: value.replace(/_/g, " ").toLowerCase(), value }))

export {
    mappedJobTypes,
    mappedJobCategories
}