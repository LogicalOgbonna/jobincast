import { Button, Form, Input } from 'antd';
import React from 'react';
const AcctivateAccount = ({ loading, onFinish, email }) => {
    return (
        <React.Fragment>
            <p>Please enter token sent to <span className="text-danger">{email}</span></p>
            <Form layout="vertical" onFinish={onFinish} >
                <Form.Item
                    name="token"
                    label="Enter Token"
                    rules={[{ required: true, message: 'Token is required' }]}
                >
                    <Input className="auth-inputs" placeholder="Enter Token" />
                </Form.Item>
                <Form.Item name="button" className="text-right" required>
                    <Button loading={loading} htmlType="submit" className="button-blue">Verify Email</Button>
                </Form.Item>
            </Form>
        </React.Fragment>
    )
}

export default AcctivateAccount
