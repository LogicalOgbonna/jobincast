import { FieldTimeOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import React from 'react';

const Resume = ({ img, stack, address, tech, posted, name }) => {
    return (
        <div className="resume-block-card">
            <Divider class= "reversediv"/>
            <div className="row">
                <div className="col-md-2">
                    <img src={img ? img : "/logo.png"} alt={name} />
                </div>
                <div className="col-md-7 resume-block-card-text-section">
                    <h6>{name}</h6>
                    <p className="resume-block-text">{stack}</p>
                    <span className="text-muted font13">{address}</span>
                    <p className="text-muted">{tech}</p>
                </div>
                <div className="col-md-3 text-right d-flex justify-content-end resume-block-card-icon-section">
                    <FieldTimeOutlined className="resume-block-card-icon" /> <span className="pl-2 text-muted">{posted}</span>
                </div>

            </div>
            <Divider/>
        </div>
    )
}

export default Resume
