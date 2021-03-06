import { registerService, verifyEmailService, loginService, resetPasswordService, completeResetPasswordService } from './service'
import { setLoading, setUser } from './reducer'
import { notification } from 'antd';
import { setDefaultBearer } from '../../axios';
import jwtDecode from "jwt-decode";
import { getFullProfileService } from '../profile/service';
import { setProfile } from '../profile/reducer';

export const decodeToken = (token) => {
    if (token) return jwtDecode(token);
    if (localStorage["jobincast::user:token"]) return jwtDecode(localStorage["jobincast::user:token"])
    return null;
}

const registerMW = (store) => (next) => async action => {
    if (action.type !== 'user/register') return next(action);
    store.dispatch(setLoading({ type: "registerLoading", value: true }))
    const { data, history } = action.payload
    const { message, success } = await registerService(data)
    store.dispatch(setLoading({ type: "registerLoading", value: false }))
    if (!success) {
        return notification.error({
            description: message,
            duration: 10
        })
    }

    notification.success({
        message: 'Registration successful',
        description: 'Activation code has been sent to your email'
    })

    store.dispatch(setUser(message))
    history.push(`/auth?action=activate-account&email=${message.email}`)

}

const verifyEmailMW = (store) => (next) => async action => {
    if (action.type !== 'user/verify-email') return next(action);
    store.dispatch(setLoading({ type: "verifyEmailLoading", value: true }))
    const { data: { token } } = action.payload

    const { message, success } = await verifyEmailService(token);
    store.dispatch(setLoading({ type: "verifyEmailLoading", value: false }))
    if (!success) {
        return notification.error({
            description: message,
            duration: 10
        })
    }
    setDefaultBearer(message.loginResponse.token)
    localStorage.setItem("jobincast::user:token", message.loginResponse.token)
    store.dispatch(setUser(decodeToken(message.loginResponse.token)))
    window.location.href = `/profile?action=setup&step=1&accountType=${message.userDTO.userType}`
}

const loginMW = (store) => (next) => async action => {
    if (action.type !== 'user/login') return next(action)
    store.dispatch(setLoading({ type: "loginLoading", value: true }))
    const { data, history } = action.payload
    const { message, success } = await loginService(data);
    store.dispatch(setLoading({ type: "loginLoading", value: false }))
    if (!success) {
        return notification.error({
            description: message,
            duration: 10
        })
    }
    setDefaultBearer(message.token)
    localStorage.setItem("jobincast::user:token", message.token)

    const { message: user, success: userSuccess } = await getFullProfileService();
    if (!userSuccess) {
        return notification.error({
            description: message,
            duration: 10
        })
    }
    notification.success({
        description: 'Welcome back'
    })

    store.dispatch(setUser(decodeToken(message.token)))
    store.dispatch(setProfile(user))
    history.push('/')

}

const resetPasswordMW = store => next => async action => {
    if (action.type !== "user/reset-password") return next(action);
    store.dispatch(setLoading({
        type: "resetPasswordLoading",
        value: true
    }))
    const { success, message } = await resetPasswordService(action.payload.data);
    store.dispatch(setLoading({
        type: "resetPasswordLoading",
        value: false
    }))
    if (!success) return notification.error({
        description: message
    })
    notification.success({
        description: "A token has been sent you your mail"
    });

    action.payload.history.push("/auth?action=complete-reset-password")
}
const completeResetPasswordMW = store => next => async action => {
    if (action.type !== "user/complete-reset-password") return next(action);
    store.dispatch(setLoading({
        type: "completePasswordLoading",
        value: true
    }))
    const { success, message } = await completeResetPasswordService({
        newPassword: action.payload.data.newPassword,
        token: action.payload.data.token
    });
    store.dispatch(setLoading({
        type: "completePasswordLoading",
        value: false
    }))
    if (!success) return notification.error({
        description: message
    })
    notification.success({
        description: "Password Set successfully"
    });

    action.payload.history.push("/auth?action=login")
}

const setUserFromLocalStorageMW = store => next => action => {
    if (action.type !== 'app/set-user-from-local-storage') return next(action);
    store.dispatch(setUser(decodeToken()))

}

const authMiddleware = [registerMW, verifyEmailMW, loginMW, setUserFromLocalStorageMW, resetPasswordMW, completeResetPasswordMW];

export default authMiddleware