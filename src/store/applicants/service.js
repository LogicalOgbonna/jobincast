import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler";


export const userGetApplicationsService = async () => {
    try {
        const { data } = await jobincast.get('/services/applicants/applications');
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}
export const applicantApplyService = async (options) => {
    try {
        const { data } = await jobincast.post(`/services/jobs/apply`, options);
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}

export const withdrawApplicationService = async (id) => {
    try {
        const { data } = await jobincast.delete(`/services/applicants/applications/${id}`)
        return {
            message: data,
            success: true
        }
    } catch (e) {
        return errorHandler(e)
    }
}