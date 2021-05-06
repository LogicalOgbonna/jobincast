import './RecentJobs.less';

import { ArrowRightOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { bridge, taletize, treehouse } from '../../../assets/images';
import BlockHeader from './BlockHeader';

const RecentJobs = () => {
    return (
        <div className="recent-jobs-block">
            <div className="row justify-content-center">
                <div className="col-md-10">

                    <BlockHeader
                        heading="Recent Jobs"
                        subheading="More than 10,000 trusted jobs are available on the website for candidates to send to their applications and exactly find their expected jobs."
                    />
                    <div className="recent-jobs-card">
                        <NavLink to="/">
                            <div className="row">


                                <div className="col-md-2">
                                    <img src={taletize} alt="taletize" />
                                </div>
                                <div className="col-md-7 recent-jobs-card-text-section">
                                    <h5>Full Stack Developer</h5>
                                    <p><NavLink to="/company">Bridge IT Solutions</NavLink></p>
                                    <span className="text-muted">18271 Dayton River Rd Dayton, Minnesota</span>
                                    <p className="text-muted">$20,000</p>
                                    <p>Science & Technology | Full Time</p>
                                </div>
                                <div className="col-md-3 text-right d-flex justify-content-end recent-jobs-card-icon-section">
                                    <FieldTimeOutlined className="recent-jobs-card-icon" /> <span className="pl-2 text-muted">3 April 2021</span>
                                </div>

                                <Divider style={{ margin: "24px 0 0 0" }} />
                            </div>
                        </NavLink>
                    </div>
                    <div className="recent-jobs-card">
                        <NavLink to="/">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={treehouse} alt="treehouse" />
                                </div>
                                <div className="col-md-7 recent-jobs-card-text-section">
                                    <h5>Full Stack Developer</h5>
                                    <p><NavLink to="/company">Bridge IT Solutions</NavLink></p>
                                    <span className="text-muted">18271 Dayton River Rd Dayton, Minnesota</span>
                                    <p className="text-muted">$20,000</p>
                                    <p>Science & Technology | Full Time</p>
                                </div>
                                <div className="col-md-3 text-right d-flex justify-content-end recent-jobs-card-icon-section">
                                    <FieldTimeOutlined className="recent-jobs-card-icon" /> <span className="pl-2 text-muted">3 April 2021</span>
                                </div>

                                <Divider style={{ margin: "24px 0 0 0" }} />
                            </div>
                        </NavLink>
                    </div>
                    <div className="recent-jobs-card">
                        <NavLink to="/">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={bridge} alt="bridge" />
                                </div>
                                <div className="col-md-7 recent-jobs-card-text-section">
                                    <h5>Full Stack Developer</h5>
                                    <p><NavLink to="/company">Bridge IT Solutions</NavLink></p>
                                    <span className="text-muted">18271 Dayton River Rd Dayton, Minnesota</span>
                                    <p className="text-muted">$20,000</p>
                                    <p>Science & Technology | Full Time</p>
                                </div>
                                <div className="col-md-3 text-right d-flex justify-content-end recent-jobs-card-icon-section">
                                    <FieldTimeOutlined className="recent-jobs-card-icon" /> <span className="pl-2 text-muted">3 April 2021</span>
                                </div>

                                <Divider style={{ margin: "24px 0 0 0" }} />
                            </div>
                        </NavLink>
                    </div>
                    <div className="pull-right">
                        <Button className="recent-jobs-button">View All <ArrowRightOutlined className="mx-2 recent-jobs-button-icon" /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentJobs
