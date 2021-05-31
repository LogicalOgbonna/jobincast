import { createAction } from '@reduxjs/toolkit'

export const profileLoadingAction = createAction('user-profile/loading')
export const uploadImageAction = createAction('user-profile/upload-image')
export const getUserProfileAC = createAction('user-profile/get-full-profile')