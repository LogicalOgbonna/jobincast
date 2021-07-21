import { createAction } from "@reduxjs/toolkit";


export const getAllResumeAC = createAction('user/get-all-resume');
export const getSingleResumeAC = createAction('user/get-single-resume')
export const getContactByIdAC = createAction('user/get-contact')