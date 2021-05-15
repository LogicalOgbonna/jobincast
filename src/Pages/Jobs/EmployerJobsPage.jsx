import './EmployerJobsPage.less';
import 'react-phone-input-2/lib/style.css';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import React from 'react';

import BaseMarkup from '../../components/Base/BaseMarkup';
import UserHeading from '../../components/Elements/UserHeading';

const EmployerJobsPage = () => {

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
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
                <DeleteOutlined className="px-3"/>
            </div>
        },
    ]

    const data = [
        {
            title: "Senior Graphics Designer",
            views: 10,
            applicants: 20,
            date: "2 weeks ago"
        },
        {
            title: "Senior Graphics Designer",
            views: 10,
            date: "2 weeks ago",
            applicants: 20,
        },
        {
            title: "Senior Graphics Designer",
            views: 10,
            date: "2 weeks ago",
            applicants: 20
        },
    ]

    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout employer-job-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <UserHeading message="Manage Jobs" subMessage="Points Balance: 100pts" />
                        <div className="col-md-11 employer-job-contents px-0">
                            <Table className="w-100" columns={columns} dataSource={data} />
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default EmployerJobsPage
