import { SearchOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { search_caret_down } from '../../assets/icons';
import Dropdown from './DropDown';
import './Search.less';





const SearchElement = ({ buttonText, onClick, onSearch, onChange }) => {

    const onFinish = ({ search }) => onSearch(search)
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
            <div className="container">
                {window.location.pathname === "/search" ?
                    <div className="row align-items-center search-element-padding">
                        <div className="col-md-5">
                            <Input prefix={<SearchOutlined style={{ fontSize: '24px' }} />} placeholder="Search by position title or applicant name " />
                        </div>
                        <div className="col-md-5 search-page-filter">
                            {options.map(option => <Dropdown className="bg-fb" options={option.data} label={option.label} img={option.icon} />)}
                        </div>
                        <div className="col-md-2 text-right">
                            <button onClick={onClick} className="search-element-button">{buttonText}</button>
                        </div>
                    </div> :
                    <div className="row search-element-padding">
                        <div className="col-md-9">
                            <Form onFinish={onFinish}>
                                <Form.Item name="search" rules={[{ required: true, message: "" }]}>
                                    <Input onChange={onChange} prefix={<SearchOutlined style={{ fontSize: '24px' }} />} placeholder="Search by position title or applicant name " />
                                </Form.Item>

                            </Form>
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
