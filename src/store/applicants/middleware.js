import { notification } from "antd";
import { setData } from './reducer'
import { setData as setJobData } from '../jobs/reducer'
import { setData as setApplicantData } from '../applicants/reducer'
import { userGetApplicationsService, applicantApplyService, withdrawApplicationService } from "./service";


const userGetApplicationsMW = (store) => (next) => async (action) => {
    if (action.type !== 'user/get-all-applications') return next(action);
    store.dispatch(setData({
        type: "applicationsLoading",
        value: true
    }))
    const { success, message } = await userGetApplicationsService();
    store.dispatch(setData({
        type: "applicationsLoading",
        value: false
    }))
    if (!success) return notification.error({
        description: message
    })

    store.dispatch(setData({ type: "applications", value: message }))
}
const applicantApplyMW = (store) => (next) => async (action) => {
    if (action.type !== 'user/apply-for-job') return next(action);

    const { profileSlice: { profile: { profileId, contact: { id: contactId } } }, jobsSlice: { job } } = store.getState();
    store.dispatch(setData({
        type: "applyLoading",
        value: true
    }))
    const { success, message } = await applicantApplyService({ profileId, contactId, jobPostUrl: action.payload });
    store.dispatch(setData({
        type: "applyLoading",
        value: false
    }))
    if (!success) return notification.error({
        description: message
    })

    store.dispatch(setJobData({
        type: 'job',
        value: { ...job, applied: true }
    }))

    notification.success({
        description: `You have successfully applied for ${message.jobOverview}`
    })
}
const withdrawApplicationMW = (store) => (next) => async (action) => {
    if (action.type !== 'user/withdraw-application') return next(action);

    store.dispatch(setData({
        type: "applicationsLoading",
        value: true
    }))
    const { success, message } = await withdrawApplicationService(action.payload.id);
    store.dispatch(setData({
        type: "applicationsLoading",
        value: false
    }))
    if (!success) return notification.error({
        description: message
    })

    const { applicantsSlice: { applications } } = store.getState();
    const content = applications.content.filter(application => application.applicationId !== action.payload.id)
    store.dispatch(setApplicantData({
        type: "applications",
        value: { ...applications, content }
    }))
    notification.success({
        description: `You have successfully withdrew application for ${action.payload.title}`
    })
}

const applicantMiddleware = [userGetApplicationsMW, applicantApplyMW, withdrawApplicationMW];
export default applicantMiddleware;