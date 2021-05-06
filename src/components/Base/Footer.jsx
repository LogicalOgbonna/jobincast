import './Footer.less';

import { Button, Input } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-block">
            <div className="container">
                <div className="footer-block-first-row row">
                    <div className="col-md-5 p-0">
                        <h4 className="footer-su">Subscribe to our Free Job Alerts</h4>
                        <p>We’ll never share your email address with a third-party</p>
                    </div>
                    <div className="col-md-5">
                        <Input placeholder="Enter your email..." className="w-65 footer-block-first-row-subscribe footer-block-first-row-subscribe-input" />
                        <Button className="w-25 footer-block-first-row-subscribe footer-block-first-row-subscribe-button text-white">Subscribe</Button>
                    </div>
                    <div className="col-md-2">
                        <a href="/" class="button-round"><i class="fa fa-google-plus"></i></a>
                        <a href="/" class="button-round"><i class="fa fa-twitter"></i></a>
                        <a href="/" class="button-round"><i class="fa fa-facebook"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-block-second-row">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-md-4">
                            <h4>FOR EMPLOYERS</h4>
                            <NavLink to="/post-job">Post Job</NavLink>
                            <NavLink to="/search-resume">Search Resumes</NavLink>
                            <NavLink to="/privacy">Privacy Policy</NavLink>
                            <NavLink to="/terms">Terms and Conditions</NavLink>
                        </div>
                        <div className="col-md-4">
                            <h4>FOR CANDIDATES</h4>
                            <NavLink to="/post-resume">Post Resumes</NavLink>
                            <NavLink to="/search-job">Search Job</NavLink>
                            <NavLink to="/post-job">Privacy Policy</NavLink>
                            <NavLink to="/post-job">Terms and Conditions</NavLink>
                        </div>
                        <div className="col-md-4">
                            <h4>CONTACT US</h4>
                            <div className="contact-info">
                                <div>
                                    Job In Casting Technologies (MA0267233-D)
                                </div>
                                <div>
                                    11-1, Jalan Tasik Utama,
                                </div>
                                <div>
                                    Medan Niaga Tasik Damai,
                                </div>
                                <div>
                                    Sungei Besi,
                                </div>
                                <div>
                                    50470 Kuala Lumpur, Malaysia.
                                </div>
                                <div>
                                    team.support@jobincast.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-block-third-row text-center">
                Copyright 2021 © Job In Casting Technologies. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
