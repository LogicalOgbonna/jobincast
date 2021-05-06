import { FieldTimeOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Job = ({ img, company, address, amount, tech, posted, url, title}) => {
    return (
        <div className="jobs-block-card">
            <div className="row">
                <div className="col-md-2">
                    <img src={img} alt="taletize" />
                </div>
                <div className="col-md-7 jobs-block-card-text-section">
                    <h5>{title}</h5>
                    <p><NavLink to={url}>{company}</NavLink></p>
                    <span className="text-muted">{address}</span>
                    <p className="text-muted">{amount}</p>
                    <p>{tech}</p>
                </div>
                <div className="col-md-3 text-right d-flex justify-content-end jobs-block-card-icon-section">
                    <FieldTimeOutlined className="jobs-block-card-icon" /> <span className="pl-2 text-muted">{posted}</span>
                </div>

                <Divider style={{ margin: "24px 0 0 0" }} />
            </div>
        </div>
    )
}

export default Job
