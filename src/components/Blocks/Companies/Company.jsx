import { Divider } from 'antd';
import React from 'react';
import './Company.scss';

import { people, service_location, service_type } from '../../../assets/icons';

const Company = ({ img, company, location, technology, companySize, available }) => {
    return (
        <div className="company-block-card">
            <div className="mobile">
                <div className="row">
                    <div className="col-lg-2 comImage">
                        <img src={img ? img : "/logo.png"} alt={company + "-logo"} />
                    </div>
                    <div className="col-lg-7 company-block-card-text-section">
                        <h6 className="comName company-text">{company}</h6>
                        <div className="text-muted py-1 infoInput"><img src={service_location} alt="location" className="company-block-card-icon" /> <span className="comLocation mx-3"> {location}</span></div>
                        <div className="text-muted py-1 infoInput"><img src={service_type} alt="location" className="company-block-card-icon" /> <span className="comField mx-3"> {technology}</span></div>
                        <div className="text-muted py-1 infoInput"><img src={people} alt="location" className="company-block-card-icon" /> <span className="comSize mx-3"> {companySize}</span></div>
                    </div>
                    <div className="col-lg-3 text-right d-flex justify-content-end company-block-card-icon-section">
                        <i className="fa fa-briefcase company-block-card-icon" /> <span className="pl-2 text-muted">{available}</span>
                    </div>
                </div>

                <Divider />
            </div>
        </div>
    )
}

export default Company
