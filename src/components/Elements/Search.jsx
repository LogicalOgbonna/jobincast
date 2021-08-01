import { SearchOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { search_caret_down } from '../../assets/icons';
import Dropdown from './DropDown';
import './Search.scss';





const SearchElement = ({ buttonText, onClick, onSearch, onChange, placeholder }) => {

    const onFinish = (e) => {
        e.preventDefault();
        onSearch(e.target.value);
    }
    const { user } = useSelector(({ authSlice: { user } }) => ({ user }))

    const options = [
        {
            label: "Search Type",
            data: [{ id: 0, label: "Job", type: "searchType", searchPage: true }, { id: 2, label: "Company", type: "searchType", searchPage: true }],
            icon: search_caret_down
        },
    ]

    const authority = user && user.roles ? user?.roles[0]?.authority : null;
    if (authority && authority === "EMPLOYER") {
        options[0].data.push({ id: 1, label: "Resume", type: "searchType", searchPage: true })
    }
    return (
        <div className="search-element">
            <div className="container search-layer">
                <div className="search-component">
                    <form onSubmit={onFinish}>
                        <SearchOutlined style={{ fontSize: '24px' }} />
                        <input onChange={onChange} required placeholder={placeholder ? placeholder : "Search by position title or applicant name "} />

                    </form>
                </div>
                {
                    window.location.pathname === "/search" &&
                    <div className="search-page-filter">
                        {options.map((option, index) => <Dropdown key={index} className="bg-fb" options={option.data} label={option.label} img={option.icon} />)}
                    </div>
                }
            </div>
        </div>
    )
}

SearchElement.propTypes = {
    buttonText: PropTypes.node,
    onClick: PropTypes.func,
}

SearchElement.defaultProps = {
    buttonText: <></>
}

export default SearchElement
