import { Button } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Apply = () => {
    const user = useSelector(({ authSlice: { user } }) => user)
    const { push } = useHistory()
    const loggedInUser = localStorage.getItem("jobincast::user:token");
    const authority = user && user.roles ? user?.roles[0]?.authority : null;
    return (
        <div className="row justify-content-center">
            <div className="col-12 text-center">
                {loggedInUser ?
                    authority !== "APPLICANT" ?
                        <div className="text-center text-muted">You are an {authority}, you cannot apply for this position</div> :
                        <Button className="job-details-button">Send Application</Button>
                    :
                    <Button onClick={() => push("/auth?action=login")} className="job-details-button">Login</Button>}
            </div>
            {/* <div className="col-12 text-center">
                <div className="job-success-notification"><CheckOutlined />Application sent</div>
            </div>
            <div className="col-12 text-center">
                <div className="job-error-notification"><CloseOutlined />You require a resume to apply for this job</div>
            </div> */}
        </div>
    )
}

export default Apply
