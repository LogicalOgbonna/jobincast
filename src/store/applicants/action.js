import { createAction } from '@reduxjs/toolkit';

export const userGetApplicationsAC = createAction('user/get-all-applications');
export const applicantApplyAC = createAction('user/apply-for-job');
export const withdrawApplicationAC = createAction('user/withdraw-application');