import { createAction } from '@reduxjs/toolkit'

export const createJobAC = createAction('company/create-job')
export const getJobsAC = createAction('company/get-jobs')
export const getAllJobsAC = createAction('user/get-all-jobs')