import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import "./Apply.scss"


import { applicantApplyAC } from '../../store/applicants/action';
import { DOC, PDF } from '../../assets/icons';

const Apply = ({ applied }) => {
    const { user, applyLoading, profile } = useSelector(({ authSlice: { user }, applicantsSlice: { applyLoading }, profileSlice: { profile } }) => ({ user, applyLoading, profile }))
    const dispatch = useDispatch()
    const [applyModal, setApplyModal] = useState(false)
    const [activeResume, setActiveResume] = useState(null)
    const { id } = useParams()
    const loggedInUser = localStorage.getItem("jobincast::user:token");
    const authority = user && user.roles ? user?.roles[0]?.authority : null;

    const apply = () => dispatch(applicantApplyAC({ jobId: id, documentId: activeResume?.id, cb: () => setApplyModal(false) }))

    const onApplyModalOpen = () => {
        setApplyModal(!applyModal)
    }

    const displayFileType = (type) => {
        return <div>
            <img width={type.toLowerCase() === "pdf" ? "30" : "20"} src={type.toLowerCase() === "pdf" ? PDF : DOC} alt={type} />
        </div>
    }
    return (
        <div className="row justify-content-center">
            <div className="col-12 text-center">
                <Employer loggedIn={loggedInUser} authority={authority} />
                <Applicant authority={authority} applied={applied} onClick={onApplyModalOpen} />
                <Guest loggedIn={loggedInUser} />
            </div>

            <Modal onCancel={onApplyModalOpen} title="Select Resume" visible={applyModal} footer={null}>
                <div className="pb-2 apply-modal">
                    {profile?.attachments?.filter(value => value.attachmentType === "DOCUMENT")?.map(value =>
                        <div onClick={() => setActiveResume(value)} key={value.id} className={`single-resume ${value.id === activeResume?.id ? 'active' : ''}`}>
                            <div>{value.attachmentName}</div>
                            {displayFileType(value.fileType)}
                        </div>
                    )}
                    <div className="button-section">
                        <Button loading={applyLoading} disabled={!activeResume} className="job-details-button" onClick={apply}>Apply</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Apply;

const Employer = ({ authority, loggedInUser }) => {
    if (!loggedInUser) return null;
    if (authority !== "EMPLOYER") return null;

    return <div className="text-center text-muted">You are an {authority}, you cannot apply for this position</div>

}
const Applicant = ({ authority, applied, onClick }) => {
    if (authority !== "APPLICANT") return null;
    if (applied) return <Link to="/applicant/applications" className="job-details-a-button">Check Application Status</Link>

    return <Button className="job-details-button" onClick={onClick}>Send Application</Button>
}

const Guest = ({ loggedIn }) => loggedIn ? null : <Link to="/auth?action=login" className="job-details-a-button">Send Application</Link>