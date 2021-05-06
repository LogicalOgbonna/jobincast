import './CompanyPage.less';

import { Avatar } from 'antd';
import React from 'react';

import BaseMarkup from '../../components/Base/BaseMarkup';
import JobList from '../../components/Blocks/Jobs/JobList';

const CompanyPage = () => {
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout company-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center">
                            <Avatar size={100} />
                            <h2 className="company-page-company-name">Bridge IT Solutions</h2>
                            <p>We Create the Internet</p>
                        </div>
                        <div className="col-md-10 company-details">
                            <p><i class="fa fa-sitemap pr-2" aria-hidden="true"  />Company Category :  input</p>
                            <p><i class="fa fa-users pr-2" aria-hidden="true"  /> Company Size :  input</p>
                            <p><i className="fa fa-briefcase pr-2" aria-hidden="true" /> Job Listings : 3 Jobs Available</p>

                            <p className="company-details-title">Company Description</p>

                            <p className="company-details-content">
                                We do not own any data, information or material (“Content”) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may, but have no obligation to, monitor and review Content on the Website submitted or created using our Services by you.
                                We do not own any data, information or material (“Content”) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may, but have no obligation to, monitor and review Content on the Website submitted or created using our Services by you.
                            </p>

                            <p className="company-details-title">Location Information</p>
                            <p>Address : address entered</p>
                            <p>State :  inputed value</p>
                            <p>Country : input</p>

                            <JobList />
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default CompanyPage
