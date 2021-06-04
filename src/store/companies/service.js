import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler"


export const getAllCompaniesService = async (search) => {
    try {
        const { data } = await jobincast.get(`/services/companies?${search}`)
        return {
            success: true,
            message: data
        }
    } catch (error) {
        return errorHandler(error)
    }
}

export const getSingleCompanyService = async (id) => {
    try {
        const { data } = await jobincast.get(`/services/companies?search=id==${id}`)
        return {
            success: true,
            message: data.content[0]
        }
    } catch (e) {
        return errorHandler(e)
    }
}