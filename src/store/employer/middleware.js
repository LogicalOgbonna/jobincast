import { notification } from "antd";
import { setData } from './reducer';
import { getAllApplicantsService, respondsToApplicantService, downloadResumeService } from './service'


const getAllApplicantsMW = store => next => async action => {
    if (action.type !== 'employer/get-all-applied-applicants') return next(action);

    store.dispatch(setData({
        type: 'applicantsLoading',
        value: true
    }));

    const { success, message } = await getAllApplicantsService(action.payload);

    store.dispatch(setData({
        type: 'applicantsLoading',
        value: false
    }));
    if (!success) return notification.error({
        description: message
    })

    store.dispatch(setData({
        type: 'applicants',
        value: message
    }))
}
const respondsToApplicantMW = store => next => async action => {
    if (action.type !== 'employer/responds-to-applicant') return next(action);

    store.dispatch(setData({
        type: 'applicantsLoading',
        value: true
    }));

    const { success, message } = await respondsToApplicantService(action.payload);


    store.dispatch(setData({
        type: 'applicantsLoading',
        value: false
    }));

    const applicants = { ...store.getState().employerSlice.applicants };

    if (!success) return notification.error({
        description: message
    })
    applicants.content = applicants.content.map(value => {
        return (value.profileId === message.profileId && value.jobApplicationId === message.jobApplicationId) ? message : value
    })

    store.dispatch(setData({
        type: 'applicants',
        value: applicants
    }))
}

const downloadResumeAC = store => next => async action => {
    if (action.type !== 'employer/download-applicant-resume') return next(action)
    const profile = store.getState().authSlice.user.lastName
    const { success, message } = await downloadResumeService(action.payload, profile)
    if (!success) return notification.error({
        description: message
    })

    notification.success({
        description: "Resume downloaded successfully"
    })
}

const employerMiddleware = [downloadResumeAC, getAllApplicantsMW, respondsToApplicantMW]

export default employerMiddleware;