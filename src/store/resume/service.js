import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler"


export const getAllResumeService = async (search) => {
    try {
        const { data } = await jobincast.get(`/services/applicants?${search}`)
        return {
            message: data,
            success: true
        }
    } catch (error) {
        return errorHandler(error)
    }
}