import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Skeleton, Spin } from 'antd';
import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import BlockHeader from './BlockHeader';
import RecentJob from './RecentJob';
import './RecentJobs.less';



const RecentJobs = () => {
    const { push } = useHistory()
    const { jobs: { content }, jobsLoading: loading } = useSelector(({ jobsSlice: { jobs, jobsLoading } }) => ({ jobs, jobsLoading }))
    return (
        <div className="recent-jobs-block">
            <div className="row justify-content-center">
                <div className="col-md-10">

                    <BlockHeader
                        heading="Recent Jobs"
                        subheading="More than 10,000 trusted jobs are available on the website for candidates to send to their applications and exactly find their expected jobs."
                    />

                    <Skeleton
                        avatar={{
                            size: 110,
                        }}
                        active
                        loading={loading}
                        paragraph={{ rows: 2 }}
                    >
                        {content.map(job =>
                            <RecentJob
                            id={job.id}
                            key={job.id}
                            createdAt={job.createdAt}
                            img={job.companyInfo.companyImageURL}
                            company={job.companyInfo.companyName}
                            position={job.jobTitle}
                            address={job.jobLocation}
                            amount={`$ ${job.minAmount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " - " + `$ ${job.maxAmount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            category={job.jobCategory.replace(/_/g, " ").toLowerCase()}
                        />)}
                    </Skeleton>
                    <Skeleton
                        className="py-5"
                        avatar={{
                            size: 110
                        }}
                        active
                        loading={loading}
                        paragraph={{ rows: 2 }}
                    />
                    <Skeleton
                        avatar={{
                            size: 110
                        }}
                        active
                        loading={loading}
                        paragraph={{ rows: 2 }}
                    />

                    {content.length > 1 && <div className="pull-right">
                        <Button onClick={() => push("/jobs")} className="recent-jobs-button">View All <ArrowRightOutlined className="mx-2 recent-jobs-button-icon" /></Button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default RecentJobs
