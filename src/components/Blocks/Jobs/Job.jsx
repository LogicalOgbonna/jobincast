import { FieldTimeOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import moment from 'moment';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Job = ({ img, company, address, amount, tech, posted, url, title}) => {
    return (
        <div className="jobs-block-card">
            <div className="mobile">
                <div className="row">
                    <div className="col-lg-2 jobBlockImg">
                        <img src={img} alt={company} />
                    </div>
                    <div className="col-lg-7 jobs-block-card-text-section">
                        <h6>{title}</h6>
                        <p><NavLink to={url}>{company}</NavLink></p>
                        <span className="text-muted font13">{address}</span>
                        <p className="salary">{amount}</p>
                        <p className="text-muted text-capitalize">{tech.replace(/_/g, " ").toLowerCase()}</p>
                    </div>
                    <div className="col-lg-3 jobBlockTime text-right d-flex justify-content-end jobs-block-card-icon-section">
                        <FieldTimeOutlined className="jobs-block-card-icon" /> <span className="pl-2 text-muted">{moment(posted, "YYYY-MM-DD").fromNow()}</span>
                    </div>
                </div>

                <Divider/>
            </div>
        </div>
    )
}

export default Job
