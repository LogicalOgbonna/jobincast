import { Select } from 'antd'
import React from 'react'
import './Filter.less'

const { Option } = Select;

const FilterElement = () => {
    return (
        <div className="filter-element">
            <div className="filter-section">
                <Select className="w-50">
                    <Option value="Hello">Hello</Option>
                </Select>
            </div>
        </div>
    )
}

export default FilterElement
