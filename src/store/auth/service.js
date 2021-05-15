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
export const loginService = async ({ email, password }) => {
    try {
        const { data } = await jobincast.post(`/auth/login`, { username: email, password });
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}
