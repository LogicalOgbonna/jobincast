import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd'
import React, { useState } from 'react'


import file from "./file.json";

import { useHistory } from 'react-router';

const selectCountry = {};
file.forEach(({ Country, state }) => {
    selectCountry[Country.toUpperCase()] ? selectCountry[Country.toUpperCase()].push(state) : selectCountry[Country.toUpperCase()] = [state]
})


const { Option } = Select;

const jobType = [
    "REMOTE",
    "ON-SITE",
    "FULL-TIME",
    "PART-TIME"
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
    "Senior",
    "Mid-Level",
    "Junior",
    "Intern"
]
const JobDetails = ({ onFinish, loading, accountType, step }) => {


    const { push } = useHistory()
    const back = () => push(`/profile?action=setup&step=2&accountType=${accountType}`);
    const [country, setCountry] = useState("")
    const [selectJob, setJob] = useState('')
    return (
        <Form layout="vertical" onFinish={onFinish}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <Form.Item label="Title" name="jobTitle" rules={[{ required: true, message: "Job Title is required" }]}>
                        <Input placeholder="Senior Frontend Developer" className="profile-inputs" />
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item label="Experience" name="experienceLevel" rules={[{ required: true, message: "Job Experience is required" }]}>
                        <Select placeholder="e.g Senior" className="profile-inputs">
                            {jobExperienceLevel.map((experience, key) => <Option key={key} value={experience}> {experience} </Option>)}
                        </Select>
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item label="Type" name="jobType" rules={[{ required: true, message: "Job Type is required" }]}>
                        <Select placeholder="e.g Full Time" onChange={setJob} className="profile-inputs">
                            {jobType.map((category, key) => <Option key={key} value={category}> {category} </Option>)}
                        </Select>
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item label="Category" name="jobCategory" rules={[{ required: true, message: "Job Category is required" }]}>
                        <Select placeholder="e.g Health" className="profile-inputs">
                            {jobCategories.map((category, key) => <Option key={key} value={category}> {category.replace(/_/g, " ")} </Option>)}
                        </Select>
                    </Form.Item>
                </div>
                {selectJob !== "REMOTE" &&
                    <>
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
                    </>
                }
                <div className="col-12 col-md-6">
                    <Form.Item label="Minimum Salary" name="minAmount" >
                        <InputNumber
                            defaultValue={100}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            className="profile-inputs w-100 pt-1"
                            placeholder="Minimum"
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        />
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item label="Maximum Salary" name="maxAmount" >
                        <InputNumber
                            defaultValue={1000}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            className="profile-inputs w-100 pt-1"
                            placeholder="Maximum"
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        />
                    </Form.Item>
                </div>

                <div className="col-12 col-md-6">
                    <Form.Item label="Minimum Degree Level" name="degree">
                        <Select placeholder="e.g BSc" className="profile-inputs">
                            <Option value="BSc"> BSc </Option>
                            <Option value="Masters">Masters </Option>
                            <Option value="PhD">PhD </Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item label="Application Deadline" name="deadline">
                        <DatePicker placeholder="Year Awarded" className="profile-inputs w-100" />
                    </Form.Item>
                </div>

                <div className="col-12">
                    <Form.Item label="Job Description" name="jobDescription" rules={[{ required: true, message: "Job Description is required" }]}>
                        <Input.TextArea style={{ borderRadius: "10px" }} rows={6} />
                    </Form.Item>
                </div>

                <div className="col-12 text-center d-flex justify-content-center mt-3">
                    <Button htmlType="button" onClick={back} className="button-blue mx-1">Back</Button>
                    <Button loading={loading} htmlType="submit" className="button-blue mx-1">Preview</Button>
                </div>
                <div className="col-12 text-center my-3">
                    <Button type="text" className="text-muted" onClick={() => push("/")}>Return to Dashboard</Button>
                </div>
            </div>
        </Form>
    )
}

export default JobDetails
