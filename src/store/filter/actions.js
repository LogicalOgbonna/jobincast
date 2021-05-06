import { createAction } from '@reduxjs/toolkit'

export const selectFilterPillAC = createAction('user/select-pill');
export const removeFilterPillAC = createAction('user/remove-pill');
export const clearFilterPillAC = createAction('user/clear-pill');