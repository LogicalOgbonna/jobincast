import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler"


export const getFeaturedCompaniesService = async () => {
    try {
        const { data } = await jobincast.get(`/services/companies/featured`)
        console.log("🚀 ~ file: service.js ~ line 8 ~ getFeaturedCompaniesService ~ data", data)
        return {
            message: data,
            success: true
        }
    } catch (error) {
        return errorHandler(error)
    }
}