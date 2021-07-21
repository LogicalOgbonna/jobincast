import { createAction } from "@reduxjs/toolkit";

export const getAllApplicantsAC = createAction('employer/get-all-applied-applicants')
export const respondsToApplicantAC = createAction('employer/responds-to-applicant')
export const downloadResumeAC = createAction('employer/download-applicant-resume')