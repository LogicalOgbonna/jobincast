import { registerService, verifyEmailService, loginService } from './service'
import { setLoading, setUser } from './reducer'
import { notification } from 'antd';
import { setDefaultBearer } from '../../axios';
import jwtDecode from "jwt-decode";

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
    window.location.href = "/profile?action=setup&step=1"
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

    notification.success({
        description: 'Welcome back'
    })
    localStorage.setItem("jobincast::user:token", message.token)
    store.dispatch(setUser(decodeToken(message.token)))
    history.push('/')

}

const setUserFromLocalStorageMW = store => next => action => {
    if (action.type !== 'app/set-user-from-local-storage') return next(action);
    store.dispatch(setUser(decodeToken()))

}

const authMiddleware = [registerMW, verifyEmailMW, loginMW, setUserFromLocalStorageMW];

export default authMiddleware