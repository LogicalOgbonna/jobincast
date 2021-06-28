import './CompanyPage.less';

import { Avatar, Skeleton } from 'antd';
import React, { useEffect } from 'react';

import BaseMarkup from '../../components/Base/BaseMarkup';
import JobList from '../../components/Blocks/Jobs/JobList';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleCompanyAC } from '../../store/companies/action';
import { getAllJobsAC } from '../../store/jobs/action';

const CompanyPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    useEffect(() => {
        dispatch(getAllJobsAC(`page=0&size=4&search=user.id==${id}`))
        dispatch(getSingleCompanyAC(id))
    }, [])
    const { company, companyLoading, jobs } = useSelector(({ companiesSlice: { company, companyLoading }, 
    jobsSlice: { jobs } }) => ({ company, companyLoading, jobs }))  
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout company-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center">
                            {companyLoading ?
                                <Skeleton.Avatar title size={120} loading={companyLoading} active />
                                :
                                <>
                                    <Avatar src={company?.imageURL} size={100} />
                                    <h2 className="company-page-company-name">{company?.name}</h2>
                                    <p className="slogan">{company?.companyInfo?.slogan}</p>
                                </>
                            }
                        </div>
                        <div className="col-md-10 company-details">
                            <Skeleton
                                paragraph={{ rows: 10 }} loading={companyLoading} active
                            >
                                <h4 className="lh50">Company Information</h4>
                                <p className="text-muted"><i className="fa fa-sitemap pr-2" aria-hidden="true" />Company Category :  <span className="text-capitalize">{company?.industry?.toLowerCase()}</span></p>
                                <p className="text-muted"><i className="fa fa-users pr-2" aria-hidden="true" /> Company Size :  {company?.companySize}</p>
                                <p className="text-muted"><i className="fa fa-briefcase pr-2" aria-hidden="true" /> Job Listings : {company?.numberOfPositions} Jobs Available</p>

                                <p className="company-details-title">Company Description</p>

                                <p className="company-details-content">
                                    {company?.companyFullBio}
                            </p>

                                <p className="company-details-title">Location Information</p>
                                <p>Address : {company?.address}</p>
                                {/* <p>State :  inputed value</p> */}
                                <p>Country : {company?.location}</p>
                                <br></br>
                                <br></br>

                                <JobList data={jobs} />

                            </Skeleton>
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default CompanyPage
