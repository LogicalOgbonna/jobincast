import { createAction } from '@reduxjs/toolkit'

export const profileLoadingAction = createAction('user-profile/loading')
export const uploadImageAction = createAction('user-profile/upload-image')
export const getUserProfileAC = createAction('user-profile/get-full-profile')
export const uploadResumeAC = createAction('user-profile/upload-resume')
export const removeResumeAC = createAction('user-profile/remove-resume')

export const payPalSuccessAC = createAction("user-by-payal/points")
export const stripePaymentAC = createAction("user-by-stripe/points")