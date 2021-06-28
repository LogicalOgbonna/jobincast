/* eslint-disable react-hooks/exhaustive-deps */
import { Checkbox, Skeleton } from 'antd';
import queryString from "query-string";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { brownDropdown, pinkDropdown, skyblueDropdown } from '../../assets/icons';
import BaseMarkup from '../../components/Base/BaseMarkup';
import CompanyList from '../../components/Blocks/Companies/CompanyList';
import FilterElement from '../../components/Elements/Filter';
import SearchElement from '../../components/Elements/Search';
import { getAllCompaniesAC } from '../../store/companies/action';
import { clearFilterAndCurrentStateAC } from '../../store/filter/actions';
import { setCurrentState } from '../../store/filter/reducer';
import searchSplitter from '../../store/utils/searchSplitter';
import './CompaniesPage.less';


const searchParams = {
    companyLocation: [],
    companySize: [],
    companyName: "",
    industry: []
}
const CompaniesPage = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [state, setState] = useState(searchParams)

    useEffect(() => {
        const previousSearch = (queryString.parse(history.location.search))?.search;
        if (!previousSearch) return dispatch(getAllCompaniesAC("page=0&size=10"))

        const updatedSearchParams = searchSplitter(previousSearch)
        setState(updatedSearchParams)
        dispatch(setCurrentState({ ...updatedSearchParams }))
        dispatch(getAllCompaniesAC(`search=${previousSearch}&page=0&size=10`))
    }, [history.location.search])

    useEffect(() => {

        return () => {
            dispatch(clearFilterAndCurrentStateAC())
        }
    }, [])
    const onPaginationChange = (page) => {
        dispatch(getAllCompaniesAC(`page=${page}&size=10`))
    }

    const { companies, companiesLoading, filterSlice } = useSelector(({ companiesSlice: { companies, companiesLoading }, filterSlice }) => ({ companies, companiesLoading, filterSlice }))
    const options = [
        {
            label: "Location",
            data: filterSlice.companiesPage.locations.map(value => ({ ...value, page: 'companies' })),
            icon: brownDropdown,
        },
        {
            label: "Industry",
            data: filterSlice.companiesPage.industry.map(value => ({ ...value, page: 'companies' })),
            icon: pinkDropdown,
        },
        {
            label: "Company Size",
            data: filterSlice.companiesPage.companySize.map(value => ({ ...value, page: 'companies' })),
            icon: skyblueDropdown,
        },
    ]

    const onSearch = search => {
        let searchString = `search=`;
        for (let m in state) {
            if (state[m].length > 0) {
                if (m === "companyName") {
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
        history.push(`/companies?page=0&size=10&${searchString}`)
    }
    const onSearchChange = ({ target: { value } }) => {
        setState({
            ...state,
            companyName: value,
        })
    }
    return (
        <BaseMarkup className="background-image-left">
            <div className="desktop-layout">
                <SearchElement
                    onChange={onSearchChange}
                    onSearch={onSearch}
                    buttonText={<div><i className="fa fa-briefcase" /> CREATE COMPANY</div>}
                />
                <div className="companies-page">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <FilterElement
                                    options={options}
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
                                    <CompanyList onPaginationChange={onPaginationChange} data={companies} paginated />
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
