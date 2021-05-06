import './JobList.less';

import React from 'react';

import { taletize } from '../../../assets/images';
import { Pagination } from 'antd';
import Job from './Job';
import { NavLink } from 'react-router-dom';

const JobList = ({ paginated }) => {
    return (
        <div className="jobs-list-block">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <NavLink to="/job/123qwuryewui">
                        <Job
                            img={taletize}
                            url="/company/1223432"
                            posted="12th April, 2020"
                            company="Bridge IT Solutions"
                            address="18271 Dayton River Rd Dayton, Minnesota"
                            amount="$2,000"
                            tech="Science & Technology | Full Time"
                            title="Full Stack Developer"
                        />

                        {paginated && <div className="text-right">
                            <Pagination className="job-pagination" defaultCurrent={1} total={50} />
                        </div>}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default JobList
