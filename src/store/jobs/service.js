import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler";


export const createJobService = async (job) => {
    try {
        const { data } = jobincast.post('/services/jobs');
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}