import { Divider } from 'antd';
import React from 'react';

import { people, service_location, service_type } from '../../../assets/icons';

const Company = ({ img, company, location, technology, companySize, available }) => {
    return (
        <div className="company-block-card">
            <div className="row">
                <div className="col-md-2">
                    <img src={img ? img : "/logo.png"} alt={company + "-logo"} />
                </div>
                <div className="col-md-7 company-block-card-text-section">
                    <h6 className="company-text">{company}</h6>
                    <div className="text-muted py-1"><img src={service_location} alt="location" className="company-block-card-icon" /> <span className="mx-3"> {location}</span></div>
                    <div className="text-muted py-1"><img src={service_type} alt="location" className="company-block-card-icon" /> <span className="mx-3"> {technology}</span></div>
                    <div className="text-muted py-1"><img src={people} alt="location" className="company-block-card-icon" /> <span className="mx-3"> {companySize}</span></div>
                </div>
                <div className="col-md-3 text-right d-flex justify-content-end company-block-card-icon-section">
                    <i className="fa fa-briefcase company-block-card-icon" /> <span className="pl-2 text-muted">{available}</span>
                </div>

                <Divider />
            </div>
        </div>
    )
}

export default Company
