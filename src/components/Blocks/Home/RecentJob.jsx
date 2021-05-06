import { FieldTimeOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const RecentJob = ({ img, position, companny, address, salary, category }) => {
    return (
        <div className="recent-jobs-card">
            <NavLink to="/job/dajflksdj">
                <div className="row">


                    <div className="col-md-2">
                        <img src={img} alt="taletize" />
                    </div>
                    <div className="col-md-7 recent-jobs-card-text-section">
                        <h5>{position}</h5>
                        <p className="company">{companny}</p>
                        <span className="text-muted">{address}</span>
                        <p className="salary">{salary}</p>
                        <p className="text-muted">{category}</p>
                    </div>
                    <div className="col-md-3 text-right d-flex justify-content-end recent-jobs-card-icon-section">
                        <FieldTimeOutlined className="recent-jobs-card-icon text-muted" /> <span className="pl-2 text-muted recent-jobs-card-icon-text">3 April 2021</span>
                    </div>

                    <Divider style={{ margin: "24px 0 0 0" }} />
                </div>
            </NavLink>
        </div>
    )
}

export default RecentJob
