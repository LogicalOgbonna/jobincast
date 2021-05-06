import { FieldTimeOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import React from 'react';

const Resume = ({ img, stack, address, tech, posted, name }) => {
    return (
        <div className="resume-block-card">
            {/* <Divider style={{ margin: "24px 0 0 0" }} /> */}
            <div className="row">
                <div className="col-md-2">
                    <img src={img} alt="taletize" />
                </div>
                <div className="col-md-7 resume-block-card-text-section">
                    <h5>{name}</h5>
                    <p className="resume-block-text">{stack}</p>
                    <span className="text-muted">{address}</span>
                    <p>{tech}</p>
                </div>
                <div className="col-md-3 text-right d-flex justify-content-end resume-block-card-icon-section">
                    <FieldTimeOutlined className="resume-block-card-icon" /> <span className="pl-2 text-muted">{posted}</span>
                </div>

            </div>
            <Divider style={{ margin: "24px 0 0 0" }} />
        </div>
    )
}

export default Resume
