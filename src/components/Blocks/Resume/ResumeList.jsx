import './ResumeList.less';

import { Pagination } from 'antd';
import moment from 'moment';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Resume from './Resume';

const ResumeList = ({ data: { content, totalElements } }) => {
    return (
        <div className="resume-list-block">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    {content.map(resume =>
                        <NavLink key={resume.profileId} to={`/resume/${resume.profileId}`}>
                            <Resume
                                name={resume?.fullName}
                                stack={resume?.title}
                                address="18271 Dayton River Rd Dayton, Minnesota"
                                tech={resume?.shortBio}
                                img={resume?.imageURL}
                                posted={moment(resume.createdAt).fromNow()}
                            />

                        </NavLink>
                    )}
                    {content.length > 0 && <div className="text-right">
                        <Pagination className="resume-pagination" defaultCurrent={1} total={totalElements} />
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ResumeList
