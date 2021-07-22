/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input, Tooltip, Select } from 'antd';
import React, { useEffect, } from 'react';
import { useSelector } from 'react-redux';
import './GeneralInformation.less'
const { Option } = Select;

const GeneralInformation = ({ finishGeneralInfo, removeResume, loading, onResumeInputChange }) => {

    const [form] = Form.useForm()

    const profile = useSelector(({ profileSlice: { profile } }) => profile)
    useEffect(() => {
        if(profile?.title || profile?.shortBio)  form.setFieldsValue(profile)
    }, [profile])

    return <Form form={form} layout="vertical" onFinish={finishGeneralInfo}>
        <div className="row">
            <div className="col-12 col-md-6">
                <Form.Item label="Title" name="title" rules={[{ required: true, message: "Title is required" }]}>
                    <Input placeholder="e.g Fullstack Web Developer" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Teaser" name="shortBio" rules={[{ required: true, message: "Title is required" }]}>
                    <Input placeholder="e.g I'm available for work" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Languages" name="language" rules={[{ required: true, message: "Language is required" }]}>
                    <Input placeholder="e.g English, French, German, e.t.c" className="profile-inputs" />
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Years of Experience" name="yearsOfExperience" rules={[{ required: true, message: "Years of Experience is required" }]}>
                    <Select placeholder="e.g 0-1 year" className="profile-inputs">
                        <Option value="0-1"> 0-1 Year </Option>
                        <Option value="2-5">2-5 Years </Option>
                        <Option value="6-10">6-10 Years </Option>
                        <Option value="more than 10">more than 10 Years </Option>
                    </Select>
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Highest Degree Level" name="degree" rules={[{ required: true, message: "Degree is required" }]}>
                    <Select placeholder="e.g BSc" className="profile-inputs">
                        <Option value="DIPLOMA"> Diploma </Option>
                        <Option value="HIGHER_D"> Higher Diploma </Option>
                        <Option value="BSC"> Degree </Option>
                        <Option value="MASTERS">Masters </Option>
                        <Option value="PHD">PhD </Option>
                    </Select>
                </Form.Item>
            </div>
            <div className="col-12 col-md-6">
                <Form.Item label="Upload Resume" name="resume">
                    <Input accept=".pdf,.doc,.docx" value="" onChange={onResumeInputChange} type="file" placeholder="Resume" />
                    <div className="tag-container">
                        {profile?.attachments?.map(value =>
                            <div key={value.id} className="individual-tag">
                                <Tooltip overlayStyle={{ fontSize: 10 }} title={value.attachmentName}>
                                    <div className="value">{value.attachmentName}</div>
                                </Tooltip>
                                <div onClick={() => removeResume(value.id)} className="close">X</div>
                            </div>
                        )}
                    </div>
                </Form.Item>
            </div>

            <div className="col-12">
                <Form.Item label="Professional Summary" name="fullBio" rules={[{ required: true, message: "This field is required" }]}>
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
