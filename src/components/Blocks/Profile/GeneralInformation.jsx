/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import { Button, Form, Input, Select } from 'antd';
import { useSelector } from 'react-redux';

const { Option } = Select;

const GeneralInformation = ({ finishGeneralInfo, accountType, loading }) => {

    const [form] = Form.useForm()

    const profile = useSelector(({ profileSlice: { profile } }) => profile)
    useEffect(() => {
        if(profile) form.setFieldsValue(profile)
    }, [profile])

    return <Form form={form} layout="vertical" onFinish={finishGeneralInfo}>
        <div className="row col-md-11 mid-position">
        <div className="col-12 col-md-12">
                <Form.Item label="Job Title" name="language" rules={[{ required: true, message: "Please enter your job title" }]}>
                    <Input placeholder="e.g Graphic Designer" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-12">
                <Form.Item label="Bio" name="shortBio" rules={[{ required: true, message: "Title is required" }]}>
                    <Input.TextArea placeholder="e.g I'm available for work" style={{ borderRadius: "10px" }} rows={5} />
                </Form.Item>
            </div>
            <div className="col-12 col-md-12">
                <Form.Item label="Languages" name="language" rules={[{ required: false, message: "Language is required" }]}>
                    <Input placeholder="e.g English, French, German, e.t.c" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Years of Experience" name="yearsOfExperience" rules={[{ required: true, message: "Years of Experience is required" }]}>
                    <Select placeholder="e.g 0-1 year" className="profile-inputs">
                        <Option value="0-1"> 0-1 Year </Option>
                        <Option value="2-5">2-5 Years </Option>
                        <Option value="6-10">6-10 Years </Option>
                    </Select>
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Highest Degree Level" name="degree" rules={[{ required: true, message: "Degree is required" }]}>
                    <Select placeholder="e.g BSc" className="profile-inputs">
                        <Option value="BSc"> BSc </Option>
                        <Option value="Masters">Masters </Option>
                        <Option value="PhD">PhD </Option>
                    </Select>
                </Form.Item>
            </div>

            <div className="col-12">
                <Form.Item label="Professional Summary" name="fullBio" rules={[{ required: true, message: "This field is required" }]}>
                    <Input.TextArea style={{ borderRadius: "10px" }} rows={12} />
                </Form.Item>
            </div>

            <div className="col-12 text-center">
                <Button loading={loading} htmlType="submit" className="button-blue">Continue</Button>
            </div>
        </div>
    </Form >
}

export default GeneralInformation
