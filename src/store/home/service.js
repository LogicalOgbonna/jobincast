import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler"


export const getFeaturedCompaniesService = async (query) => {
    try {
        const { data } = await jobincast.get(`/services/companies?${query}`)
        return {
            message: data,
            success: true
        }
    } catch (error) {
        return errorHandler(error)
    }
}