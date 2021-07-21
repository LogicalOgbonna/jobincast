import { notification } from 'antd';
import { setData } from './reducer';
import { getAllResumeService, getSingleResumeService } from './service';

const getAllResumeMW = store => next => async action => {
    if (action.type !== 'user/get-all-resume') return next(action);
    store.dispatch(setData({ type: 'resumesLoading', value: true }))
    const { message, success } = await getAllResumeService(action.payload);
    store.dispatch(setData({ type: 'resumesLoading', value: false }))
    if (!success) return notification.error({
        description: message
    })

    store.dispatch(setData({ type: 'resumes', value: message }))
}

const getSingleResumeMW = store => next => async action => {
    if(action.type !== 'user/get-single-resume') return next(action);
    store.dispatch(setData({
        type: 'resumeLoading',
        value: true,
    }))

    const { success, message} = await getSingleResumeService(action.payload);
    store.dispatch(setData({
        type: 'resumeLoading',
        value: false
    }))

    if(!success) return notification.error({
        description: message
    })

    store.dispatch(setData({
        type: 'resume',
        value: message
    }))
}

// const getContactByIdMW = store => next => async action => {
//     if(action)
// }
const resumeMiddleware = [getAllResumeMW, getSingleResumeMW];

export default resumeMiddleware;