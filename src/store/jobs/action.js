import { createAction } from '@reduxjs/toolkit'

export const createJobAC = createAction('company/create-job')
export const updateJobAC = createAction('company/update-job')
export const deleteJobAC = createAction('company/delete-job')
export const getJobsAC = createAction('company/get-jobs')
export const getAllJobsAC = createAction('user/get-all-jobs')
export const getSingleJobAC = createAction('user/get-single-job')
export const rePostJobAC = createAction('company/re-post-job')