import { FieldTimeOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import moment from 'moment';
import React from 'react';
import { NavLink } from 'react-router-dom';

const RecentJob = ({ img, position, company, address, amount, category, id, createdAt }) => {
    return (
        <div className="recent-jobs-card">
            <NavLink to={`/job/${id}`}>
                <div className="row">


                    <div className="col-md-2">
                        <img src={img} alt={`${company}-logo`} />
                    </div>
                    <div className="col-md-7 recent-jobs-card-text-section">
                        <h5>{position}</h5>
                        <p className="company">{company}</p>
                        <span className="text-muted">{address}</span>
                        <p className="salary">{amount}</p>
                        <p className="text-muted text-capitalize">{category}</p>
                    </div>
                    <div className="col-md-3 text-right d-flex justify-content-end recent-jobs-card-icon-section">
                        <FieldTimeOutlined className="recent-jobs-card-icon text-muted" /> <span className="pl-2 text-muted recent-jobs-card-icon-text">{moment(createdAt).format("YYYY-MM-DD")}</span>
                    </div>

                    <Divider/>
                </div>
            </NavLink>
        </div>
    )
}

export default RecentJob
