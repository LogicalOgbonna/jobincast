/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import { Button, Form, Input, Select } from 'antd';
import { useSelector } from 'react-redux';

const { Option } = Select;

const jobCategories = [
    "ACCOUNTING_AND_FINANCE",
    "ENGINEERING",
    "TELECOMMUNICATIONS",
    "INTERNET_COMPUTING",
    "LEGAL",
    "BUSINESS_ADMINISTRATION",
    "HUMAN_CAPITAL",
    "SALES_AND_MARKETING",
    "MANUFACTURING",
    "BUILDING_AND_CONSTRUCTION",
    "HEALTHCARE",
    "SERVICES",
    "EDUCATIONS",
    "HOSPITALITY",
    "OTHERS"
]

const companySizeOptions = [
    '0-50',
    '50-100',
    '100-500',
    '500-1000',
]
const GeneralInformation = ({ finishGeneralInfo, accountType, loading }) => {

    const [form] = Form.useForm()

    const profile = useSelector(({ profileSlice: { profile } }) => profile)
    useEffect(() => {
        if (profile) form.setFieldsValue(profile)
    }, [profile])

    return <Form form={form} layout="vertical" onFinish={finishGeneralInfo}>
        <div className="row">
            <div className="col-12 col-md-6">
                <Form.Item label="Company Name" name="companyName" rules={[{ required: true, message: "Company Name is required" }]}>
                    <Input placeholder="e.g JobInCash" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Slogan" name="shortBio" rules={[{ required: true, message: "Slogan is required" }]}>
                    <Input placeholder="e.g We work remotely" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Category" name="category" rules={[{ required: true, message: "Category is required" }]}>
                    <Select placeholder="e.g Health" className="profile-inputs">
                        {jobCategories.map((category, key) => <Option key={key} value={category}> {category.replace(/_/g, " ")} </Option>)}
                    </Select>
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Company Size" name="companySize" rules={[{ required: true, message: "Company Size is required" }]}>
                    <Select placeholder="e.g 0-50" className="profile-inputs">
                        {companySizeOptions.map((category, key) => <Option key={key} value={category}> {category.replace(/_/g, " ")} </Option>)}
                    </Select>
                </Form.Item>
            </div>

            <div className="col-12">
                <Form.Item label="Company Description" name="fullBio" rules={[{ required: true, message: "Company Description is required" }]}>
                    <Input.TextArea style={{ borderRadius: "10px" }} rows={6} />
                </Form.Item>
            </div>

            <div className="col-12 text-center">
                <Button loading={loading} htmlType="submit" className="button-blue">Continue</Button>
            </div>
        </div>
    </Form >
}

export default GeneralInformation
