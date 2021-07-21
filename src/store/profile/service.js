import jobInCast from "../../axios";
import { errorHandler } from "../utils/axiosErrorHandler";

export const createProfileService = async userInfo => {
    try {
        const { data: message } = await jobInCast.post(`/user/profile`, userInfo)
        return {
            message,
            success: true
        }
    } catch (e) {
        return errorHandler(e)
    }
}
export const updateProfileService = async userInfo => {
    try {
        const { data: message } = await jobInCast.put(`/user/profile`, userInfo)
        return {
            message,
            success: true
        }
    } catch (e) {
        return errorHandler(e)
    }
}
export const updateProfileQualificationService = async userInfo => {
    try {
        const { data: message } = await jobInCast.put(`/user/profile/qualifications`, userInfo)
        return {
            message,
            success: true
        }
    } catch (e) {
        return errorHandler(e)
    }
}
export const createProfileContactService = async userInfo => {
    try {
        const { data: message } = await jobInCast.post(`/user/contact`, userInfo)
        return {
            message,
            success: true
        }
    } catch (e) {
        return errorHandler(e)
    }
}

export const uploadImageService = async (formData, config, success) => {
    try {
        const { data: message } = await jobInCast.post('/user/upload-document', formData, config);
        success("Ok")
        return {
            success: true,
            message
        }
    } catch (e) {
        return errorHandler(e)
    }
}
export const uploadResumeACService = async (formData) => {
    try {
        const { data: message } = await jobInCast.post('/user/upload-document', formData);
        return {
            success: true,
            message
        }
    } catch (e) {
        return errorHandler(e)
    }
}
export const removeResumeACService = async (id) => {
    try {
        const { data: message } = await jobInCast.delete(`/user/delete-document/${id}`);
        return {
            success: true,
            message
        }
    } catch (e) {
        return errorHandler(e)
    }
}

export const getFullProfileService = async () => {
    try {
        const { data } = await jobInCast.get('/user/profile');
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}

export const payPalSuccessService = async (payload) => {
    try {
        const { data } = await jobInCast.post('/credit', payload)

        return {
            message: data,
            success: true
        }
    } catch (e) {
        return errorHandler(e)
    }
}
export const stripePaymentService = async (payload) => {
    try {
        const { data } = await jobInCast.post('/payment/charge-and-credit', payload)
        return {
            message: data,
            success: true
        }
    } catch (e) {
        return errorHandler(e)
    }
}