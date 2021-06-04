import { DeleteOutlined } from '@ant-design/icons'
import { Button, Table } from 'antd'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import BaseMarkup from '../../components/Base/BaseMarkup'
import UserHeading from '../../components/Elements/UserHeading'
import { userGetApplicationsAC, withdrawApplicationAC } from '../../store/applicants/action'
import './ApplicationsPage.less'

const ApplicationsPage = () => {
    const dispatch = useDispatch()
    const { applications: data, applicationsLoading: loading } = useSelector(({ applicantsSlice: { applications, applicationsLoading } }) =>
        ({ applications, applicationsLoading }))
    useEffect(() => {
        dispatch(userGetApplicationsAC())
    }, [])

    const withdraw = (id, title) => dispatch(withdrawApplicationAC({ id, title }))
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Date',
            dataIndex: 'dateApplied',
            key: 'dateApplied',
            render: (value) => moment(value).fromNow()
        },
        {
            title: 'Company',
            dataIndex: 'companyName',
            key: 'company',
            render: (value) => <NavLink to={`/company/${value}`}>{value}</NavLink>
        },
        {
            title: 'Status',
            dataIndex: 'entityState',
            key: 'entityState',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, { applicationId, title }) => <Button onClick={() => withdraw(applicationId, title)} type="text">Withdraw</Button>
        },
    ]
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
