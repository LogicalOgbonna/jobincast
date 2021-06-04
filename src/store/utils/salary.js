import { nanoid } from "nanoid"

const salary = [
    'USD 500 - 1000',
    'USD 1500 - 2000',
    'USD 2500 - 5000',
    'USD 5000 - 10000',
]
const salaryFilter = salary.map(label => ({ id: nanoid(), type: "salary", label }))
export { salary, salaryFilter }