import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import './ContactUsFormBlock.less'

const { Option } = Select;

const ContactUsFormBlock = () => {
    return (
        <div className="contact-us-form-block">
            <h2>Contact Us</h2>
            <p className="contact-us-form-block-text">Do you have questions, comments, or concerns? Talk to us using the email form below and we will get back to you shortly.</p>

            <Form layout="vertical">
                <Form.Item name="name" required label="Name">
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="email" required label="Email">
                    <Input type="emial" />
                </Form.Item>
                <Form.Item name="iam" required label="I am">
                    <Select>
                        <Option>Hello</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="country" required label="Country of inquiry">
                    <Select>
                        <Option>Hello</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="message" required label="Message">
                    <Input.TextArea rows={8} />
                </Form.Item>
                <Form.Item name="attachment" label="File attachment">
                    <label for="file-upload" class="custom-file-upload">Add file</label>
                    <input id="file-upload" type="file" />
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit">Send Message</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ContactUsFormBlock
