import './Search.less';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import { search_caret_down } from '../../assets/icons';
import Dropdown from './DropDown';

const SearchElement = ({ buttonText, onClick }) => {
    const options = [
        {
            label: "Category",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "location" }, { id: 1, label: "Paris, FR (CDG)", type: "location" }, { id: 2, label: "Paris, FR (CDG)", type: "location" }],
            icon: search_caret_down
        },
        {
            label: "Job Type",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "location" }, { id: 1, label: "Paris, FR (CDG)", type: "location" }, { id: 2, label: "Paris, FR (CDG)", type: "location" }],
            icon: search_caret_down
        },
        {
            label: "Job Location",
            data: [{ id: 0, label: "Istanbul, TR (AHL)", type: "location" }, { id: 1, label: "Paris, FR (CDG)", type: "location" }, { id: 2, label: "Paris, FR (CDG)", type: "location" }],
            icon: search_caret_down
        },
    ]
    return (
        <div className="search-element">
            <div className="container">
                {window.location.pathname === "/search" ?
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <Input prefix={<SearchOutlined style={{ fontSize: '24px' }} />} placeholder="Search by position title or applicant name " />
                        </div>
                        <div className="col-md-5 search-page-filter">
                            {options.map(option => <Dropdown className="bg-white" options={option.data} label={option.label} img={option.icon} />)}
                        </div>
                        <div className="col-md-2 text-right">
                            {/* <div className="col-md-3 text-right"> */}
                                <button onClick={onClick} className="search-element-button">{buttonText}</button>
                            {/* </div> */}
                        </div>
                    </div> :
                    <div className="row search-element-padding">
                        <div className="col-md-9">
                            <Input prefix={<SearchOutlined style={{ fontSize: '24px' }} />} placeholder="Search by position title or applicant name " />
                        </div>
                        <div className="col-md-3 text-right">
                            <button onClick={onClick} className="search-element-button">{buttonText}</button>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

SearchElement.propTypes = {
    buttonText: PropTypes.node,
    onClick: PropTypes.func,
}

SearchElement.defaultProps = {
    buttonText: <div><i className="fa fa-briefcase" /> POST RESUME</div>
}

export default SearchElement
