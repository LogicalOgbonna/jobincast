import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler";


export const createJobService = async (job) => {
    try {
        const { data } = jobincast.post('/services/jobs', job);
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}

export const getRecruiterGetJobsService = async () => {
    try {
        const { data: message } = await jobincast.get('/services/recruiters/jobs')
        return {
            message,
            success: true
        }
    } catch (e) {
        return errorHandler(e)
    }
}

export const getAllJobsService = async (searchSpec) => {
    try {
        const { data: message } = await jobincast.get(`/services/jobs?${searchSpec}`)
        return {
            message,
            success: true
        }
    } catch (e) {
        return errorHandler(e)
    }
}

export const getSingleJobService = async (id) => {
    try {
        const { data } = await jobincast.get(`/services/jobs?search=id==${id}`)
        return { message: data.content[0], success: true }
    } catch (e) {
        return errorHandler(e)
    }
}