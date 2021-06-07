import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler";


export const createJobService = async (job) => {
    try {
        const { data } = await jobincast.post('/services/jobs', job);
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}
export const updateJobService = async (job) => {
    try {
        const { data } = await jobincast.put(`/services/jobs/${job.id}`, job);
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
export const checkIfUserAppliedAlready = async (id) => {
    try {
        const { data: { status } } = await jobincast.get(`/services/applicants/applications/${id}`)

        return { message: status, success: true }
    } catch (e) {
        return errorHandler(e)
    }
}
export const deleteJobService = async (id) => {
    try {
        const { data } = await jobincast.delete(`/services/jobs/${id}`)
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}


export const rePostJobService = async (value) => {
    try {
        const { data } = await jobincast.put(`/services/jobs/activate/${value.id}`)
        return {
            success: true,
            message: data
        }
    } catch (error) {
        return errorHandler(error)
    }
}