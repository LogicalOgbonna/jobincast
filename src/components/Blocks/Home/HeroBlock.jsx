import { Button, Input, Select } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { mappedCountries } from '../../../store/utils/countries';
import { mappedJobCategories, mappedJobTypes } from '../../../store/utils/jobs';
import './HeroBlock.less'

const { Option } = Select;

const HeroBlock = () => {
    const [search, setSearch] = useState({
        jobCategory: '',
        jobType: '',
        jobCountry: '',
        search: ''
    })
    return (
        <div className="hero-block">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="hero-heading">Job Casting is finally affordable & flexible</h1>

                    <p className="hero-sub-heading">More than 10,000 trusted jobs are available on the website for candidates to send to their applications and exactly find their expected jobs</p>

                    <div className="hero-search-container">
                        <Input onChange={e => setSearch({ ...search, search: e.target.value })} placeholder="Job Title" type="text" className="w-100" />
                        <Select onChange={jobCategory => setSearch({ ...search, jobCategory })} className="w-100" placeholder="Job Category">
                            {mappedJobCategories.map(({ label, value }) => <Option className="text-capitalize" value={value}>{label}</Option>)}
                        </Select>
                        <Select onChange={jobType => setSearch({ ...search, jobType })} className="w-100" placeholder="Job Type">
                            {mappedJobTypes.map(({ label, value }) => <Option className="text-capitalize" value={value}>{label}</Option>)}
                        </Select>
                        <Select onChange={jobCountry => setSearch({ ...search, jobCountry })} className="w-100" placeholder="Job Location">
                            {mappedCountries.map(({ label, value }) => <Option className="text-capitalize" value={value}>{label}</Option>)}
                        </Select>
                        <Link to={`/search?searchType=JOB&search=jobCountry==${search.jobCountry};jobCategory==${search.jobCategory};jobType==${search.jobType};jobTitle=='*${search.search}*'&page=0&size=10`} className="w-50">Search</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBlock
