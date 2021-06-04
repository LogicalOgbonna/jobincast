import { getDefaultMiddleware } from '@reduxjs/toolkit';
import authMiddleware from './auth/middleware';
import filterMiddleware from './filter/middleware'
import profileMiddleware from './profile/middleware'
import applicantsMiddleware from './applicants/middleware'
import jobsMiddleware from './jobs/middleware'
import resumeMiddleware from './resume/middleware'
import homeMiddleware from './home/middleware'
import companiesMiddleware from './companies/middleware'
import employerMiddleware from './employer/middleware'


const middleware = [
    ...getDefaultMiddleware(),
    ...filterMiddleware,
    ...authMiddleware,
    ...profileMiddleware,
    ...applicantsMiddleware,
    ...jobsMiddleware,
    ...homeMiddleware,
    ...resumeMiddleware,
    ...companiesMiddleware,
    ...employerMiddleware
]

export default middleware;