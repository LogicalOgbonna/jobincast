import { notification } from "antd";

import { createJobService } from './service'
import { setData } from './reducer';

const createJobMW = (store) => (next) => async (action) => {
    if (action.type !== 'company/create-job') return next(action);

    store.dispatch(setData({
        type: "jobPostingLoading",
        value: true
    }))
    const { message, success } = createJobService(action.payload.data);
    store.dispatch(setData({
        type: "jobPostingLoading",
        value: false
    }))
    if (!success) return notification.error({
        description: message
    })

    store.dispatch(setData({
        type: "job",
        value: message
    }))

    return action.payload.preview()
}

const jobsMiddleware = [createJobMW]

export default jobsMiddleware