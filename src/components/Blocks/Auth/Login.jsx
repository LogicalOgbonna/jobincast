import { Button, Form, Input, Checkbox } from 'antd';
import React from 'react';

const Login = ({ loading, history, onFinish, page }) => {
    if (!page || page !== "login") return null;
    return (
        <Form layout="vertical" onFinish={onFinish} className="justify-content-center">
            <Form.Item name="email" required label="Email" className="logininput">
                <Input className="auth-inputs" placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" required label="Password" className="logininput">
                <Input.Password className="auth-inputs" placeholder="Password" />
            </Form.Item>
            <Form.Item name="check" className="text-center" required>
                <Checkbox checked>Remember Me</Checkbox>
            </Form.Item>
            <Form.Item name="button" className="text-center" required>
                <Button loading={loading} htmlType="submit" className="button-blue">Login</Button>
            </Form.Item>
            <Form.Item name="button" className="text-center" required>
                <Button
                    type="link"
                    onClick={() => history.push('/auth?action=reset-password')}
                    className="font-italic link-color-blue"
                >
                    <i className="fa fa-question mx-2 forgot-button-icon" /> Forgot Password?
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login
