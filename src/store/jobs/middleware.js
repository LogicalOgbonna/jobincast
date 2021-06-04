import { notification } from "antd";

import {
    createJobService,
    getRecruiterGetJobsService,
    getAllJobsService,
    getSingleJobService,
    checkIfUserAppliedAlready,
    deleteJobService,
    rePostJobService
} from './service'
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
    await store.dispatch(getJobsAC())
    notification.success({
        description: "Job Created successfully"
    })

    store.dispatch(setData({
        type: "job",
        value: message
    }))
    action.payload.onModalToggle();
}

const deleteJobMW = store => next => async action => {
    if (action.type !== 'company/delete-job') return next(action);

    store.dispatch(setData({
        type: 'jobsLoading',
        value: true
    }))

    const { message, success } = await deleteJobService(action.payload.id);

    // store.dispatch(setData({
    //     type: 'jobsLoading',
    //     value: false
    // }))
    if (!success) return notification.error({
        description: message
    })

    const { jobsSlice: { jobs } } = store.getState();
    const content = jobs.filter(job => job.id !== action.payload.id)
    console.log("🚀 ~ file: middleware.js ~ line 58 ~ content", content)
    store.dispatch(setData({
        type: 'jobs',
        value: { ...jobs, content }
    }))

    notification.success({
        description: `You have successfully deleted ${action.payload.title}`
    })
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

    const { success, message } = await getAllJobsService(action.payload)
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

const getSingleJobMW = store => next => async action => {
    if (action.type !== "user/get-single-job") return next(action);
    store.dispatch(setData({ type: "jobLoading", value: true }))
    const { message, success } = await getSingleJobService(action.payload)
    const { message: applied } = await checkIfUserAppliedAlready(action.payload)
    store.dispatch(setData({ type: "jobLoading", value: false }))
    if (!success) return notification.error({
        description: message
    })
    store.dispatch(setData({ type: "job", value: { ...message, applied } }))
}

const rePostJobMW = store => next => async action => {
    if (action.type !== 'company/re-post-job') return next(action)
    store.dispatch(setData({
        type: 'recruiterJobsLoading',
        value: true
    }))
    const { success, message } = await rePostJobService(action.payload);
    store.dispatch(setData({
        type: 'recruiterJobsLoading',
        value: false
    }))

    if (!success) return notification.error({
        description: message
    })

    const jobs = { ...store.getState().jobsSlice.recruiterJobs };

    jobs.content.map(job => {
        return job.id === message.id ? message : job
    })

    store.dispatch(setData({
        type: 'recruiterJobs',
        value: jobs
    }))

}

const jobsMiddleware = [createJobMW, getRecruiterGetJobsMW, getAllJobsMW, getSingleJobMW, deleteJobMW, rePostJobMW]

export default jobsMiddleware