import { ConsoleSqlOutlined, UploadOutlined } from '@ant-design/icons';
import { Avatar, Upload } from 'antd'
import React from 'react'
import ImgCrop from 'antd-img-crop';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './UserHeading.less'
const UserHeading = ({ message, action, subMessage }) => {

    const customRequest = async options => {
        const { onSuccess, onError, file, onProgress } = options;
    }

    const user = useSelector(({ authSlice: { user } }) => user)
    const authority = user?.roles[0]?.authority
    return (
        <div className="col-md-11 user-heading-element">
            <div className="row justify-content-between">
                <div className="col-md-6 d-flex">
                    <ImgCrop aspect={1} shape="round" modalOk="Ok">
                        <Upload customRequest={customRequest}>
                            <Avatar size={100}>
                                <UploadOutlined style={{ paddingTop: "30px", fontSize: "36px", color: "black", cursor: "pointer" }} />
                            </Avatar>
                        </Upload>
                    </ImgCrop>
                    <div className="profile-page-header-text px-3 pt-2">
                        <h2 className="profile-page-profile-name mb-0">{`${user?.firstName} ${user?.lastName}`}</h2>
                        <p className="mb-0">{message}</p>
                        <p className="mb-0">{subMessage}</p>
                    </div>
                </div>
                {action && action === "setup" ? ""
                    :
                    <div className="col-md-6 d-flex justify-content-between mt-auto">
                        {authority === "EMPLOYER" && <p><NavLink to="/employer/jobs" className="logged-in-nav">Jobs</NavLink></p>}
                        {authority === "EMPLOYER" && <p><NavLink to="/employer/applicants" className="logged-in-nav">Applicants</NavLink></p>}
                        {authority === "EMPLOYER" && <p><NavLink to="/employer/points" className="logged-in-nav">Points</NavLink></p>}
                        {authority === "APPLICANT" && <p><NavLink to="/applicant/resume" className="logged-in-nav">Resume</NavLink></p>}
                        {authority === "APPLICANT" && <p><NavLink to="/applicant/applications" className="logged-in-nav">Applications</NavLink></p>}
                        <p><NavLink to="/profile?action=view" className="logged-in-nav">My Profile</NavLink></p>
                    </div>
                }
            </div>
        </div>
    )
}

export default UserHeading
