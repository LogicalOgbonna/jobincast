import { Button, Input, Select } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { mappedCountries } from '../../../store/utils/countries';
import { mappedJobCategories, mappedJobTypes } from '../../../store/utils/jobs';
import './HeroBlock.scss'

const { Option } = Select;

const HeroBlock = () => {
    const [search, setSearch] = useState({
        // jobCategory: '',
        // jobType: '',
        // jobCountry: '',
        // search: ''
    })

    const toFormatted = () => {
        let url = '/search?searchType=JOB&search=';
        for (let key in search) {
            if (key === "jobTitle") {
                url = `${url}${key}==*${search[key]}*;`
            } else {
                url = `${url}${key}==${search[key]};`
            }
        }
        return `${url.replace(/;$/, "")}&page=0&size=10`
    }

    const onSetSearch = (name, value) => setSearch({ ...search, [name]: value })
    return (
        <div className="hero-block">
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="hero-heading">Job Casting is finally affordable & flexible</h1>

                    <p className="hero-sub-heading">More than 10,000 trusted jobs are available on the website for candidates to send to their applications and exactly find their expected jobs</p>

                    <div className="hero-search-container">
                        <Input onChange={e => onSetSearch("jobTitle", e.target.value)} placeholder="Job Title" type="text" className="w-100" />
                        <Select onChange={jobCategory => onSetSearch("jobCategory", jobCategory)} className="w-100" placeholder="Job Category">
                            {mappedJobCategories.map(({ label, value }) => <Option className="text-capitalize" value={value}>{label}</Option>)}
                        </Select>
                        <Select onChange={jobType => onSetSearch("jobType", jobType)} className="w-100" placeholder="Job Type">
                            {mappedJobTypes.map(({ label, value }) => <Option className="text-capitalize" value={value}>{label}</Option>)}
                        </Select>
                        <Select onChange={jobCountry => onSetSearch("jobCountry", jobCountry)} className="w-100" placeholder="Job Location">
                            {mappedCountries.map(({ label, value }) => <Option className="text-capitalize" value={value}>{label}</Option>)}
                        </Select>
                        <Link to={toFormatted()} className="w-50">Search</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBlock
