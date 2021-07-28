import { notification } from 'antd';
import { setLoading, setProfile } from './reducer'
import {
    createProfileService,
    payPalSuccessService,
    createProfileContactService,
    updateProfileQualificationService,
    uploadImageService, updateProfileService,
    getFullProfileService,
    stripePaymentService,
    uploadResumeACService,
    removeResumeACService
} from './service';
import moment from "moment";

const generalInformationCreateMW = (store) => (next) => async (action) => {
    if (action.type !== 'user-profile/loading') return next(action);

    const { type, data, push, accountType } = action.payload
    store.dispatch(setLoading({ type, value: true }));

    switch (type) {
        case 'generalInfoLoading':
            {
                const { message, success } = await createProfileService(data)
                store.dispatch(setLoading({ type, value: false }));
                if (!success) {
                    return notification.error({
                        description: message
                    })
                }

                store.dispatch(setProfile(message))
                push(`/profile?action=setup&step=2&accountType=${accountType}`)
            }
            break;
        case 'contactInfoLoading':
            {
                const { user } = store.getState().authSlice
                const { profile } = store.getState().profileSlice

                if (!profile.imageUrl) {
                    store.dispatch(setLoading({ type, value: false }));
                    return notification.error({
                        description: `Please click on the profile ICON to upload ${accountType === "APPLICANT" ? "Profile Image" : "Company Logo"}`
                    })
                }
                data.emailAddress = user?.username
                const { message, success } = await createProfileContactService(data)
                store.dispatch(setLoading({ type, value: false }));
                if (!success) {
                    return notification.error({
                        description: message
                    })
                }

                store.dispatch(setProfile({ ...profile, ...message }))
                if (accountType !== "EMPLOYER") return push(`/profile?action=setup&step=3&accountType=${accountType}`)
                notification.success({
                    description: "Profile Updated Successfully. You can Post Jobs Now"
                })
                push("/employer/jobs")

            }
            break;
        case 'resumeInfoLoading':
            {

                data.awards = data.awards.map(value => ({ ...value, yearAwarded: moment(value.yearAwarded).format("YYYY") }))
                data.educations = data.educations.map(value => ({ ...value, startYear: moment(value.year[0]).format("YYYY"), endYear: moment(value.year[1]).format("YYYY") }))
                data.experiences = data.experiences.map(value => ({ ...value, startDate: moment(value.year[0]).format("YYYY-MM-DD"), endDate: moment(value.year[1]).format("YYYY-MM-DD") }))
                const { message, success } = await updateProfileQualificationService(data)
                store.dispatch(setLoading({ type, value: false }));
                if (!success) {
                    return notification.error({
                        description: message
                    })
                }

                store.dispatch(setProfile(message))
                push(`/profile?action=setup&step=4&accountType=${accountType}`)
            }
            break;

        default:
            break;
    }

}

const uploadImageMW = (store) => (next) => async (action) => {
    if (action.type !== 'user-profile/upload-image') return next(action);

    const { success, message } = await uploadImageService(action.payload.data, action.payload.config, action.payload.success)
    if (success) {
        const { success: profileImageSuccess, message: profileMessage } = await updateProfileService({ imageUrl: message.attachmentUrl.replace("download-document", "preview-image") })
        if (profileImageSuccess) {
            store.dispatch(setProfile(profileMessage))
            return
        }

        notification.error({
            description: "Could not upload profile image at the moment, please try again later"
        })
    }

    notification.error({
        description: message
    })
}

const uploadResumeAC = (store) => (next) => async (action) => {
    if (action.type !== 'user-profile/upload-resume') return next(action);

    const { success, message } = await uploadResumeACService(action.payload)
    if (!success) {
        return notification.error({
            description: message
        })
    }

    const profile = { ...store.getState().profileSlice.profile }
    const newProfile = { ...profile }
    newProfile.attachments = [...newProfile.attachments, message]
    store.dispatch(setProfile(newProfile))
    notification.success({
        description: "Resume uploaded successfully"
    })
}
const removeResumeAC = (store) => (next) => async (action) => {
    if (action.type !== 'user-profile/remove-resume') return next(action);

    const { success, message } = await removeResumeACService(action.payload)
    if (!success) {
        return notification.error({
            description: message
        })
    }

    const profile = { ...store.getState().profileSlice.profile }
    const newProfile = { ...profile }
    newProfile.attachments = newProfile.attachments.filter(value => value.id !== action.payload)
    store.dispatch(setProfile(newProfile))
    notification.success({
        description: "Resume removed successfully"
    })
}
const getFUllProfileMD = (store) => (next) => async (action) => {
    if (action.type !== 'user-profile/get-full-profile') return next(action);
    if (!localStorage["jobincast::user:token"]) return
    const { success, message } = await getFullProfileService()
    if (success) return store.dispatch(setProfile(message))
}


const payPalSuccessMW = store => next => async action => {
    if (action.type !== 'user-by-payal/points') return next(action);
    const profile = { ...store.getState().profileSlice.profile }
    const { message, success } = await payPalSuccessService({ ...action.payload, userId: profile.id });
    if (success) {

        const newProfile = { ...profile, availableUnits: message.userAvailableUnits }
        store.dispatch(setProfile(newProfile))
        return notification.success({
            description: `You have successfully purchased ${action.payload.quantity} pts`
        })
    }

    return notification.error({
        description: message
    })
}

const stripePaymentMD = store => next => async action => {
    if (action.type !== 'user-by-stripe/points') return next(action);
    const profile = { ...store.getState().profileSlice.profile }
    const { message, success } = await stripePaymentService({ ...action.payload, userId: profile.id });
    store.dispatch(setLoading({
        type: "stripeLoading",
        value: false
    }))
    if (success) {
        const newProfile = { ...profile, availableUnits: message.userAvailableUnits }
        store.dispatch(setProfile(newProfile))
        return notification.success({
            description: `You have successfully purchased ${action.payload.quantity} pts`
        })
    }

    return notification.error({
        description: message
    })
}

const profileMiddleware = [removeResumeAC, uploadResumeAC, stripePaymentMD, generalInformationCreateMW, uploadImageMW, getFUllProfileMD, payPalSuccessMW]

export default profileMiddleware;