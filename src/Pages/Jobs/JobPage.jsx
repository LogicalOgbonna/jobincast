import './JobPage.scss';

import { Avatar, Skeleton } from 'antd';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import BaseMarkup from '../../components/Base/BaseMarkup';
import Apply from '../../components/Elements/Apply';
import { getSingleJobAC } from '../../store/jobs/action';


const JobPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSingleJobAC(id))
    }, [])
    const { job, jobLoading } = useSelector(({ jobsSlice: { job, jobLoading } }) => ({ job, jobLoading }))
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout job-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center">
                            {jobLoading ?
                                <Skeleton.Avatar title size={120} loading={jobLoading} active />
                                :
                                <>
                                    <Avatar src={job?.companyInfo?.companyImageURL} size={100} />
                                    <h2 className="job-page-company-name">{job?.companyInfo?.companyName}</h2>
                                    <p className="slogan">{job?.companyInfo?.companyShortBio}</p>
                                </>}
                        </div>
                        <div className="col-md-10 job-details">
                            <Skeleton
                                paragraph={{ rows: 10 }} loading={jobLoading} active
                            >
                                <h4>{job?.jobTitle}</h4>
                                <span className="lh50 text-muted">Job Type: {job?.jobType}</span> <span className="lh50 mx-2">|</span>
                                <span className="lh50 text-muted text-capitalize">Job Category: {job?.jobCategory?.replace(/_/g, " ").toLowerCase()}</span>
                                <p className="deadline font13">Application Deadline: {moment(job?.expiresIn).format("YYYY-MM-DD")}</p>

                                <p className="job-details-title">Job Description</p>

                                <p className="job-details-content">
                                    {job?.jobDescription}
                                </p>

                                <p className="job-details-title">More Information</p>
                                <p>Address : {`${job?.jobLocation},`} {job?.jobCountry}</p>
                                <p>Salary Offer :  {`$ ${job?.minAmount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " - " + `$ ${job?.maxAmount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                <p>Experience Level : {job?.experienceLevel}</p>

                                <br></br>
                                <br></br>
                                <br></br>

                                <Apply applied={job?.applied} />
                            </Skeleton>
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default JobPage
