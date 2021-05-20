import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler";


export const userGetApplicationsService = async() => {
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