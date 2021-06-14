import { createAction } from '@reduxjs/toolkit'


export const registerAction = createAction('user/register')
export const verifyEmailAction = createAction('user/verify-email')
export const loginAction = createAction('user/login')
export const setUserFromLocalStorage = createAction('app/set-user-from-local-storage');
export const resetPasswordAC = createAction('user/reset-password');
export const completeResetPasswordAC = createAction('user/complete-reset-password');