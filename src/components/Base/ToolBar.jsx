import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { logo } from '../../assets/logo';

const activePage = (name) => window.location.pathname === name ? 'active-page' : '';
const shadow = () => (window.location.pathname === '/'  || window.location.pathname === '/contact-us' )? 'navbar-shadow' : '';
const ToolBar = () => {
    return (
        <div className={`tool-bar ${shadow()}`}>
            <div className="row">
                <div className="col-md-2">
                    <NavLink to="/">
                        <img src={logo} alt="logo" width="158" />
                    </NavLink>
                </div>
                <div className="col-md-6 tool-bar-links">
                    <NavLink className={activePage('/jobs')} to="/jobs">JOBS</NavLink>
                    <NavLink className={activePage('/resume')} to="/resume">RESUME</NavLink>
                    <NavLink className={activePage('/companies')} to="/companies">COMPANIES</NavLink>
                    <NavLink className={activePage('/blog')} to="/blog">BLOG</NavLink>
                    <NavLink className={activePage('/contact-us')} to="/contact-us">CONTACT US</NavLink>
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
