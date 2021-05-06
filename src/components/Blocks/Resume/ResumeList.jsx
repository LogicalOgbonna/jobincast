import './ResumeList.less';

import React from 'react';

import { taletize } from '../../../assets/images';
import { Pagination } from 'antd';
import Resume from './Resume';
import { NavLink } from 'react-router-dom';

const ResumeList = () => {
    return (
        <div className="resume-list-block">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <NavLink to="/resume/aklfjslfjd">
                        <Resume
                            name="John Doe"
                            stack="FULLSTACK DEVELOPER"
                            address="18271 Dayton River Rd Dayton, Minnesota"
                            tech="Science & Technology | Full Time"
                            img={taletize}
                            posted="12th April, 2020"
                        />

                        <div className="text-right">
                            <Pagination className="resume-pagination" defaultCurrent={1} total={50} />
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ResumeList
