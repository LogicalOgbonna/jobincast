import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler"


export const getFeaturedCompaniesService = async () => {
    try {
        const { data } = await jobincast.get(`/services/companies/featured`)
        return {
            message: data,
            success: true
        }
    } catch (error) {
        return errorHandler(error)
    }
}