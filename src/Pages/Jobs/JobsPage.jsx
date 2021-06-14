/* eslint-disable react-hooks/exhaustive-deps */
import { Skeleton } from 'antd';
import queryString from "query-string";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { brownDropdown, darkgreenDropdown, pinkDropdown, purpleDropdown, skyblueDropdown } from '../../assets/icons';
import BaseMarkup from '../../components/Base/BaseMarkup';
import JobLists from '../../components/Blocks/Jobs/JobList';
import FilterElement from '../../components/Elements/Filter';
import SearchElement from '../../components/Elements/Search';
import { clearFilterAndCurrentStateAC } from '../../store/filter/actions';
import { setCurrentState } from '../../store/filter/reducer';
import { getAllJobsAC } from '../../store/jobs/action';
import searchSplitter from '../../store/utils/searchSplitter';
import './JobsPage.less';




const searchParams = {
    jobCountry: [],
    jobCategory: [],
    maxAmount: [],
    minAmount: [],
    jobType: [],
    experienceLevel: [],
    jobTitle: "",
}
const JobsPage = () => {


    const [state, setState] = useState(searchParams)
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        const previousSearch = (queryString.parse(history.location.search))?.search;
        if (!previousSearch) {
            dispatch(getAllJobsAC("page=0&size=10"));
            return
        }
        const updatedSearchParams = searchSplitter(previousSearch)
        setState(updatedSearchParams)
        dispatch(setCurrentState({ ...updatedSearchParams }))
        dispatch(getAllJobsAC(`search=${previousSearch}&page=0&size=10`));
    }, [history.location.search])

    useEffect(() => {

        return () => {
            dispatch(clearFilterAndCurrentStateAC())
        }
    }, [])

    const onPaginationChange = (page) => {
        dispatch(getAllJobsAC(`page=${page}&size=10`))
    }

    const { jobs, jobsLoading, filterSlice: { jobsPage } } = useSelector(({ jobsSlice: { jobs, jobsLoading }, filterSlice }) => ({ jobs, jobsLoading, filterSlice }))
    const options = [
        {
            label: "location",
            data: jobsPage.locations.map(value => ({ ...value, page: 'jobs' })),
            icon: brownDropdown,
            page: 'jobs'
        },
        {
            label: "job category",
            data: jobsPage.categories.map(value => ({ ...value, page: 'jobs' })),
            icon: pinkDropdown,
            page: 'jobs'
        },
        {
            label: "salary",
            data: jobsPage.salaries.map(value => ({ ...value, page: 'jobs' })),
            icon: skyblueDropdown,
            page: 'jobs'
        },
        {
            label: "job type",
            data: jobsPage.jobTypes.map(value => ({ ...value, page: 'jobs' })),
            icon: darkgreenDropdown,
            page: 'jobs'
        },
        {
            label: "experience level",
            data: jobsPage.experiences.map(value => ({ ...value, page: 'jobs' })),
            icon: purpleDropdown,
            page: 'jobs'
        },
    ]

    const onSearch = search => {
        let searchString = `search=`;
        for (let m in state) {
            if (state[m].length > 0) {
                if (m === "title" || m === "fullName") {
                    const searchValue = state[m].replace(/'/g, "");
                    searchString += `${m}=='*${searchValue}*';`;
                }
                else {
                    if (state[m].length > 1) {
                        const searchValue = state[m].join(",").replace(/'/g, "");
                        searchString += `${m}=in='(${searchValue})';`;
                    } else {
                        const searchValue = state[m].join(",").replace(/'/g, "");
                        searchString += `${m}=='${searchValue}';`;
                    }
                }
            }
        }
        dispatch(setCurrentState({ ...state }))
        searchString = searchString.substring(0, searchString.length - 1).replace(/"/g, "");
        history.push(`/jobs?page=0&size=10&${searchString}`)

    }

    const onSearchChange = ({ target: { value } }) => {
        setState({
            ...state,
            jobTitle: value,
        })
    }

    return (
        <BaseMarkup className="background-image-left">
            <div className="desktop-layout">
                <SearchElement
                    onChange={onSearchChange}
                    onSearch={onSearch}
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
