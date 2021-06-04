/* eslint-disable react-hooks/exhaustive-deps */
import './JobsPage.less';

import React, { useEffect } from 'react';

import BaseMarkup from '../../components/Base/BaseMarkup';
import JobLists from '../../components/Blocks/Jobs/JobList';
import FilterElement from '../../components/Elements/Filter';
import SearchElement from '../../components/Elements/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobsAC } from '../../store/jobs/action'
import { Skeleton } from 'antd';
import { brownDropdown, darkgreenDropdown, pinkDropdown, purpleDropdown, skyblueDropdown } from '../../assets/icons';


const JobsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobsAC("page=0&size=10"))
    }, [])

    const onPaginationChange = (page) => {
        dispatch(getAllJobsAC(`page=${page}&size=10`))
    }

    const { jobs, jobsLoading, filterSlice } = useSelector(({ jobsSlice: { jobs, jobsLoading }, filterSlice }) => ({ jobs, jobsLoading, filterSlice }))
    const options = [
        {
            label: "location",
            data: filterSlice.locations,
            icon: brownDropdown
        },
        {
            label: "job category",
            data: filterSlice.categories,
            icon: pinkDropdown
        },
        {
            label: "salary",
            data: filterSlice.salaries,
            icon: skyblueDropdown
        },
        {
            label: "job type",
            data: filterSlice.jobTypes,
            icon: darkgreenDropdown
        },
        {
            label: "years of experience",
            data: filterSlice.experiences,
            icon: purpleDropdown
        },
    ]
    return (
        <BaseMarkup className="background-image-left">
            <div className="desktop-layout">
                <SearchElement
                    onClick={() => console.log("Hello")}
                    buttonText={<div><i className="fa fa-briefcase" /> POST JOB</div>}
                />
                <div className="jobs-page">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <FilterElement options={options} />
                            </div>
                            <div className="col-md-10">
                                <p className="text-right text-muted font13">Showing {jobs?.numberOfElements}–{jobs?.size} of {jobs?.totalElements} jobs</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <Skeleton
                                    avatar={{
                                        size: 110
                                    }}
                                    active
                                    loading={jobsLoading}
                                    paragraph={{ rows: 2 }}
                                >
                                    <JobLists onChange={onPaginationChange} data={jobs} paginated />
                                </Skeleton>
                                <Skeleton
                                    className="py-4"
                                    avatar={{
                                        size: 110
                                    }}
                                    active
                                    loading={jobsLoading}
                                    paragraph={{ rows: 2 }}
                                />
                                <Skeleton
                                    avatar={{
                                        size: 110
                                    }}
                                    active
                                    loading={jobsLoading}
                                    paragraph={{ rows: 2 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default JobsPage
