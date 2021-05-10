import jobincast from "../../axios";
import { errorHandler } from "../utils/axiosErrorHandler";

export const registerService = async (credentials) => {
    try {
        const { data } = await jobincast.post("/auth/register", credentials)
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}

export const verifyEmailService = async token => {
    try {
        const { data } = await jobincast.put(`/auth/e-verify?token=${token}`);
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}
export const loginService = async credentials => {
    try {
        const { data } = await jobincast.post(`/auth/login`, credentials);
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}
