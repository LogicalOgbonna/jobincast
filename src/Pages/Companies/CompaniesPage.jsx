import { Checkbox } from 'antd';
import React from 'react';

import { brownDropdown, pinkDropdown, skyblueDropdown } from '../../assets/icons';
import BaseMarkup from '../../components/Base/BaseMarkup';
import CompanyList from '../../components/Blocks/Companies/CompanyList';
import FilterElement from '../../components/Elements/Filter';
import SearchElement from '../../components/Elements/Search';
import './CompaniesPage.less'

const CompaniesPage = () => {
    const options = [
        {
            label: "Locatioin",
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
    ]
    return (
        <BaseMarkup className="background-image-left">
            <div className="desktop-layout">
                <SearchElement buttonText={<div><i className="fa fa-briefcase" /> CREATE COMPANY</div>} />
                <div className="companies-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <FilterElement options={options}
                                    extra={<div><Checkbox className="pr-2" />Show hiring companies only</div>}
                                />
                            </div>
                            <div className="col-md-12">
                                <p className="text-right text-muted pagination-search-on-page">Showing 1–10 of 30 jobs</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-11">
                                <CompanyList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default CompaniesPage
