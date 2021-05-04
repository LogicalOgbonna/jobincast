import { getDefaultMiddleware } from '@reduxjs/toolkit';
import filterMiddlerware from './filter/middleware'


const middleware = [
  ...getDefaultMiddleware(),
  ...filterMiddlerware,
]

export default middleware;
