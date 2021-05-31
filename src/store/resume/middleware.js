import { notification } from 'antd';
import { setData } from './reducer';
import { getAllResumeService } from './service';

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

const resumeMiddleware = [getAllResumeMW];

export default resumeMiddleware;