import './Applicants.less';
import 'react-phone-input-2/lib/style.css';

import { DeleteOutlined, DownOutlined, EditOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Table } from 'antd';
import React from 'react';

import BaseMarkup from '../../components/Base/BaseMarkup';
import UserHeading from '../../components/Elements/UserHeading';
import { NavLink } from 'react-router-dom';

const Applicants = () => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Date Applied',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Resume',
            dataIndex: 'views',
            key: 'views',
            render: () => <NavLink to="/">View</NavLink>
        },
        {
            title: 'Download Resume',
            dataIndex: 'views',
            key: 'views',
            render: () => <NavLink to="/">View</NavLink>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (data) => {
                if (String(data).toLocaleLowerCase() === "approved") return <span className="text-success">{data}</span>
                if (String(data).toLocaleLowerCase() === "rejected") return <span className="text-danger">{data}</span>

                const menu = (
                    <Menu style={{ borderRadius: "10px", padding: "10px" }}>
                        <Menu.Item >
                            Pending
                        </Menu.Item>
                        <Menu.Item className="text-success">
                            Approved
                        </Menu.Item>
                        <Menu.Item className="text-danger">
                            Rejected
                        </Menu.Item>
                    </Menu>
                );
                return (
                    <Dropdown overlay={menu}>
                        <span className="d-flex align-items-center">
                            {data} <DownOutlined className="pl-2" />
                        </span>
                    </Dropdown>
                )
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => <div className="d-flex">
                <DeleteOutlined className="px-3" />
            </div>
        },
    ]

    const data = [
        {
            name: "Walter White",
            date: "2 weeks ago",
            views: 10,
            status: "Pending",
        },
        {
            name: "Jessie Pinkman",
            date: "2 weeks ago",
            views: 10,
            status: "Approved",
        },
        {
            name: "Elizabeth Holmes",
            date: "2 weeks ago",
            views: 10,
            status: "Rejected"
        },
    ]

    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout employer-applicant-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <UserHeading message="Manage Applicants" subMessage="Points Balance: 100pts" />
                        <div className="col-md-11 employer-applicant-contents px-0">
                            <Table className="w-100" columns={columns} dataSource={data} />
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default Applicants
