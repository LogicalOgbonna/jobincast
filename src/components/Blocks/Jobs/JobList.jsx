import './JobList.less';

import React from 'react';

import { Pagination } from 'antd';
import Job from './Job';
import { NavLink } from 'react-router-dom';

const JobList = ({ paginated, data, onChange }) => {
    return (
        <div className="jobs-list-block">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    {data.content.map(job => <NavLink key={job.id} to={`/job/${job.id}`}>
                        <Job
                            img={job.companyInfo.companyImageURL}
                            url={`/company/${job.id}`}
                            posted={job.createdAt}
                            company={job.companyInfo.companyName}
                            address={job.jobLocation}
                            amount={`$ ${job.minAmount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " - " + `$ ${job.maxAmount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            tech={job.jobCategory}
                            title={job.jobTitle}
                        />
                    </NavLink>)}
                    {paginated && <div className="text-right">
                        <Pagination
                            className="job-pagination"
                            current={data.number}
                            onChange={onChange}
                            total={data.totalElements}
                        />
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default JobList
