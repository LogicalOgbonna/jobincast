import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler"


export const getAllResumeService = async (search) => {
    try {
        const { data } = await jobincast.get(`/services/resumes?${search}`)
        return {
            message: data,
            success: true
        }
    } catch (error) {
        return errorHandler(error)
    }
}

export const getSingleResumeService = async id => {
    try {
        const { data } = await jobincast.get(`/user/profile/${id}`)
        return {
            message: data,
            success: true
        }
    } catch (e) {
        return errorHandler(e)
    }
}