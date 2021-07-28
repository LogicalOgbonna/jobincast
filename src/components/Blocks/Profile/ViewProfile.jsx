import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import PreviewProfile from './Applicants/PreviewProfile'

const ViewProfile = ({ action }) => {
    const user = useSelector(({ authSlice: { user } }) => user)
    const { push } = useHistory()

    if (action !== "view") return null


    const onFinish = () => push(`/profile?action=setup&step=1&accountType=${user?.roles?.[0]?.authority}`);
    return (
        <div className="col-md-11 applicant-details">
            <div className="profile-page-step-contents py-5">
                <div className="row justify-content-center profile-page-step-contents-body">
                    <div className="col-md-10">
                        <PreviewProfile accountType={user?.roles?.[0]?.authority} onFinish={onFinish} action={action} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProfile
