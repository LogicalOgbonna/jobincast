import './RecentJobs.less';

import { ArrowRightOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { bridge, taletize, treehouse } from '../../../assets/images';
import BlockHeader from './BlockHeader';
import RecentJob from './RecentJob';

const RecentJobs = () => {
    return (
        <div className="recent-jobs-block">
            <div className="row justify-content-center">
                <div className="col-md-10">

                    <BlockHeader
                        heading="Recent Jobs"
                        subheading="More than 10,000 trusted jobs are available on the website for candidates to send to their applications and exactly find their expected jobs."
                    />
                    <RecentJob
                        img={taletize}
                        companny="Bridge IT Solutions"
                        position="Full Stack Developer"
                        address="18271 Dayton River Rd Dayton, Minnesota"
                        salary="$20,000"
                        category="Science & Technology | Full Time"
                    />
                    <RecentJob
                        img={taletize}
                        companny="Bridge IT Solutions"
                        position="Full Stack Developer"
                        address="18271 Dayton River Rd Dayton, Minnesota"
                        salary="$20,000"
                        category="Science & Technology | Full Time"
                    />
                    <RecentJob
                        img={taletize}
                        companny="Bridge IT Solutions"
                        position="Full Stack Developer"
                        address="18271 Dayton River Rd Dayton, Minnesota"
                        salary="$20,000"
                        category="Science & Technology | Full Time"
                    />
                    <div className="pull-right">
                        <Button className="recent-jobs-button">View All <ArrowRightOutlined className="mx-2 recent-jobs-button-icon" /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentJobs
