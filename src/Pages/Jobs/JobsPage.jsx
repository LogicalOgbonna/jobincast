import './JobsPage.less';

import React from 'react';

import { brownDropdown, darkgreenDropdown, pinkDropdown, purpleDropdown, skyblueDropdown } from '../../assets/icons';
import BaseMarkup from '../../components/Base/BaseMarkup';
import JobLists from '../../components/Blocks/Jobs/JobList';
import FilterElement from '../../components/Elements/Filter';
import SearchElement from '../../components/Elements/Search';


const JobsPage = () => {
    const options = [
        {
            label: "location",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "location" }, { id: 1, label: "Paris, FR (CDG)", type: "location" }, { id: 2, label: "Paris, FR (CDG)", type: "location" }],
            icon: brownDropdown
        },
        {
            label: "job category",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "category" }, { id: 1, label: "Paris, FR (CDG)", type: "category" }, { id: 2, label: "Paris, FR (CDG)", type: "category" }],
            icon: pinkDropdown
        },
        {
            label: "salary",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "salary" }, { id: 1, label: "Paris, FR (CDG)", type: "salary" }, { id: 2, label: "Paris, FR (CDG)", type: "salary" }],
            icon: skyblueDropdown
        },
        {
            label: "job type",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "type" }, { id: 1, label: "Paris, FR (CDG)", type: "type" }, { id: 2, label: "Paris, FR (CDG)", type: "type" }],
            icon: darkgreenDropdown
        },
        {
            label: "years of experience",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "experience" }, { id: 1, label: "Paris, FR (CDG)", type: "experience" }, { id: 2, label: "Paris, FR (CDG)", type: "experience" }],
            icon: purpleDropdown
        },
    ]
    return (
        <BaseMarkup>
            <div className="desktop-layout">
                <SearchElement
                    onClick={() => console.log("Hello")}
                    buttonText={<div><i className="fa fa-briefcase" /> POST JOB</div>}
                />
                <div className="jobs-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <FilterElement options={options} />
                            </div>
                            <div className="col-md-12">
                                <p className="text-right text-muted">Showing 1–10 of 30 jobs</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-11">
                                <JobLists paginated/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default JobsPage