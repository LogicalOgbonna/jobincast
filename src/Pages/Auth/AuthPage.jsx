import './Auth.less';

import { Button } from 'antd';
import queryString from 'query-string';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';

import BaseMarkup from '../../components/Base/BaseMarkup';
import { registerAction, verifyEmailAction, loginAction } from '../../store/auth/actions';
import { ForgotPasswordBlock, LoginBlock, RegisterBlock, ActivateAccountBlock } from '../../components/Blocks/Auth';



const AuthPage = ({ history: { location: { search } } }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { action, email } = queryString.parse(search)

    const submitRegister = (data) => dispatch(registerAction({ data, history }))
    const submitVerifyEmail = (data) => dispatch(verifyEmailAction({ data }))
    const submitLogin = (data) => dispatch(loginAction({ data, history }))


    const { loginLoading, registerLoading, resetPasswordLoading, verifyEmailLoading } = useSelector(({ authSlice }) => authSlice);
    if (localStorage.getItem("jobincast::user:token")) return <Redirect path="/" />;
    return (
        <BaseMarkup className="background-image-left">
            <div className="desktop-layout">
                <div className="auth-page container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 px-0 auth-page-content">
                            <div className="auth-content-header text-center">
                                {action === "login" && "Login to your account"}
                                {action === "register" && "Create an account"}
                                {action === "reset-password" && "Reset Password"}
                                {action === "activate-account" && "Activate account"}
                            </div>
                            <div className="toggle-buttons d-flex">
                                {action === "register" && <Button size="middle" onClick={() => history.push('/auth?action=login')} className="button-blue">Already have account ?  Login</Button>}
                                {(!action || action === "login") && <Button size="middle" onClick={() => history.push('/auth?action=register')} className="grey-button">Register</Button>}
                                {action === "activate-account" && <Button size="middle" onClick={() => history.push('/')} className="grey-button">Home</Button>}
                            </div>
                            {action === "reset-password" && <div className="toggle-buttons d-flex">
                                <Button size="middle" onClick={() => history.push('/auth?action=login')} className="button-blue">Already have account ?  Login</Button>
                                <Button size="middle" onClick={() => history.push('/auth?action=register')} className="grey-button mx-3">Register</Button>
                            </div>}
                            <div className="row justify-content-center py-5">
                                <div className="col-md-10">
                                    <LoginBlock
                                        history={history}
                                        loading={loginLoading}
                                        onFinish={submitLogin}
                                        page={action}
                                    />
                                    <RegisterBlock
                                        history={history}
                                        loading={registerLoading}
                                        onFinish={submitRegister}
                                        page={action}
                                    />
                                    <ForgotPasswordBlock
                                        history={history}
                                        loading={resetPasswordLoading}
                                        onFinish={(data => console.log(data))}
                                        page={action}
                                    />
                                    <ActivateAccountBlock
                                        email={email}
                                        history={history}
                                        loading={verifyEmailLoading}
                                        onFinish={submitVerifyEmail}
                                        page={action}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup >
    )
}

export default AuthPage
