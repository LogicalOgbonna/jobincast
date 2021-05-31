import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Spin } from 'antd';

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
    const { resumes, resumesLoading } = useSelector(({ resumeSlice: { resumes, resumesLoading } }) => ({ resumes, resumesLoading }))
    useEffect(() => {
        dispatch(getAllResumeAC("page=0&size=10&search=entityState==ACTIVATED"))
    }, [])

    const options = [
        {
            label: "Alphabetical",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "location" }, { id: 1, label: "Paris, FR (CDG)", type: "location" }, { id: 2, label: "Paris, FR (CDG)", type: "location" }],
            icon: brownDropdown
        },
        {
            label: "Location",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "location" }, { id: 1, label: "Paris, FR (CDG)", type: "location" }, { id: 2, label: "Paris, FR (CDG)", type: "location" }],
            icon: darkgreenDropdown
        },
        {
            label: "job category",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "category" }, { id: 1, label: "Paris, FR (CDG)", type: "category" }, { id: 2, label: "Paris, FR (CDG)", type: "category" }],
            icon: pinkDropdown
        },
        {
            label: "Degree Level",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "type" }, { id: 1, label: "Paris, FR (CDG)", type: "type" }, { id: 2, label: "Paris, FR (CDG)", type: "type" }],
            icon: skyblueDropdown
        },
        {
            label: "years of experience",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "experience" }, { id: 1, label: "Paris, FR (CDG)", type: "experience" }, { id: 2, label: "Paris, FR (CDG)", type: "experience" }],
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

                            {resumesLoading ? <div className="col-md-12 text-center"><Spin size="large" /></div> : <div className="col-md-9"><ResumeList data={resumes} /> </div>}

                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default ResumePage
