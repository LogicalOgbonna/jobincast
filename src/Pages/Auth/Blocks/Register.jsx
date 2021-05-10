import React from 'react'
import { Button, Form, Input, Checkbox, Select } from 'antd'
import { NavLink } from 'react-router-dom';

const { Option } = Select;

const Register = ({ onFinish, loading, }) => {
    return (
        <Form layout="vertical" onFinish={onFinish}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <Form.Item
                        name="firstName"
                        rules={[{ required: true, message: 'Please enter your first name' }]}
                        label="First Name"
                    >
                        <Input className="auth-inputs" placeholder="First Name" />
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item
                        name="lastName"
                        rules={[{ required: true, message: 'Please enter your last name' }]}
                        label="Last Name"
                    >
                        <Input className="auth-inputs" placeholder="Last Name" />
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please enter your email' }]}
                        label="Email"
                    >
                        <Input className="auth-inputs" placeholder="Email" />
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item
                        name="userType"
                        className="text-center"
                        rules={[{ required: true, message: 'Please select who you are' }]}
                        label="You are?"
                    >
                        <Select placeholder="I’m an employer looking to hire">
                            <Option value="EMPLOYER">Employer</Option>
                            <Option value="APPLICANT">Applicant</Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item
                        name="password" rules={[{ required: true, message: 'Please enter your password' }]}
                        label="Password"
                    >
                        <Input.Password className="auth-inputs" placeholder="Password" />
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item
                        name="confirmPassword"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                        label="Retype Password">
                        <Input.Password className="auth-inputs" placeholder="Retype Password" />
                    </Form.Item>
                </div>
            </div>
            <Form.Item
                name="agreement"
                valuePropName="checked"
                className="text-center"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Please accept terms and condition')),
                    },
                ]}
            >
                <Checkbox>
                    I agree with the  <NavLink to="/terms">terms and conditions</NavLink>
                </Checkbox>
            </Form.Item>
            <Form.Item
                name="button"
                className="text-center"
            >
                <Button loading={loading} htmlType="submit" className="button-blue">Register</Button>
            </Form.Item>
        </Form>
    )
}

export default Register
