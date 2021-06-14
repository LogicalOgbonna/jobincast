/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectCountry } from '../../../../store/utils/countries';


const { Option } = Select
const ContactInfo = ({ onFinish, accountType, loading, step }) => {

    const [form] = Form.useForm()

    const profile = useSelector(({ profileSlice: { profile } }) => profile)
    const [contact, setContact] = useState({ webSiteUrl: "" })
    const [country, setCountry] = useState("")
    useEffect(() => {
        if (profile?.contact) form.setFieldsValue(profile?.contact)
        setCountry(profile?.contact?.country)
    }, [profile, accountType, step])
    const { push } = useHistory()
    const back = () => push(`/profile?action=setup&step=1&accountType=${accountType}`);

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <Form.Item label="Country" name="country" rules={[{ required: true, message: "Country is required" }]}>
                        <Select placeholder="Select Country" onChange={(value) => setCountry(value)} className="profile-inputs">
                            {Object.keys(selectCountry).map((value, index) => <Option value={value} key={index} className="text-capitalize">{value.toLowerCase()}</Option>)}
                        </Select>
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item label="State/Province" name="state" rules={[{ required: true, message: "State/Province is required" }]}>
                        <Select notFoundContent={<span className="text-center">Please Select Country</span>} placeholder={country ? "Select State/Province" : "Please Select Country"} className="profile-inputs">
                            {country && selectCountry[country] && selectCountry[country].map((value, index) => <Option value={value} key={index}>{value}</Option>)}
                        </Select>
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item label="Phone Number" name="phone">
                        <PhoneInput
                            country="my"
                            enableSearch
                            inputclassName="profile-inputs w-100"
                        />
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item label="Address" name="address" rules={[{ required: true }]}>
                        <Input placeholder="" className="profile-inputs" />
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item label="Company Website" name="websiteUrl" rules={[{ type: "string", }]}>
                        <Input addonBefore="https://" placeholder="jobincast.com" className="profile-inputs" />
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item label="Facebook" name="facebookUrl" rules={[{ type: "string" }]}>
                        <Input addonBefore="https://" placeholder="jobincast.com" className="profile-inputs" />
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item label="Twitter" name="twitterUrl" rules={[{ type: "string" }]}>
                        <Input addonBefore="https://" placeholder="jobincast.com" className="profile-inputs" />
                    </Form.Item>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Item label="linkedIn" name="linkedInUrl" rules={[{ type: "string" }]}>
                        <Input addonBefore="https://" placeholder="jobincast.com" className="profile-inputs" />
                    </Form.Item>
                </div>
                <div className="col-12 text-center d-flex justify-content-center">
                    <Button htmlType="button" onClick={back} className="button-blue mx-1">Back</Button>
                    <Button loading={loading} htmlType="submit" className="button-blue mx-1">Finish</Button>
                </div>
            </div>
        </Form>
    )
}

export default ContactInfo
