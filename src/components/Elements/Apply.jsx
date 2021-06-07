import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { applicantApplyAC } from '../../store/applicants/action';

const Apply = ({ applied }) => {
    const { user, applyLoading } = useSelector(({ authSlice: { user }, applicantsSlice: { applyLoading } }) => ({ user, applyLoading }))
    const dispatch = useDispatch()
    const { id } = useParams()
    const loggedInUser = localStorage.getItem("jobincast::user:token");
    const authority = user && user.roles ? user?.roles[0]?.authority : null;

    const apply = () => dispatch(applicantApplyAC(id))
    return (
        <div className="row justify-content-center">
            <div className="col-12 text-center">
                <Employer loggedIn={loggedInUser} authority={authority} />
                <Applicant authority={authority} applied={applied} applyLoading={applyLoading} apply={apply} />
                <Guest loggedIn={loggedInUser} />
            </div>
        </div>
    )
}

export default Apply;

const Employer = ({ authority, loggedInUser }) => {
    if (!loggedInUser) return null;
    if (authority !== "EMPLOYER") return null;

    return <div className="text-center text-muted">You are an {authority}, you cannot apply for this position</div>

}
const Applicant = ({ authority, applied, applyLoading, apply }) => {
    if (authority !== "APPLICANT") return null;
    if (applied) return <Link to="/applicant/applications" className="job-details-a-button">Check Application Status</Link>

    return <Button loading={applyLoading} className="job-details-button" onClick={apply}>Send Application</Button>
}

const Guest = ({ loggedIn }) => loggedIn ? null : <Link to="/auth?action=login" className="job-details-a-button">Send Application</Link>