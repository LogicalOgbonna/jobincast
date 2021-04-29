import { Button, Input, Select } from 'antd'
import React from 'react'
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
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <Select className="w-100" placeholder="Job Type">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <Select className="w-100" placeholder="Job Location">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <Button className="w-100">Search</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBlock
