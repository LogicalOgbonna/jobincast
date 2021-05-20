import { DeleteOutlined } from '@ant-design/icons'
import { Button, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import BaseMarkup from '../../components/Base/BaseMarkup'
import UserHeading from '../../components/Elements/UserHeading'
import { userGetApplicationsAC } from '../../store/applicants/action'
import './ApplicationsPage.less'

const ApplicationsPage = () => {
    const dispatch = useDispatch()
    const { applications: data, applicationsLoading: loading } = useSelector(({ applicantsSlice: { applications, applicationsLoading } }) =>
        ({ applications, applicationsLoading }))
        console.log("🚀 ~ file: ApplicationsPage.jsx ~ line 16 ~ ApplicationsPage ~ data", data)
    useEffect(() => {
        dispatch(userGetApplicationsAC())
    }, [])
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

    // const data = [
    //     {
    //         title: "Senior Graphics Designer",
    //         status: "pending",
    //         company: "Best Company",
    //         date: "2 weeks ago"
    //     },
    //     {
    //         title: "Senior Graphics Designer",
    //         status: "pending",
    //         date: "2 weeks ago",
    //         company: "Best Company",
    //     },
    //     {
    //         title: "Senior Graphics Designer",
    //         status: "pending",
    //         date: "2 weeks ago",
    //         company: "Best Company"
    //     },
    // ]
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout applicant-application-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <UserHeading action="view" message="Manage Applications" subMessage="" />
                        <div className="col-md-11 applicant-application-contents p-1">
                            <Table loading={loading} className="w-100" columns={columns} dataSource={data.content} />
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default ApplicationsPage
