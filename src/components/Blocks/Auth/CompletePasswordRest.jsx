import { Button, Form, Input } from 'antd'
import React from 'react'

const CompletePasswordRest = ({ loading, onFinish, page }) => {
    if (page !== "complete-reset-password") return null;
    return (
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item name="token" label="Token" rules={[{ required: true }]}>
                <Input className="auth-inputs" placeholder="378298" />
            </Form.Item>
            <Form.Item name="newPassword" label="New Password" rules={[{ required: true }]}>
                <Input.Password className="auth-inputs" />
            </Form.Item>
            <Form.Item name="confirmNewPassword" label="Confirm New Password"
                dependencies={['newPassword']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('newPassword') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password className="auth-inputs" />
            </Form.Item>
            <Form.Item name="button" className="text-right" required>
                <Button loading={loading} htmlType="submit" className="button-blue">Set Password</Button>
            </Form.Item>
        </Form>
    )
}

export default CompletePasswordRest
