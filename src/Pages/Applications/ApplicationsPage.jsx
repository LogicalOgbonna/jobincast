import { DeleteOutlined } from '@ant-design/icons'
import { Button, Table } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import BaseMarkup from '../../components/Base/BaseMarkup'
import UserHeading from '../../components/Elements/UserHeading'
import './ApplicationsPage.less'

const ApplicationsPage = () => {
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            render: (value) => <NavLink to="/company">{value}</NavLink>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => <Button type="text"><DeleteOutlined className="text-left" /></Button>
        },
    ]

    const data = [
        {
            title: "Senior Graphics Designer",
            status: "pending",
            company: "Best Company",
            date: "2 weeks ago"
        },
        {
            title: "Senior Graphics Designer",
            status: "pending",
            date: "2 weeks ago",
            company: "Best Company",
        },
        {
            title: "Senior Graphics Designer",
            status: "pending",
            date: "2 weeks ago",
            company: "Best Company"
        },
    ]
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout applicant-application-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <UserHeading action="view" message="Manage Applications" subMessage="" />
                        <div className="col-md-11 applicant-application-contents px-0">
                            <Table className="w-100" columns={columns} dataSource={data} />
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default ApplicationsPage
