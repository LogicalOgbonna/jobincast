import { Button, Divider, Dropdown, Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { hamburger } from '../../assets/icons';

import { logo } from '../../assets/logo';


const activePage = (name) => window.location.pathname === name ? 'active-page' : '';
const shadow = () => (window.location.pathname === '/companies' || window.location.pathname === '/resume' || window.location.pathname === '/jobs' || window.location.pathname === '/search') ? '' : 'navbar-shadow';

const menu = (authority) => {
    return (
        <Menu style={{ borderRadius: "10px", padding: "10px" }}>
            {authority === "APPLICANT" &&
                <Menu.Item key="1">
                    <NavLink to="/applicant/applications">My Applications</NavLink>
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
            {authority === "EMPLOYER" &&
                <Menu.Item key="1">
                    <NavLink to="/employer/points">Buy Points</NavLink>
                </Menu.Item>
            }
            <Menu.Item key="0">
                <NavLink to="/profile?action=view">My Profile</NavLink>
            </Menu.Item>
        </Menu>
    )
};

const menuNavigation = <Menu style={{ marginTop: "10px" }}>
    <Menu.Item style={{ padding: "10px 20px" }} key="1">
        <NavLink to="/jobs">JOBS</NavLink>
    </Menu.Item>
    <Menu.Item style={{ padding: "10px 20px" }} key="2">
        <NavLink to="/resumes">RESUMES</NavLink>
    </Menu.Item>
    <Menu.Item style={{ padding: "10px 20px" }} key="3">
        <NavLink to="/companies">COMPANIES</NavLink>
    </Menu.Item>
    <Menu.Item style={{ padding: "10px 20px" }} key="4">
        <NavLink to="/blogs">BLOGS</NavLink>
    </Menu.Item>
    <Menu.Item style={{ padding: "10px 20px" }} key="5">
        <NavLink to="/contact-us">CONTACT US</NavLink>
    </Menu.Item>
    <Menu.Item style={{ margin: "10px 0" }} key="5">
        <hr />
    </Menu.Item>
</Menu>

const ToolBar = () => {
    const loggedIn = localStorage.getItem("jobincast::user:token")
    const history = useHistory()
    const { user, profile } = useSelector(({ authSlice: { user }, profileSlice: { profile } }) => ({ user, profile }))
    const logout = () => {
        localStorage.clear()
        window.location.href = "/";
    }

    const authority = user && user.roles ? user?.roles[0]?.authority : null;
    return (
        <div className={`tool-bar ${shadow()} desktop-layout`}>
            <div className="flex-display">
                <div className="logo-hamburger">
                    <Dropdown overlayStyle={{ width: "100%", zIndex: 1, marginTop: 14, position: "fixed" }} overlay={menuNavigation} placement="bottomCenter" trigger={['click']}>
                        <button className="tool-bar-hamburger">
                            <img src={hamburger} alt="hamburger" />
                        </button>
                    </Dropdown>
                    <NavLink to="/">
                        <img src={logo} alt="logo" className="tool-bar-logo" />
                    </NavLink>
                </div>
                <div className=" tool-bar-links">
                    <NavLink className={activePage('/')} to="/">HOME</NavLink>
                    <NavLink className={activePage('/jobs')} to="/jobs">JOBS</NavLink>
                    {authority === "EMPLOYER" && <NavLink className={activePage('/resume')} to="/resume">RESUME</NavLink>}
                    <NavLink className={activePage('/companies')} to="/companies">COMPANIES</NavLink>
                    <NavLink className={activePage('/blogs')} to="/blogs">BLOG</NavLink>
                    <NavLink className={activePage('/contact-us')} to="/contact-us">CONTACT US</NavLink>
                </div>
                <div className=" d-flex align-items-center justify-content-end">
                    {!loggedIn && <div className="tool-bar-button">
                        <Button size="small" onClick={() => history.push('/auth?action=login')}><i className={"fa fa-key pr-2"} /> Login <span className="px-2">|</span>Register </Button>
                    </div>
                    }

                    {loggedIn && <div className="user-menu">
                        <Dropdown overlayStyle={{ width: "200px" }} overlay={() => menu(authority)} trigger={['click']}>
                            <div className="user-avatar">
                                <Avatar src={profile ? profile?.imageUrl : logo} size={36} /> <span className="px-3">{user?.firstName}</span>
                            </div>
                        </Dropdown>
                        |
                        <button className="user-menu-button px-3" type="link" onClick={logout}>Logout</button>
                    </div>}
                    <Button onClick={() => history.push("/search")} className={`search-button`}><i className="fa fa-search" /></Button>
                </div>
            </div>
        </div>
    )
}

export default ToolBar
