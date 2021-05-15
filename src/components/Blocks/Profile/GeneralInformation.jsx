import React from 'react'

import { Button, Form, Input } from 'antd';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import PhoneInput from 'react-phone-input-2';

const GeneralInformation = ({ finishGeneralInfo }) => {
    return <Form layout="vertical" onFinish={finishGeneralInfo}>
        <div className="row">
            <div className="col-12 col-md-6">
                <Form.Item label="Resume Title" name="resumeTitle" rules={[{ required: true, message: "Title is required" }]}>
                    <Input placeholder="e.g John Doe Resume" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Job Title" name="jobTitle" rules={[{ required: true, message: "Job Title is required" }]}>
                    <Input placeholder="e.g Senior Frontend Engineer" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Languages" name="languages" rules={[{ required: true, message: "Language is required" }]}>
                    <Input placeholder="e.g English, French, German, e.t.c" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Highest Degree Level" name="languages" rules={[{ required: true, message: "Degree is required" }]}>
                    <Input placeholder="e.g English, French, German, e.t.c" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Country" name="country" rules={[{ required: true, message: "Country is required" }]}>
                    <CountryDropdown
                        classes="profile-inputs w-100"
                        onChange={(val) => console.log(val)}
                    />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="State/Province" name="region" rules={[{ required: true, message: "State/Province is required" }]}>
                    <RegionDropdown
                        classes="profile-inputs w-100"
                        country={"ngn"}
                        onChange={(val) => console.log(val)}
                    />
                </Form.Item>
            </div>
            <div className="col-12">
                <Form.Item label="Professional Summary" name="bio" rules={[{ required: true, message: "This field is required" }]}>
                    <Input.TextArea style={{ borderRadius: "10px" }} rows={6} />
                </Form.Item>
            </div>

            <div className="col-12">
                <h3>Contact Information</h3>
            </div>

            <div className="col-12 col-md-6">
                <Form.Item label="Phone Number" name="phone" rules={[{ type: "tel", require: true, message: "Phone Number is required" }]}>
                    <PhoneInput
                        inputClass="profile-inputs w-100"
                        country={'us'}
                        onChange={phone => console.log({ phone })}
                    />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Portfolio" name="portfolio" rules={[{ type: "url" }]}>
                    <Input placeholder="https://" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Facebook" name="facebook" rules={[{ type: "url" }]}>
                    <Input placeholder="https://" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Twitter" name="twitter" rules={[{ type: "url" }]}>
                    <Input placeholder="https://" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="linkedIn" name="LinkedIn" rules={[{ type: "url" }]}>
                    <Input placeholder="https://" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 text-center">
                <Button htmlType="submit" className="button-blue">Continue</Button>
            </div>
        </div>
    </Form>
}

export default GeneralInformation
