import './Filter.less';

import React from 'react';

import { brownDropdown, darkgreenDropdown, pinkDropdown, purpleDropdown, skyblueDropdown } from '../../assets/icons';
import Dropdown from './DropDown';
import FilterPills from './FilterPills';

const FilterElement = () => {
    return (
        <div className="filter-element">
            <div className="filter-section row">
                <div className="col-md-2 filter-dropdown">
                    <Dropdown options={[{ id: 0, label: "Istanbul, TR (AHL)", type: "location" }, { id: 1, label: "Paris, FR (CDG)", type: "location" }, { id: 2, label: "Paris, FR (CDG)", type: "location" }]} label="location" img={brownDropdown} />
                </div>
                <div className="col-md-2 filter-dropdown">
                    <Dropdown options={[{ id: 0, label: "Istanbul, TR (AHL)", type: "category" }, { id: 1, label: "Paris, FR (CDG)", type: "category" }, { id: 2, label: "Paris, FR (CDG)", type: "category" }]} label="job category" img={pinkDropdown} />
                </div>
                <div className="col-md-2 filter-dropdown">
                    <Dropdown options={[{ id: 0, label: "Istanbul, TR (AHL)", type: "salary" }, { id: 1, label: "Paris, FR (CDG)", type: "salary" }, { id: 2, label: "Paris, FR (CDG)", type: "salary" }]} label="salary" img={skyblueDropdown} />
                </div>
                <div className="col-md-2 filter-dropdown">
                    <Dropdown options={[{ id: 0, label: "Istanbul, TR (AHL)", type: "type" }, { id: 1, label: "Paris, FR (CDG)", type: "type" }, { id: 2, label: "Paris, FR (CDG)", type: "type" }]} label="job type" img={darkgreenDropdown} />
                </div>
                <div className="col-md-2 filter-dropdown">
                    <Dropdown options={[{ id: 0, label: "Istanbul, TR (AHL)", type: "experience" }, { id: 1, label: "Paris, FR (CDG)", type: "experience" }]} label="years of experience" img={purpleDropdown} />
                </div>
            </div>

            <div className="filter-element-pills">
                <FilterPills />
            </div>
        </div>
    )
}

export default FilterElement
