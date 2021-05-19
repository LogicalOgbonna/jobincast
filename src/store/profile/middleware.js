import { notification } from 'antd';
import { setLoading, setProfile } from './reducer'
import { createProfileService, createProfileContactService, updateProfileQualificationService, uploadImageService, updateProfileService, getFullProfileService } from './service';
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
                data.emailAddress = user?.username
                const { message, success } = await createProfileContactService(data)
                store.dispatch(setLoading({ type, value: false }));
                if (!success) {
                    return notification.error({
                        description: message
                    })
                }

                store.dispatch(setProfile({ ...profile, contact: message }))
                push(`/profile?action=setup&step=3&accountType=${accountType}`)
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
}
const getFUllProfileMD = (store) => (next) => async (action) => {
    if (action.type !== 'user-profile/get-full-profile') return next(action);
    if (!localStorage["jobincast::user:token"]) return
    const { success, message } = await getFullProfileService()
    if (success) return store.dispatch(setProfile(message))
}


const profileMiddleware = [generalInformationCreateMW, uploadImageMW, getFUllProfileMD]

export default profileMiddleware;