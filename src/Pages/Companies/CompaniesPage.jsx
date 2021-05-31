import { Checkbox, Skeleton, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { brownDropdown, pinkDropdown, skyblueDropdown } from '../../assets/icons';
import BaseMarkup from '../../components/Base/BaseMarkup';
import CompanyList from '../../components/Blocks/Companies/CompanyList';
import FilterElement from '../../components/Elements/Filter';
import SearchElement from '../../components/Elements/Search';
import { getAllCompaniesAC } from '../../store/companies/action';
import './CompaniesPage.less'

const CompaniesPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCompaniesAC("page=0&size=10"))
    }, [])

    // const onPaginationChange = (page) => {
    //     dispatch(getAllCompaniesAC(`page=${page}&size=10`))
    // }

    const { companies, companiesLoading } = useSelector(({ companiesSlice: { companies, companiesLoading } }) => ({ companies, companiesLoading }))
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
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <FilterElement options={options}
                                    extra={<div><Checkbox className="pr-2" />Show hiring companies only</div>}
                                />
                            </div>
                            <div className="col-md-10">
                                <p className="text-right text-muted font13">Showing {companies?.numberOfElements}–{companies?.size} of {companies?.totalElements} companies</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <Skeleton
                                    avatar={{
                                        size: 110,
                                    }}
                                    active
                                    loading={companiesLoading}
                                    paragraph={{ rows: 2 }}
                                >
                                    <CompanyList data={companies} paginated />
                                </Skeleton>
                                <Skeleton
                                    className="py-5"
                                    avatar={{
                                        size: 110
                                    }}
                                    active
                                    loading={companiesLoading}
                                    paragraph={{ rows: 2 }}
                                />
                                <Skeleton
                                    avatar={{
                                        size: 110
                                    }}
                                    active
                                    loading={companiesLoading}
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

export default CompaniesPage
