import './EmployerJobsPage.less';
import 'react-phone-input-2/lib/style.css';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';

import BaseMarkup from '../../components/Base/BaseMarkup';
import UserHeading from '../../components/Elements/UserHeading';
import PostJobModal from '../../components/Modals/PostJob';
import { useDispatch, useSelector } from 'react-redux';
import { createJobAC, getJobsAC } from '../../store/jobs/action';

const EmployerJobsPage = () => {

    const dispatch = useDispatch()

    const [modal, toggleModal] = useState(false)
    const onModalToggle = () => toggleModal(!modal)

    useEffect(() => {
        dispatch(getJobsAC())
    }, [])

    const columns = [
        {
            title: 'Title',
            dataIndex: 'jobTitle',
            key: 'title',
        },
        {
            title: 'Category',
            dataIndex: 'jobCategory',
            key: 'category',
        },
        {
            title: 'Country',
            dataIndex: 'jobCountry',
            key: 'jobCountry',
        },
        {
            title: 'Date Published',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Applicants',
            dataIndex: 'applicants',
            key: 'applicants',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => <div className="d-flex">
                <EditOutlined />
                <DeleteOutlined className="px-3" />
            </div>
        },
    ]
    const { jobPostingLoading, recruiterJobsLoading, recruiterJobs } =
        useSelector(({ jobsSlice: { jobPostingLoading, recruiterJobsLoading, recruiterJobs } }) =>
            ({ jobPostingLoading, recruiterJobsLoading, recruiterJobs }))

    const onPostJob = (data) => dispatch(createJobAC({ data, onModalToggle }))

    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout employer-job-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <UserHeading message="Manage Jobs" subMessage="Points Balance: 100pts" />
                        <div className="col-md-11 px-0 py-2 text-right">
                            <Button onClick={onModalToggle} className="post-job-button">Post Job</Button>
                        </div>
                        <div className="col-md-11 employer-job-contents p-1">
                            <Table loading={recruiterJobsLoading} className="w-100" columns={columns} dataSource={recruiterJobs.content} />
                        </div>
                    </div>
                </div>

                <PostJobModal loading={jobPostingLoading} toggle={onModalToggle} open={modal} onFinish={onPostJob} />
            </div>
        </BaseMarkup>
    )
}

export default EmployerJobsPage
