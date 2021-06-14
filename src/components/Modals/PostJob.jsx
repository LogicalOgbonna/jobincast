import { Button, DatePicker, Form, Input, InputNumber, Modal, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import './PostJob.less'


import file from "../countries.json";

import { useHistory } from 'react-router';
import { useForm } from 'antd/lib/form/Form';

const selectCountry = {};
file.forEach(({ Country, state }) => {
    selectCountry[Country.toUpperCase()] ? selectCountry[Country.toUpperCase()].push(state) : selectCountry[Country.toUpperCase()] = [state]
})


const { Option } = Select;

const jobType = [
    "CONTRACT",
    "PART_TIME",
    "FULL_TIME",
    "REMOTE",
    "FREELANCE",
    "ON_PREMISE",
    "MIXED_REMOTE"
]


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

const jobExperienceLevel = [
    "ENTRY",
    "JUNIOR",
    "INTERMEDIATE",
    "SENIOR",
    "EXPERT"
]

const currencies = [
    "USD",
    "EUR",
    "GBP",
    "RINGGIT",
    "BAHT",
    "SGD",
    "RUPIAH",
    "PESO",
    "DONG",
    "RUPEE"
]
const PostJobModal = ({ onFinish, loading, toggle, open, editableJob }) => {


    const [form] = useForm()
    const { push } = useHistory()
    const [country, setCountry] = useState("")
    const [selectJob, setJob] = useState('')

    useEffect(() => {
        if (editableJob) form.setFieldsValue(editableJob)
    }, [editableJob])

    return (
        <Modal width={700} onCancel={toggle} visible={open} footer={null} style={{ borderRadius: 10 }} >
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Form.Item label="Title" name="jobTitle" rules={[{ required: true, message: "Job Title is required" }]}>
                            <Input  className="profile-inputs" />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Item label="Experience" name="experienceLevel" rules={[{ required: true, message: "Job Experience is required" }]}>
                            <Select  className="profile-inputs">
                                {jobExperienceLevel.map((experience, key) => <Option key={key} value={experience} className="text-capitalize"> {experience} </Option>)}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Item label="Type" name="jobType" rules={[{ required: true, message: "Job Type is required" }]}>
                            <Select onChange={setJob} className="profile-inputs">
                                {jobType.map((type, key) => <Option key={key} value={type} className="text-capitalize"> {type.replace(/_/g, " ")} </Option>)}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Item label="Category" name="jobCategory" rules={[{ required: true, message: "Job Category is required" }]}>
                            <Select className="profile-inputs">
                                {jobCategories.map((category, key) => <Option key={key} value={category} className="text-capitalize"> {category.replace(/_/g, " ")} </Option>)}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Item label="Country" name="jobCountry" rules={[{ required: true, message: "Country is required for a none REMOTE position" }]}>
                            <Select placeholder="Select Country" onChange={(value) => setCountry(value)} className="profile-inputs">
                                {Object.keys(selectCountry).map((value, index) => <Option value={value} key={index} className="text-capitalize">{value.toLowerCase()}</Option>)}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Item label="State/Province" name="jobLocation" rules={[{ required: true, message: "State/Province is required for a none REMOTE position" }]}>
                            <Select notFoundContent={<span className="text-center">Please Select Country</span>} placeholder={country ? "Select State/Province" : "Please Select Country"} className="profile-inputs">
                                {country && selectCountry[country] && selectCountry[country].map((value, index) => <Option value={value} key={index}>{value}</Option>)}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Item label="Currency" name="currency" rules={[{ required: true, message: "Currency is required" }]}>
                            <Select className="profile-inputs">
                                {currencies.map((currency, key) => <Option key={key} value={currency} className="text-capitalize"> {currency} </Option>)}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Item label="Minimum Salary Monthly" name="minAmount" rules={[{ required: true, message: "Minimum Salary is required" }]} >
                            <InputNumber
                                defaultValue={100}
                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                className="profile-inputs w-100 pt-1"
                                
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Item label="Maximum Salary Monthly" name="maxAmount" rules={[{ required: true, message: "Maximum Salary is required" }]}>
                            <InputNumber
                                defaultValue={1000}
                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                className="profile-inputs w-100 pt-1"
                                
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            />
                        </Form.Item>
                    </div>

                    <div className="col-12 col-md-6">
                        <Form.Item label="Minimum Degree Level" name="degree">
                            <Select  className="profile-inputs">
                                <Option value="Diploma"> Diploma </Option>
                                <Option value="Higher Diploma"> Higher Diploma </Option>
                                <Option value="Degree"> Degree </Option>
                                <Option value="Masters">Masters </Option>
                                <Option value="PhD">PhD </Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Item label="Application Deadline" name="deadline">
                            <DatePicker  className="profile-inputs w-100" />
                        </Form.Item>
                    </div>

                    <div className="col-12">
                        <Form.Item label="Job Description" name="jobDescription" rules={[{ required: true, message: "Job Description is required" }]}>
                            <Input.TextArea style={{ borderRadius: "10px" }} rows={6} />
                        </Form.Item>
                    </div>

                    <div className="col-12 text-center d-flex justify-content-center mt-3">
                        {/* <Button htmlType="button" onClick={back} className="button-blue mx-1">Back</Button> */}
                        <Button loading={loading} htmlType="submit" className="button-blue mx-1">Post</Button>
                    </div>
                    <div className="col-12 text-center my-3">
                        <Button type="text" className="text-muted" onClick={() => push("/")}>Return to Dashboard</Button>
                    </div>
                </div>
            </Form>
        </Modal>
    )
}

export default PostJobModal