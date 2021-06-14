/* eslint-disable react-hooks/exhaustive-deps */
import { Skeleton } from 'antd';
import queryString from "query-string";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { brownDropdown, darkgreenDropdown, purpleDropdown, skyblueDropdown } from '../../assets/icons';
import BaseMarkup from '../../components/Base/BaseMarkup';
import ResumeList from '../../components/Blocks/Resume/ResumeList';
import FilterElement from '../../components/Elements/Filter';
import SearchElement from '../../components/Elements/Search';
import { clearFilterAndCurrentStateAC } from '../../store/filter/actions';
import { setCurrentState } from '../../store/filter/reducer';
import { getAllResumeAC } from '../../store/resume/action';
import searchSplitter from '../../store/utils/searchSplitter';
import './ResumePage.less';





const searchParams = {
    title: "",
    fullName: "",
}
const ResumePage = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    const [state, setState] = useState(searchParams)
    const { resumes, resumesLoading, filterSlice } = useSelector(({ resumeSlice: { resumes, resumesLoading }, filterSlice }) => ({ resumes, resumesLoading, filterSlice }))
    useEffect(() => {
        const previousSearch = (queryString.parse(history.location.search))?.search;
        if (!previousSearch) return dispatch(getAllResumeAC("page=0&size=10"))
        const updatedSearchParams = searchSplitter(previousSearch)
        setState(updatedSearchParams)
        dispatch(setCurrentState({ ...updatedSearchParams }))
        dispatch(getAllResumeAC(`search=${previousSearch}&page=0&size=10`))
    }, [history.location.search])

    useEffect(() => {

        return () => {
            dispatch(clearFilterAndCurrentStateAC())
        }
    }, [])

    const options = [
        {
            label: "Alphabetical",
            data: filterSlice.resumePage.alphabetical.map(value => ({ ...value, page: 'resume' })),
            icon: brownDropdown
        },
        {
            label: "Location",
            data: filterSlice.resumePage.locations.map(value => ({ ...value, page: 'resume' })),
            icon: darkgreenDropdown
        },
        // {
        //     label: "job category",
        //     data: filterSlice.categories,
        //     icon: pinkDropdown
        // },
        {
            label: "Degree Level",
            data: filterSlice.resumePage.degree.map(value => ({ ...value, page: 'resume' })),
            icon: skyblueDropdown
        },
        {
            label: "years of experience",
            data: filterSlice.resumePage.experiences.map(value => ({ ...value, page: 'resume' })),
            icon: purpleDropdown
        },
    ]

    const onSearchChange = ({ target: { value } }) => {
        setState({
            ...state,
            title: value,
            fullName: value,
        })
    }

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
                        const searchValue = state[m].join(",").replace(/'/g, "").split(",").map(value => `'${value}'`).join(",");
                        searchString += `${m}=in=(${searchValue});`;
                    } else {
                        const searchValue = state[m].join(",").replace(/'/g, "");
                        searchString += `${m}=='${searchValue}';`;
                    }
                }
            }
        }
        dispatch(setCurrentState({ ...state }))
        searchString = searchString.substring(0, searchString.length - 1).replace(/"/g, "");
        history.push(`/resume?page=0&size=10&${searchString}`)
    }
    return (
        <BaseMarkup className="background-image-left">
            <div className="desktop-layout">
                <SearchElement
                    onChange={onSearchChange}
                    onSearch={onSearch}
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
