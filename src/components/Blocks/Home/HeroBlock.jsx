import { Button, Input, Select } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import { mappedCountries } from '../../../store/utils/countries';
import { mappedJobCategories, mappedJobTypes } from '../../../store/utils/jobs';
import './HeroBlock.less'

const { Option } = Select;

const HeroBlock = () => {
    return (
        <div className="hero-block">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="hero-heading">Job Casting is finally affordable & flexible</h1>

                    <p className="hero-sub-heading">More than 10,000 trusted jobs are available on the website for candidates to send to their applications and exactly find their expected jobs</p>

                    <div className="hero-search-container">
                        <Input placeholder="Keyword" type="text" className="w-100" />
                        <Select className="w-100" placeholder="Job Category">
                            {mappedJobCategories.map(({ label, value }) => <Option className="text-capitalize" value={value}>{label}</Option>)}
                        </Select>
                        <Select className="w-100" placeholder="Job Type">
                            {mappedJobTypes.map(({ label, value }) => <Option className="text-capitalize" value={value}>{label}</Option>)}
                        </Select>
                        <Select className="w-100" placeholder="Job Location">
                            {mappedCountries.map(({ label, value }) => <Option className="text-capitalize" value={value}>{label}</Option>)}
                        </Select>
                        <Link to="/search" className="w-50">Search</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBlock
