import './EmployerJobsPage.scss';
import 'react-phone-input-2/lib/style.css';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';

import BaseMarkup from '../../components/Base/BaseMarkup';
import UserHeading from '../../components/Elements/UserHeading';
import PostJobModal from '../../components/Modals/PostJob';
import { useDispatch, useSelector } from 'react-redux';
import { createJobAC, deleteJobAC, getJobsAC, rePostJobAC, updateJobAC } from '../../store/jobs/action';
import moment from 'moment';
import Countdown from 'react-countdown'
import UpdateJob from '../../components/Modals/UpdateJob';

const EmployerJobsPage = () => {

    const dispatch = useDispatch()

    const [modal, toggleModal] = useState(false)
    const [updateModal, toggleUpdateModal] = useState(false)
    const [editableJob, setEditableJob] = useState(null)
    const onModalToggle = () => toggleModal(!modal)
    const onUpdateModalToggle = () => toggleUpdateModal(!updateModal)
    const rePostJob = (src) => dispatch(rePostJobAC(src))

    useEffect(() => {
        dispatch(getJobsAC())
    }, [])

    const deleteJob = (id, title) => dispatch(deleteJobAC({ id, title }))
    const editJob = (src) => {
        toggleUpdateModal(true)
        setEditableJob(src)
    }

    const onPostJob = (data) => {
        const maxAmount = parseInt(data?.salary?.split("-")?.[1]?.replace(",", ''))
        data.minAmount = parseInt(data?.salary?.split("-")?.[0]?.replace(",", ''))
        data.maxAmount = isNaN(maxAmount) ? 50000 : maxAmount;
        dispatch(createJobAC({ data, onModalToggle }))
    }
    const onUpdateJob = (data) => dispatch(updateJobAC({ data: { ...editableJob, ...data }, toggle: onUpdateModalToggle }))

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
            dataIndex: 'createdAt',
            key: 'date',
            render: (value) => <p className="text-center">{moment(value).format('YYYY-MM-DD')}</p>
        },
        {
            title: 'Expires In',
            dataIndex: 'expiresIn',
            key: 'expiresIn',
            render: (value, src) => {
                return (
                    <p className="text-center">
                        <Countdown date={moment(value)}>
                            <Tooltip title="Click to Re-post Job">
                                <Button onClick={() => rePostJob(src)} className="post-job-button" type="primary">Expired</Button>
                            </Tooltip>
                        </Countdown>
                    </p>
                )
            }
        },
        {
            title: 'Applicants',
            dataIndex: 'numberOfApplicants',
            key: 'applicants',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, src) => <div className="d-flex justify-content-center">
                <Tooltip placement="bottom" title="Edit Job">
                    <EditOutlined onClick={() => editJob(src)} style={{ cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip placement="bottom" title="Delete Job">
                    <DeleteOutlined onClick={() => deleteJob(src.jobPostingUrl, src.jobTitle)} style={{ cursor: 'pointer' }} className="px-3" />
                </Tooltip>
            </div>
        },
    ]
    const { jobPostingLoading, recruiterJobsLoading, recruiterJobs, profile, jobUpdateLoading } =
        useSelector((
            { jobsSlice: { jobPostingLoading, recruiterJobsLoading, recruiterJobs, jobUpdateLoading },
                profileSlice: { profile }
            }
        ) =>
            ({ jobPostingLoading, recruiterJobsLoading, recruiterJobs, profile, jobUpdateLoading }))


    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout employer-job-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <UserHeading message="Manage Jobs" subMessage={`Points Balance: ${profile?.availableUnits}pts`} />
                        <div className="col-md-11 px-0 py-2 text-right">
                            <Button onClick={onModalToggle} className="post-job-button">Post Job</Button>
                        </div>
                        <div className="col-md-11 employer-job-contents p-1">
                            <Table loading={recruiterJobsLoading} className="w-100" columns={columns} dataSource={recruiterJobs.content} />
                        </div>
                    </div>
                </div>

                <PostJobModal editableJob={editableJob} loading={jobPostingLoading} toggle={onModalToggle} open={modal} onFinish={onPostJob} />
                <UpdateJob editableJob={editableJob} loading={jobUpdateLoading} toggle={onUpdateModalToggle} open={updateModal} onFinish={onUpdateJob} />
            </div>
        </BaseMarkup>
    )
}

export default EmployerJobsPage
