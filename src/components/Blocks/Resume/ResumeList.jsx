import './ResumeList.less';

import React from 'react';

import { taletize } from '../../../assets/images';
import { Pagination } from 'antd';
import Resume from './Resume';
import { NavLink } from 'react-router-dom';

const ResumeList = ({ data: { content, totalElements } }) => {
    return (
        <div className="resume-list-block">
            <div className="row justify-content-center">
                {content.map(resume =>
                    <div className="col-md-12">
                        <NavLink to={`/resume/${resume.id}`}>
                            <Resume
                                name={`${resume.firstName} ${resume.lastName}`}
                                stack="FULLSTACK DEVELOPER"
                                address="18271 Dayton River Rd Dayton, Minnesota"
                                tech="Science & Technology | Full Time"
                                img={taletize}
                                posted="12th April, 2020"
                            />

                            {content.length > 0 && <div className="text-right">
                                <Pagination className="resume-pagination" defaultCurrent={1} total={totalElements} />
                            </div>}
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ResumeList
