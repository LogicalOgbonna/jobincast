import './JobList.less';

import React from 'react';

import { taletize } from '../../../assets/images';
import { Pagination } from 'antd';
import Job from './Job';
import { NavLink } from 'react-router-dom';

const JobList = ({ paginated, data }) => {
    return (
        <div className="jobs-list-block">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    {data.content.map(job => <NavLink to={`/job/${job.id}`}>
                        <Job
                            img={taletize}
                            url="/company/1223432"
                            posted="12th April, 2020"
                            company="Bridge IT Solutions"
                            address={`${job.jobLocation}`}
                            amount={`$ ${job.minAmount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') +" - "+ `$ ${job.maxAmount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            tech={`${job.jobCategory}`}
                            title={job.jobTitle}
                        />
                    </NavLink>)}
                    {paginated && <div className="text-right">
                        <Pagination className="job-pagination" defaultCurrent={1} total={50} />
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default JobList
