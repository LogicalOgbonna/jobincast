import { getDefaultMiddleware } from '@reduxjs/toolkit';
import authMiddleware from './auth/middleware';
import filterMiddleware from './filter/middleware'
import profileMiddleware from './profile/middleware'
import applicantsMiddleware from './applicants/middleware'
import jobsMiddleware from './jobs/middleware'


const middleware = [
    ...getDefaultMiddleware(),
    ...filterMiddleware,
    ...authMiddleware,
    ...profileMiddleware,
    ...applicantsMiddleware,
    ...jobsMiddleware
]

export default middleware;