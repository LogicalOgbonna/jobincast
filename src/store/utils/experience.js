import { nanoid } from "nanoid"

const jobExperienceLevel = [
    "ENTRY",
    "JUNIOR",
    "INTERMEDIATE",
    "SENIOR",
    "EXPERT"
]
// const jobExperienceYear = [
//     "ENTRY",
//     "JUNIOR",
//     "INTERMEDIATE",
//     "SENIOR",
//     "EXPERT"
// ]

const jobExperienceLevelFilter = (searchKey) => jobExperienceLevel.map(value => ({ id: nanoid(), label: value, type: 'experience', searchKey }))

export { jobExperienceLevel, jobExperienceLevelFilter }