import './Applicants.less';
import 'react-phone-input-2/lib/style.css';

import { DownOutlined, ExclamationCircleOutlined, CloudDownloadOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Modal, Table } from 'antd';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BaseMarkup from '../../components/Base/BaseMarkup';
import UserHeading from '../../components/Elements/UserHeading';
import { getAllApplicantsAC, respondsToApplicantAC, downloadResumeAC } from '../../store/employer/action';
import { Link } from 'react-router-dom';

const Applicants = () => {
    const dispatch = useDispatch()
    const attendToJob = (action) => dispatch(respondsToApplicantAC(action))

    const downloadResume = (src) => {
        Modal.confirm({
            title: 'Do you want to download this resume?',
            icon: <ExclamationCircleOutlined />,
            content: 'You will be charged 2points.',
            onOk() {
                dispatch(downloadResumeAC(src.documentId))
            },
            onCancel() { },
        });
    }
    const statusColor = (data) => {
        if (!data) return 'text-info';
        if (data.toLowerCase() === 'reviewing') return 'text-warning';
        if (data.toLowerCase() === 'accepted') return 'text-success';
        if (data.toLowerCase() === 'rejected') return 'text-danger';
        if (data.toLowerCase() === 'submitted') return 'text-info';
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (name, src) => <Link to={`/resume/${src.profileId}`}>{name}</Link>
        },
        {
            title: 'Date Applied',
            dataIndex: 'dateApplied',
            key: 'date',
            render: (data) => moment(data).fromNow()
        },
        {
            title: 'Position',
            dataIndex: 'jobTitle',
            key: 'position',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (data, others) => {
                const menu = (
                    <Menu style={{ borderRadius: "10px", padding: "10px" }}>
                        <Menu.Item className="text-info" onClick={() => attendToJob({ id: others.jobApplicationId, status: "submitted" })}>
                            SUBMITTED
                        </Menu.Item>
                        <Menu.Item className="text-warning" onClick={() => attendToJob({ id: others.jobApplicationId, status: "reviewing" })}>
                            REVIEWING
                        </Menu.Item>
                        <Menu.Item className="text-success" onClick={() => attendToJob({ id: others.jobApplicationId, status: "accepted" })}>
                            ACCEPTED
                        </Menu.Item>
                        <Menu.Item className="text-danger" onClick={() => attendToJob({ id: others.jobApplicationId, status: "rejected" })}>
                            REJECTED
                        </Menu.Item>
                    </Menu>
                );
                return (
                    <Dropdown overlay={menu}>
                        <span className={`d-flex align-items-center ${statusColor(data)}`}>
                            {data ? data : "SUBMITTED"} <DownOutlined className="pl-2" />
                        </span>
                    </Dropdown>
                )
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, src) => <div className="d-flex">
                <Button className="download-button" type="primary" onClick={() => downloadResume(src)}><CloudDownloadOutlined /></Button>
            </div>
        },
    ]


    useEffect(() => {
        dispatch(getAllApplicantsAC())
    }, [])

    const { applicants, applicantsLoading, profile } = useSelector(({ employerSlice: { applicants, applicantsLoading }, profileSlice: { profile } }) => ({ applicants, applicantsLoading, profile }))

    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout employer-applicant-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <UserHeading message="Manage Applicants" subMessage={`Points Balance: ${profile?.availableUnits}pts`} />
                        <div className="col-md-11 employer-applicant-contents px-0">
                            <Table loading={applicantsLoading} className="w-100" columns={columns} dataSource={applicants.content} />
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default Applicants
