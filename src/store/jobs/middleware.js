import { notification } from "antd";

import { createJobService, getRecruiterGetJobsService, getAllJobsService } from './service'
import { setData } from './reducer';
import { getJobsAC } from "./action";

const createJobMW = (store) => (next) => async action => {
    if (action.type !== 'company/create-job') return next(action);

    store.dispatch(setData({ type: "jobPostingLoading", value: true }))
    const { message, success } = await createJobService(action.payload.data);
    store.dispatch(setData({
        type: "jobPostingLoading",
        value: false
    }))
    if (!success) return notification.error({
        description: message
    })

    notification.success({
        description: "Job Created successfully"
    })

    store.dispatch(setData({
        type: "job",
        value: message
    }))
    action.payload.onModalToggle();
    store.dispatch(getJobsAC())
}

const getRecruiterGetJobsMW = store => next => async action => {
    if (action.type !== "company/get-jobs") return next(action);
    store.dispatch(setData({
        type: "recruiterJobsLoading",
        value: true
    }))

    const { message, success } = await getRecruiterGetJobsService()
    store.dispatch(setData({
        type: "recruiterJobsLoading",
        value: false
    }))
    if (!success) return notification.error({
        description: message
    })
    store.dispatch(setData({
        type: "recruiterJobs",
        value: message
    }))
}

const getAllJobsMW = store => next => async action => {
    if (action.type !== "user/get-all-jobs") return next(action);
    store.dispatch(setData({
        type: "jobsLoading",
        value: true
    }))

    const { success, message } = await getAllJobsService()
    store.dispatch(setData({
        type: "jobsLoading",
        value: false
    }))

    if (!success) return notification.error({
        description: message
    })

    store.dispatch(setData({
        type: "jobs",
        value: message
    }))
}

const jobsMiddleware = [createJobMW, getRecruiterGetJobsMW, getAllJobsMW]

export default jobsMiddleware