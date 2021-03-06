import './RecentJobs.scss';

import React from 'react';

import { taletize } from '../../assets/images';
import { Pagination } from 'antd';
import RecentJob from './RecentJob';
import { NavLink } from 'react-router-dom';

const RecentJobs = () => {
    return (
        <div className="recent-jobs-element">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <NavLink to="/">
                        <RecentJob
                            img={taletize}
                            url="/company/1223432"
                            posted="12th April, 2020"
                            company="Bridge IT Solutions"
                            address="18271 Dayton River Rd Dayton, Minnesota"
                            amount="$2,000"
                            tech="Science & Technology | Full Time"
                        />

                        <div className="text-right">
                            <Pagination className="recent-job-pagination" defaultCurrent={1} total={50} />
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default RecentJobs
