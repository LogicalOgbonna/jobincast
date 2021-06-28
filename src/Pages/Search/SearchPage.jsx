/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import BaseMarkup from '../../components/Base/BaseMarkup'
import SearchElement from '../../components/Elements/Search'
import { getAllJobsAC } from '../../store/jobs/action';

import JobLists from '../../components/Blocks/Jobs/JobList';

import queryString from "query-string";
import searchSplitter from '../../store/utils/searchSplitter';
import { setCurrentState } from '../../store/filter/reducer';
import { Skeleton } from 'antd';
import { brownDropdown, darkgreenDropdown, pinkDropdown, purpleDropdown, skyblueDropdown } from '../../assets/icons';
import FilterElement from '../../components/Elements/Filter';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import CompanyList from '../../components/Blocks/Companies/CompanyList';
import { getAllCompaniesAC } from '../../store/companies/action';
import { getAllResumeAC } from '../../store/resume/action';
import ResumeList from '../../components/Blocks/Resume/ResumeList';

const searchParams = {
    jobCountry: [],
    jobCategory: [],
    maxAmount: [],
    minAmount: [],
    jobType: [],
    experienceLevel: [],
    jobTitle: "",
}
const SearchPage = () => {

    const dispatch = useDispatch();
    const history = useHistory()

    const [state, setState] = useState(searchParams)
    const [searchType, setSearchType] = useState("JOB")


    useEffect(() => {
        const previousSearch = (queryString.parse(history.location.search))?.search;
        const previousSearchType = (queryString.parse(history.location.search))?.searchType;
        setSearchType(previousSearchType || "JOB")
        let updatedSearchParams = {}
        if (previousSearch) {
            updatedSearchParams = searchSplitter(previousSearch)
            setState(updatedSearchParams)
            dispatch(setCurrentState({ ...updatedSearchParams }))
        }
        if (!previousSearchType || previousSearchType === "JOB") {
            if (!previousSearch) return dispatch(getAllJobsAC("page=0&size=10"));
            dispatch(getAllJobsAC(`search=${previousSearch}&page=0&size=10`));
        }
        if (previousSearchType === "COMPANY") {
            if (!previousSearch) return dispatch(getAllCompaniesAC("page=0&size=10"))
            dispatch(getAllCompaniesAC(`search=${previousSearch}&page=0&size=10`))
        }
        if (previousSearchType === "RESUME") {
            if (!previousSearch) return dispatch(getAllResumeAC("page=0&size=10"))
            dispatch(getAllResumeAC(`search=${previousSearch}&page=0&size=10`))
        }
    }, [history.location.search])
    const {
        companiesSlice: { companies, companiesLoading, },
        jobsSlice: { jobs, jobsLoading, },
        resumeSlice: { resumes, resumesLoading },
        filterSlice: { jobsPage, companiesPage, resumePage }
    } = useSelector(({ companiesSlice, jobsSlice, filterSlice, resumeSlice }) =>
        ({ jobsSlice, filterSlice, companiesSlice, resumeSlice }))
    const onJobsPaginationChange = (page) => {
        // dispatch(getAllJobsAC(`page=${page}&size=10`))
    }
    const onCompanyPagination = (page) => {
        // dispatch(getAllJobsAC(`page=${page}&size=10`))
    }

    const options = {
        job: [
            {
                label: "location",
                data: jobsPage.locations.map(value => ({ ...value, searchPage: true, searchType })),
                icon: brownDropdown,
            },
            {
                label: "job category",
                data: jobsPage.categories.map(value => ({ ...value, searchPage: true, searchType })),
                icon: pinkDropdown,
            },
            {
                label: "salary",
                data: jobsPage.salaries.map(value => ({ ...value, searchPage: true, searchType })),
                icon: skyblueDropdown,
            },
            {
                label: "job type",
                data: jobsPage.jobTypes.map(value => ({ ...value, searchPage: true, searchType })),
                icon: darkgreenDropdown,
            },
            {
                label: "experience level",
                data: jobsPage.experiences.map(value => ({ ...value, searchPage: true, searchType })),
                icon: purpleDropdown,
            },
        ],
        company: [
            {
                label: "Location",
                data: companiesPage.locations.map(value => ({ ...value, searchPage: true, searchType })),
                icon: brownDropdown,
            },
            {
                label: "Industry",
                data: companiesPage.industry.map(value => ({ ...value, searchPage: true, searchType })),
                icon: pinkDropdown,
            },
            {
                label: "Company Size",
                data: companiesPage.companySize.map(value => ({ ...value, searchPage: true, searchType })),
                icon: skyblueDropdown,
            },
        ],
        resume: [
            {
                label: "Alphabetical",
                data: resumePage.alphabetical.map(value => ({ ...value, page: 'resume' })),
                icon: brownDropdown
            },
            {
                label: "Location",
                data: resumePage.locations.map(value => ({ ...value, page: 'resume' })),
                icon: darkgreenDropdown
            },
            // {
            //     label: "job category",
            //     data: categories,
            //     icon: pinkDropdown
            // },
            {
                label: "Degree Level",
                data: resumePage.degree.map(value => ({ ...value, page: 'resume' })),
                icon: skyblueDropdown
            },
            {
                label: "years of experience",
                data: resumePage.experiences.map(value => ({ ...value, page: 'resume' })),
                icon: purpleDropdown
            },
        ]
    }

    const renderSearchResultList = (type) => {
        switch (type) {
            case "JOB":
                return <JobLists onChange={onJobsPaginationChange} data={jobs} paginated />
            case "COMPANY":
                return <CompanyList onPaginationChange={onCompanyPagination} data={companies} paginated />
            case "RESUME":
                return <ResumeList data={resumes} />
            default:
                return null;
        }
    }


    const renderSearchResultPagination = (type) => {
        switch (type) {
            case "JOB":
                return <>
                    <div className="col-md-10">
                        <FilterElement options={options.job} />
                    </div>
                    <div className="col-md-10">
                        <p className="text-right text-muted font13">Showing {jobs?.numberOfElements}–{jobs?.size} of {jobs?.totalElements} jobs</p>
                    </div>
                </>
            case "COMPANY":
                return <>
                    <div className="col-md-10">
                        <FilterElement
                            options={options.company}
                            extra={<div><Checkbox className="pr-2" />Show hiring companies only</div>}
                        />
                    </div>
                    <div className="col-md-10">
                        <p className="text-right text-muted font13">Showing {companies?.numberOfElements}–{companies?.size} of {companies?.totalElements} companies</p>
                    </div>
                </>
            case "RESUME":
                return <>
                    <div className="col-md-10">
                        <FilterElement options={options.resume} />
                    </div>
                    <div className="col-md-10">
                        <p className="text-right text-muted font13">Showing {resumes?.numberOfElements}–{resumes?.size} of {resumes?.totalElements} Resume</p>
                    </div>
                </>
            default:
                return null;
        }
    }

    const loadingDefiner = (type) => {
        switch (type) {
            case "JOB":
                return jobsLoading;
            case "COMPANY":
                return companiesLoading;
            case "RESUME":
                return resumesLoading;
            default:
                break;
        }
    }
    return (
        <BaseMarkup>
            <div className="desktop-layout">
                <SearchElement
                    onClick={() => console.log("Hello")}
                    buttonText={<div> SEARCH </div>}
                />

                <div className="jobs-page">
                    <div className="container">
                        <div className="row justify-content-center">
                            {renderSearchResultPagination(searchType)}
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <Skeleton
                                    avatar={{
                                        size: 110
                                    }}
                                    active
                                    loading={loadingDefiner(searchType)}
                                    paragraph={{ rows: 2 }}
                                >
                                    {renderSearchResultList(searchType)}
                                </Skeleton>
                                <Skeleton
                                    className="py-4"
                                    avatar={{
                                        size: 110
                                    }}
                                    active
                                    loading={loadingDefiner(searchType)}
                                    paragraph={{ rows: 2 }}
                                />
                                <Skeleton
                                    avatar={{
                                        size: 110
                                    }}
                                    active
                                    loading={loadingDefiner(searchType)}
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

export default SearchPage
