import { Button } from 'antd';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { logo } from '../../assets/logo';

const activePage = (name) => window.location.pathname === name ? 'active-page' : '';
const shadow = () => (window.location.pathname === '/companies' || window.location.pathname === '/resume' || window.location.pathname === '/jobs' || window.location.pathname === '/search') ? '' : 'navbar-shadow';
const ToolBar = () => {

    const history = useHistory()
    return (
        <div className={`tool-bar ${shadow()}`}>
            <div className="row">
                <div className="col-md-2">
                    <NavLink to="/">
                        <img src={logo} alt="logo" className="tool-bar-logo" />
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
                        <Button size="small">Login</Button>
                        <span className="px-2">|</span>
                        <Button size="small">Register</Button>
                    </div>

                    <Button onClick={() => history.push("/search")} className={`${activePage('/search')} search-button`}><i className="fa fa-search" /></Button>
                </div>
            </div>
        </div>
    )
}

export default ToolBar
