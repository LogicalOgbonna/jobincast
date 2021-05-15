import { Button, Dropdown, Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import { logo } from '../../assets/logo';


const activePage = (name) => window.location.pathname === name ? 'active-page' : '';
const shadow = () => (window.location.pathname === '/companies' || window.location.pathname === '/resume' || window.location.pathname === '/jobs' || window.location.pathname === '/search') ? '' : 'navbar-shadow';

const menu = ({ roles }) => {
    const { authority } = roles[0];
    return (
        <Menu style={{ borderRadius: "10px", padding: "10px" }}>
            {authority === "APPLICANT" &&
                <Menu.Item key="1">
                    <NavLink to="/myApplication">My Applications</NavLink>
                </Menu.Item>
            }
            {authority === "EMPLOYER" &&
                <Menu.Item key="1">
                    <NavLink to="/employer/applicants">Applicants</NavLink>
                </Menu.Item>
            }
            {authority === "EMPLOYER" &&
                <Menu.Item key="1">
                    <NavLink to="/employer/jobs">My Jobs</NavLink>
                </Menu.Item>
            }
            <Menu.Item key="0">
                <NavLink to="/profile?action=view">My Profile</NavLink>
            </Menu.Item>
        </Menu>
    )
};
const ToolBar = () => {
    const loggedIn = localStorage.getItem("jobincast::user:token")
    const history = useHistory()
    const user = useSelector(({ authSlice: { user } }) => user)

    const logout = () => {
        localStorage.clear()
        window.location.href = "/";
    }
    return (
        <div className={`tool-bar ${shadow()} desktop-layout`}>
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
                    <NavLink className={activePage('/blogs')} to="/blogs">BLOG</NavLink>
                    <NavLink className={activePage('/contact-us')} to="/contact-us">CONTACT US</NavLink>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-end">
                    {!loggedIn && <div className="tool-bar-button">
                        <Button size="small" onClick={() => history.push('/auth?action=login')}><i className="fa fa-key pr-2" /> LOG IN <span className="px-2">|</span>SIGN UP </Button>
                    </div>
                    }

                    {loggedIn && <div className="user-menu">
                        <Dropdown overlayStyle={{ width: "200px" }} overlay={() => menu(user)} trigger={['click']}>
                            <div className="user-avatar">
                                <Avatar src={logo} size={36} /> <span className="px-3">{user?.firstName}</span>
                            </div>
                        </Dropdown>
                            |
                            <button className="user-menu-button px-3" type="link" onClick={logout}>Logout</button>
                    </div>}
                    <Button onClick={() => history.push("/search")} className={`${activePage('/search')} search-button`}><i className="fa fa-search" /></Button>
                </div>
            </div>
        </div>
    )
}

export default ToolBar
