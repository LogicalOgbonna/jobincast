import { getDefaultMiddleware } from '@reduxjs/toolkit';
import authMiddleware from './auth/middleware';
import filterMiddlerware from './filter/middleware'


const middleware = [
  ...getDefaultMiddleware(),
  ...filterMiddlerware,
  ...authMiddleware
]

export default middleware;
