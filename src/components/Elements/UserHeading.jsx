import './UserHeading.less';

import { UploadOutlined } from '@ant-design/icons';
import { Avatar, Button, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { uploadImageAction } from '../../store/profile/action';
import { active } from '../../assets/icons';



const UserHeading = ({ message, action, subMessage }) => {

    const dispatch = useDispatch();

    const { pathname } = useLocation()
    const customRequest = async options => {
        const { onSuccess, file, onProgress } = options;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileType", file.type.split("/")[1]);

        const config = {
            headers: { "content-type": "multipart/form-data" },
            onUploadProgress: event => {
                onProgress({ percent: (event.loaded / event.total) * 100 });
            }
        };

        dispatch(uploadImageAction({ data: formData, config, success: onSuccess }))

    }

    const { user, profile } = useSelector(({ authSlice: { user }, profileSlice: { profile } }) => ({ user, profile }))
    const authority = user?.roles[0]?.authority
    return (
        <div className={`col-md-11 user-heading-element pb-70`}>
            <div className="row justify-content-between">
                <div className="col-md-6 d-flex">
                    <ImgCrop aspect={1} shape="round" modalOk="Ok">
                        <Upload customRequest={customRequest}>
                            <Avatar style={{ cursor: "pointer" }} src={profile?.imageUrl} size={100}>
                                <UploadOutlined style={{ paddingTop: "30px", fontSize: "36px", color: "black" }} />
                            </Avatar>
                        </Upload>
                    </ImgCrop>
                    <div className="profile-page-header-text px-3 pt-2">
                        <h2 className="profile-page-profile-name mb-0">{`${user?.firstName} ${user?.lastName}`.substr(0, 14)}</h2>
                        <p className="mb-0">{message}</p>
                        <p className="mb-0">{subMessage}</p>
                    </div>
                </div>
                {action && action === "setup" ? ""
                    :
                    <div className="col-md-6 mt-auto">
                        {authority === "EMPLOYER" && <div className="row">
                            <div className="col-md-3 logged-in-nav-container">
                                <NavLink to="/employer/jobs" className="logged-in-nav">Jobs</NavLink>
                                {pathname === "/employer/jobs" && <img src={active} alt="active" />}
                            </div>
                            <div className="col-md-3 logged-in-nav-container">
                                <NavLink to="/employer/applicants" className="logged-in-nav">Applicants</NavLink>
                                {pathname === "/employer/applicants" && <img src={active} alt="active" />}
                            </div>
                            <div className="col-md-3 logged-in-nav-container">
                                <NavLink to="/employer/points" className="logged-in-nav">Points</NavLink>
                                {pathname === "/employer/points" && <img src={active} alt="active" />}
                            </div>
                            <div className="col-md-3 logged-in-nav-container">
                                <NavLink to="/profile?action=view" className="logged-in-nav">My Profile</NavLink>
                                {pathname === "/profile" && <img src={active} alt="active" />}
                            </div>
                        </div>}
                        {authority === "APPLICANT" && <div className="row">
                            <div className="col-md-3 logged-in-nav-container">
                            </div>
                            <div className="col-md-3 logged-in-nav-container">
                            </div>
                            <div className="col-md-3 logged-in-nav-container">
                                <NavLink to="/applicant/applications" className="logged-in-nav">Applications</NavLink>
                                {pathname === "/applicant/applications" && <img src={active} alt="active" />}
                            </div>
                            <div className="col-md-3 logged-in-nav-container">
                                <NavLink to="/profile?action=view" className="logged-in-nav">My Profile</NavLink>
                                {pathname === "/profile" && <img src={active} alt="active" />}
                            </div>
                        </div>}
                    </div>
                }
            </div>
        </div>
    )
}

export default UserHeading
