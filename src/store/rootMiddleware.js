import { getDefaultMiddleware } from '@reduxjs/toolkit';
import authMiddleware from './auth/middleware';
import filterMiddleware from './filter/middleware'
import profileMiddleware from './profile/middleware'


const middleware = [
  ...getDefaultMiddleware(),
  ...filterMiddleware,
  ...authMiddleware,
  ...profileMiddleware
]

export default middleware;
