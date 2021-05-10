import { Button, Form, Input } from 'antd';
import React from 'react';

const ForgotPassword = ({ loading, onFinish }) => {
    return (
        <React.Fragment>
            <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
            <Form layout="vertical" onFinish={onFinish} >
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Email is required' }]}
                >
                    <Input className="auth-inputs" placeholder="Email" />
                </Form.Item>
                <Form.Item name="button" className="text-right" required>
                    <Button loading={loading} htmlType="submit" className="button-blue">Reset Password</Button>
                </Form.Item>
            </Form>
        </React.Fragment>
    )
}

export default ForgotPassword
