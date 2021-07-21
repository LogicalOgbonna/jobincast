import jobincast from "../../axios"
import { errorHandler } from "../utils/axiosErrorHandler"

export const getAllApplicantsService = async () => {
    try {
        const { data } = await jobincast.get(`/services/jobs/applicants`)
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}

export const respondsToApplicantService = async (payload) => {
    try {
        const { data } = await jobincast.put(`/services/jobs/applications/${payload.id}?status=${payload.status}`)
        return {
            success: true,
            message: data
        }
    } catch (e) {
        return errorHandler(e)
    }
}

export const downloadResumeService = async (id, name) => {
    const types = {
        "application/vnd.openxmlformats-officedocument.wordprocessingm": ".docx",
        "application/pdf": ".pdf",
        "application/msword": ".doc"
    }
    try {
        const response = await jobincast.get(`/user/download-document/${id}`, { responseType: "blob" })
        console.log("🚀 ~ file: service.js ~ line 31 ~ response", response)
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${name}'s Resume${types[response.data.type]}`); //or any other extension
        document.body.appendChild(link);
        link.click();
        return {
            success: true,
            message: "data"
        }
    } catch (e) {
        return {
            success: false,
            message: "File now found, user might have deleted their Resume"
        }
    }
}