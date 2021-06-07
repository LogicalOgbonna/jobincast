import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler"

export const getAllApplicantsService = async () => {
    try {
        const { data } = await jobincast.get(`/services/jobs/applicants`)
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}

export const respondsToApplicantService = async (payload) => {
    try {
        const { data } = await jobincast.put(`/services/jobs/applications/${payload.id}?status=${payload.status}`)
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}