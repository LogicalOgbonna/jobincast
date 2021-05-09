import { registerService, verifyEmailService, loginService } from './service'
import { setLoading, setusers } from './reducer'
import { notification } from 'antd';

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

    store.dispatch(setusers(message))
    history.push(`/auth?action=activate-account&email=${message.email}`)

}

const verifyEmailMW = (store) => (next) => async action => {
    if (action.type !== 'user/verify-email') return next(action);
    store.dispatch(setLoading({ type: "verifyEmailLoading", value: true }))
    const { data: { token }, history } = action.payload

    const { message, success } = await verifyEmailService(token);
    store.dispatch(setLoading({ type: "verifyEmailLoading", value: false }))
    if (!success) {
        return notification.error({
            description: message,
            duration: 10
        })
    }

    notification.success({
        message: 'Email verified',
        description: 'Welcome to JobInCast'
    })
    store.dispatch(setusers(message))
    history.push('/dashboard')
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
    store.dispatch(setusers(message))
    history.push('/dashboard')

}

const authMiddleware = [registerMW, verifyEmailMW, loginMW];

export default authMiddleware