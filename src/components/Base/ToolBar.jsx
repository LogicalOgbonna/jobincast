import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { logo } from '../../assets/logo';

const ToolBar = () => {
    return (
        <div className="tool-bar">
            <div className="row">
                <div className="col-md-2">
                    <img src={logo} alt="logo" width="158" />
                </div>
                <div className="col-md-6 tool-bar-links">
                    <NavLink to="/jobs">JOBS</NavLink>
                    <NavLink to="/resume">RESUME</NavLink>
                    <NavLink to="/companies">COMPANIES</NavLink>
                    <NavLink to="/blog">BLOG</NavLink>
                    <NavLink to="/contact-us">CONTACT US</NavLink>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-end">
                    <div className="tool-bar-button">
                        <i className="fa fa-key" />
                        <Button size="small">LOG IN</Button>
                        <span className="px-2">|</span>
                        <Button size="small">SIGN UP</Button>
                    </div>

                    <SearchOutlined className="tool-bar-search-icon" />
                </div>
            </div>
        </div>
    )
}

export default ToolBar
