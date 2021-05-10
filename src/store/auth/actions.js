import { createAction } from '@reduxjs/toolkit'


export const registerAction = createAction('user/register')
export const verifyEmailAction = createAction('user/verify-email')
export const loginAction = createAction('user/login')