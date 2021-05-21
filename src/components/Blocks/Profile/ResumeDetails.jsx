/* eslint-disable react-hooks/exhaustive-deps */
import { CloseCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Form, Input, Select, DatePicker, Button } from 'antd';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
const { RangePicker } = DatePicker;
const { Option } = Select;
const ResumeDetails = ({ onFinish, accountType, loading }) => {
    const { push } = useHistory()
    const [form] = Form.useForm()

    const profile = useSelector(({ profileSlice: { profile } }) => profile)
    useEffect(() => {
        if (profile) {
            const educations = profile.educations.map(education => ({ ...education, year: [moment(education.startYear), moment(education.endYear)] }))
            const experiences = profile.experiences.map(experience => ({ ...experience, year: [moment(experience.startDate), moment(experience.endDate)] }))
            const awards = profile.awards.map(award => ({ ...award, yearAwarded: moment(award.yearAwarded) }))
            form.setFieldsValue({ skills: profile.skills, educations, experiences, awards })
        }
    }, [profile])

    const back = () => push(`/profile?action=setup&step=2&accountType=${accountType}`);
    return (
        <Form form={form} layout="vertical" onFinish={onFinish}
            initialValues={{ educations: [""], experiences: [""], skills: [""], awards: [""] }}
        >
            <div className="row justify-content-center">
                <div className="col-md-12 di-contents">
                    <div className="col-12 col-md-6">
                        <Form.List
                            name="educations"
                            rules={[
                                {
                                    validator: async (_, names) => {
                                        if (!names || names.length < 1) {
                                            return Promise.reject(new Error('Please add at least one degree'));
                                        }
                                    },
                                },
                            ]}
                        >
                            {(fields, { add, remove }, { errors }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...field }, index) => {

                                        return (
                                            <Form.Item
                                                className="bg-grey py-3 px-2 mb-2"
                                                style={{ borderRadius: '10px' }}
                                                // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                                label="Education"
                                                required={false}
                                                key={key}
                                            >
                                                <Form.Item
                                                    name={[name, 'institution']}
                                                    fieldKey={[fieldKey, 'institution']}
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        {
                                                            required: false,
                                                            whitespace: true,
                                                            message: "Please input school's name or delete this field.",
                                                        },
                                                    ]}
                                                    noStyle
                                                >
                                                    <Input placeholder="Institution Name" className="profile-inputs" />
                                                </Form.Item>
                                                <Form.Item
                                                    name={[name, 'degree']}
                                                    fieldKey={[fieldKey, 'degree']}
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        {
                                                            required: false,
                                                            whitespace: true,
                                                            message: "Please input degree or certificate earned or delete this field.",
                                                        },
                                                    ]}
                                                    noStyle
                                                >
                                                    <Input placeholder="Degree or Certificate Earned" className="profile-inputs" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...field}
                                                    name={[name, 'year']}
                                                    fieldKey={[fieldKey, 'year']}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        {
                                                            required: false,
                                                            message: "Please select start and end year or delete this field.",
                                                        },
                                                    ]}
                                                    noStyle
                                                >
                                                    <RangePicker className="w-100 profile-inputs" picker="year" />
                                                </Form.Item>
                                                {fields.length > 1 ? (
                                                    <div size="small" style={{ cursor: "pointer" }} onClick={() => remove(name)} className="d-flex justify-content-end align-items-center text-danger text-right">
                                                        <CloseCircleOutlined
                                                            className="dynamic-delete-button bg-red text-danger px-1"
                                                        />
                                                    Delete
                                                    </div>
                                                ) : null}
                                            </Form.Item>
                                        )
                                    })}
                                    <Form.Item>
                                        <div size="small" style={{ cursor: "pointer" }} onClick={() => add()} className="d-flex justify-content-start align-items-center text-muted text-right">
                                            <PlusCircleOutlined
                                                className="dynamic-delete-button bg-red text-muted px-1"
                                            />
                                            Add Education
                                        </div>
                                        <Form.ErrorList errors={errors} />
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>

                        <Form.List
                            name="experiences"
                            rules={[
                                {
                                    validator: async (_, names) => {
                                        if (!names || names.length < 1) {
                                            return Promise.reject(new Error('Please add at least one degree'));
                                        }
                                    },
                                },
                            ]}
                        >
                            {(fields, { add, remove }, { errors }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...field }, index) => {

                                        return (
                                            <Form.Item
                                                className="bg-grey py-3 px-2 mb-2"
                                                style={{ borderRadius: '10px' }}
                                                label="Experiences"
                                                required={false}
                                                key={key}
                                            >
                                                <Form.Item
                                                    name={[name, 'company']}
                                                    fieldKey={[fieldKey, 'company']}
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        {
                                                            required: false,
                                                            whitespace: true,
                                                            message: "Please input company's name or delete this field.",
                                                        },
                                                    ]}
                                                    noStyle
                                                >
                                                    <Input placeholder="Company Name" className="profile-inputs" />
                                                </Form.Item>
                                                <Form.Item
                                                    name={[name, 'jobTitle']}
                                                    fieldKey={[fieldKey, 'jobTitle']}
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            whitespace: true,
                                                            message: "Please input Job Title or delete this field.",
                                                        },
                                                    ]}
                                                    noStyle
                                                >
                                                    <Input placeholder="Position Held" className="profile-inputs" />
                                                </Form.Item>
                                                <Form.Item
                                                    name={[name, 'jobDescription']}
                                                    fieldKey={[fieldKey, 'jobDescription']}
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            whitespace: true,
                                                            message: "Please input Job Description or delete this field.",
                                                        },
                                                    ]}
                                                    noStyle
                                                >
                                                    <Input.TextArea rows={4} style={{ borderRadius: "10px" }} placeholder="Job Description" className="w-100 mb-1" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...field}
                                                    name={[name, 'year']}
                                                    fieldKey={[fieldKey, 'year']}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Please select start and end year or delete this field.",
                                                        },
                                                    ]}
                                                    noStyle
                                                >
                                                    <RangePicker className="w-100 profile-inputs" />
                                                </Form.Item>
                                                {fields.length > 1 ? (
                                                    <div size="small" style={{ cursor: "pointer" }} onClick={() => remove(name)} className="d-flex justify-content-end align-items-center text-danger text-right">
                                                        <CloseCircleOutlined
                                                            className="dynamic-delete-button bg-red text-danger px-1"
                                                        />
                                                    Delete
                                                    </div>
                                                ) : null}
                                            </Form.Item>
                                        )
                                    })}
                                    <Form.Item>
                                        <div size="small" style={{ cursor: "pointer" }} onClick={() => add()} className="d-flex justify-content-start align-items-center text-muted text-right">
                                            <PlusCircleOutlined
                                                className="dynamic-delete-button bg-red text-muted px-1"
                                            />
                                            Add Experience
                                        </div>
                                        <Form.ErrorList errors={errors} />
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.List
                            name="skills"
                            rules={[
                                {
                                    validator: async (_, names) => {
                                        if (!names || names.length < 1) {
                                            return Promise.reject(new Error('Please add at least one degree'));
                                        }
                                    },
                                },
                            ]}
                        >
                            {(fields, { add, remove }, { errors }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...field }, index) => {

                                        return (
                                            <Form.Item
                                                className="bg-grey py-3 px-2 mb-2"
                                                style={{ borderRadius: '10px' }}
                                                // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                                label="Skills"
                                                required={false}
                                                key={key}
                                            >
                                                <div className="row">
                                                    <div className="col-md-8 col-12">
                                                        <Form.Item
                                                            name={[name, 'name']}
                                                            fieldKey={[fieldKey, 'name']}
                                                            {...field}
                                                            validateTrigger={['onChange', 'onBlur']}
                                                            rules={[
                                                                {
                                                                    required: false,
                                                                    whitespace: true,
                                                                    message: "Please input Skill name or delete this field.",
                                                                },
                                                            ]}
                                                            noStyle
                                                        >
                                                            <Input placeholder="Skill Name" className="profile-inputs" />
                                                        </Form.Item>
                                                    </div>
                                                    <div className="col-md-4 col-12">
                                                        <Form.Item
                                                            name={[name, 'experienceLevel']}
                                                            fieldKey={[fieldKey, 'experienceLevel']}
                                                            {...field}
                                                            validateTrigger={['onChange', 'onBlur']}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    whitespace: true,
                                                                    message: "Please input Skill Level or delete this field.",
                                                                },
                                                            ]}
                                                            noStyle
                                                        >
                                                            <Select placeholder="Experience" className="profile-inputs">
                                                                <Option value="Beginner">Beginner</Option>
                                                                <Option value="Intermediate">Intermediate</Option>
                                                                <Option value="Expert">Expert</Option>
                                                            </Select>
                                                        </Form.Item>
                                                    </div>
                                                </div>
                                                {fields.length > 1 ? (
                                                    <div size="small" style={{ cursor: "pointer" }} onClick={() => remove(name)} className="d-flex justify-content-end align-items-center text-danger text-right">
                                                        <CloseCircleOutlined
                                                            className="dynamic-delete-button bg-red text-danger px-1"
                                                        />
                                                    Delete
                                                    </div>
                                                ) : null}
                                            </Form.Item>
                                        )
                                    })}
                                    <Form.Item>
                                        <div size="small" style={{ cursor: "pointer" }} onClick={() => add()} className="d-flex justify-content-start align-items-center text-muted text-right">
                                            <PlusCircleOutlined
                                                className="dynamic-delete-button bg-red text-muted px-1"
                                            />
                                            Add Skill
                                        </div>
                                        <Form.ErrorList errors={errors} />
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                        <Form.List
                            name="awards"
                            rules={[
                                {
                                    validator: async (_, names) => {
                                        if (!names || names.length < 1) {
                                            return Promise.reject(new Error('Please add at least one degree'));
                                        }
                                    },
                                },
                            ]}
                        >
                            {(fields, { add, remove }, { errors }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...field }, index) => {

                                        return (
                                            <Form.Item
                                                className="bg-grey py-3 px-2 mb-2"
                                                style={{ borderRadius: '10px' }}
                                                // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                                label="Awards"
                                                required={false}
                                                key={key}
                                            >
                                                <Form.Item
                                                    name={[name, 'title']}
                                                    fieldKey={[fieldKey, 'title']}
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        {
                                                            required: false,
                                                            whitespace: true,
                                                            message: "Please award's name or delete this field.",
                                                        },
                                                    ]}
                                                    noStyle
                                                >
                                                    <Input placeholder="Award Name" className="profile-inputs" />
                                                </Form.Item>
                                                <Form.Item
                                                    name={[name, 'institution']}
                                                    fieldKey={[fieldKey, 'institution']}
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        {
                                                            required: false,
                                                            whitespace: true,
                                                            message: "Please input Institution or delete this field.",
                                                        },
                                                    ]}
                                                    noStyle
                                                >
                                                    <Input placeholder="Awarding Institution" className="profile-inputs" />
                                                </Form.Item>

                                                <div className="row">
                                                    <div className="col-md-6 col-12">
                                                        <Form.Item
                                                            name={[name, 'yearAwarded']}
                                                            fieldKey={[fieldKey, 'yearAwarded']}
                                                            {...field}
                                                            validateTrigger={['onChange', 'onBlur']}
                                                            rules={[
                                                                {
                                                                    required: false,
                                                                    message: "Please input Year Awarded or delete this field.",
                                                                },
                                                            ]}
                                                            noStyle
                                                        >
                                                            <DatePicker placeholder="Year Awarded" picker="year" className="profile-inputs w-100" />
                                                        </Form.Item>

                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <Form.Item
                                                            name={[name, 'url']}
                                                            fieldKey={[fieldKey, 'url']}
                                                            {...field}
                                                            validateTrigger={['onChange', 'onBlur']}
                                                            rules={[
                                                                {
                                                                    required: false,
                                                                    whitespace: true,
                                                                    message: "Please input Year Awarded or delete this field.",
                                                                    type: "url"
                                                                },
                                                            ]}
                                                            noStyle
                                                        >
                                                            <Input placeholder="Link to award" className="profile-inputs" />
                                                        </Form.Item>
                                                    </div>
                                                </div>
                                                {fields.length > 1 ? (
                                                    <div size="small" style={{ cursor: "pointer" }} onClick={() => remove(name)} className="d-flex justify-content-end align-items-center text-danger text-right">
                                                        <CloseCircleOutlined
                                                            className="dynamic-delete-button bg-red text-danger px-1"
                                                        />
                                                    Delete
                                                    </div>
                                                ) : null}
                                            </Form.Item>
                                        )
                                    })}
                                    <Form.Item>
                                        <div size="small" style={{ cursor: "pointer" }} onClick={() => add()} className="d-flex justify-content-start align-items-center text-muted text-right">
                                            <PlusCircleOutlined
                                                className="dynamic-delete-button bg-red text-muted px-1"
                                            />
                                            Add Award
                                        </div>
                                        <Form.ErrorList errors={errors} />
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </div>
                    <div className="col-12 text-center dibu d-flex justify-content-center">
                        <Button htmlType="button" onClick={back} className="button-blue mx-1">Back</Button>
                        <Button loading={loading} htmlType="submit" className="button-blue mx-1">Preview</Button>
                    </div>
                </div>
            </div>
        </Form>
    )
}

export default ResumeDetails
