import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Skeleton, Spin } from 'antd';

import { brownDropdown, darkgreenDropdown, pinkDropdown, purpleDropdown, skyblueDropdown } from '../../assets/icons';
import BaseMarkup from '../../components/Base/BaseMarkup';
import ResumeList from '../../components/Blocks/Resume/ResumeList';
import FilterElement from '../../components/Elements/Filter';
import SearchElement from '../../components/Elements/Search';
import { getAllResumeAC } from '../../store/resume/action';
import { useSelector } from 'react-redux';

import './ResumePage.less'

const ResumePage = () => {
    const dispatch = useDispatch()
    const { resumes, resumesLoading, filterSlice } = useSelector(({ resumeSlice: { resumes, resumesLoading }, filterSlice }) => ({ resumes, resumesLoading, filterSlice }))
    useEffect(() => {
        dispatch(getAllResumeAC("page=0&size=10"))
    }, [])

    const options = [
        {
            label: "Alphabetical",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "location" }, { id: 1, label: "Paris, FR (CDG)", type: "location" }, { id: 2, label: "Paris, FR (CDG)", type: "location" }],
            icon: brownDropdown
        },
        {
            label: "Location",
            data: filterSlice.locations,
            icon: darkgreenDropdown
        },
        {
            label: "job category",
            data: filterSlice.categories,
            icon: pinkDropdown
        },
        {
            label: "Degree Level",
            data: filterSlice.degree,
            icon: skyblueDropdown
        },
        {
            label: "experience level",
            data: filterSlice.experiences,
            icon: purpleDropdown
        },
    ]
    return (
        <BaseMarkup className="background-image-left">
            <div className="desktop-layout">
                <SearchElement
                    onClick={() => console.log("Hello")}
                    buttonText={<div><i className="fa fa-briefcase" /> POST RESUME</div>}
                />
                <div className="resume-page">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <FilterElement options={options} />
                            </div>
                            <div className="col-md-10">
                                <p className="text-right text-muted font13">Showing {resumes?.numberOfElements}–{resumes?.size} of {resumes?.totalElements} Resume</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <Skeleton
                                    avatar={{
                                        size: 110
                                    }}
                                    active
                                    loading={resumesLoading}
                                    paragraph={{ rows: 2 }}
                                >

                                    <ResumeList data={resumes} />
                                </Skeleton>
                                <Skeleton
                                    className="py-5"
                                    avatar={{
                                        size: 110
                                    }}
                                    active
                                    loading={resumesLoading}
                                    paragraph={{ rows: 2 }}
                                />
                                <Skeleton
                                    avatar={{
                                        size: 110
                                    }}
                                    active
                                    loading={resumesLoading}
                                    paragraph={{ rows: 2 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup >
    )
}

export default ResumePage
