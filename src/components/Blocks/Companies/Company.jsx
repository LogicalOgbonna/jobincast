import { Divider } from 'antd';
import React from 'react';

import { people, service_location, service_type } from '../../../assets/icons';

const Company = ({ img, company, location, technology, applicants, available }) => {
    return (
        <div className="company-block-card">
            <div className="row">
                <div className="col-md-2">
                    <img src={img} alt="taletize" />
                </div>
                <div className="col-md-7 company-block-card-text-section">
                    <h5 className="company-text">{company}</h5>
                    <div className="text-muted py-1"><img src={service_location} alt="location" className="company-block-card-icon" /> <span className="mx-3"> {location}</span></div>
                    <div className="text-muted py-1"><img src={service_type} alt="location" className="company-block-card-icon" /> <span className="mx-3"> {technology}</span></div>
                    <div className="text-muted py-1"><img src={people} alt="location" className="company-block-card-icon" /> <span className="mx-3"> {applicants}</span></div>
                </div>
                <div className="col-md-3 text-right d-flex justify-content-end company-block-card-icon-section">
                    <i className="fa fa-briefcase company-block-card-icon" /> <span className="pl-2 text-muted">{available}</span>
                </div>

                <Divider style={{ margin: "24px 0 0 0" }} />
            </div>
        </div>
    )
}

export default Company
