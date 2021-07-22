import React, { useEffect, useState } from 'react'
import queryParams from "querystring"
import { useHistory } from 'react-router';


import Stepper from 'react-stepper-horizontal';
import GeneralInformation from './Applicants/GeneralInformation';
import ContactInfo from './Applicants/ContactInfo';
import ResumeDetails from './Applicants/ResumeDetails';
import PreviewProfile from './Applicants/PreviewProfile';
import { useDispatch, useSelector } from 'react-redux';
import { profileLoadingAction, removeResumeAC, uploadResumeAC } from '../../../store/profile/action';
import jobincast from '../../../axios';
const ProfileSetup = ({ action }) => {
    const dispatch = useDispatch();
    const { location: { search }, push } = useHistory()
    const { step, accountType } = queryParams.parse(search)
    const { generalInfoLoading, contactInfoLoading, resumeInfoLoading, previewSubmitLoading, } = useSelector(({ profileSlice }) => profileSlice)
    const [activeStep, setActiveStep] = useState(parseInt(step))

    useEffect(() => {
        setActiveStep(parseInt(step))
    }, [step, accountType])

    if (action !== "setup") return null;
    if (accountType !== "APPLICANT") return null;

    const finishGeneralInfo = async (data) => dispatch(profileLoadingAction({ data, type: "generalInfoLoading", push, accountType }))
    const onResumeInputChange = (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("file", file)
        formData.append("fileType", `.${file.name.split('.')[file.name.split('.').length - 1]}`)
        dispatch(uploadResumeAC(formData))
    }

    const removeResume = (id) => dispatch(removeResumeAC(id))
    const onFinishContactInfo = (data) => dispatch(profileLoadingAction({ data, type: "contactInfoLoading", push, accountType }))
    const onFinishResumeDetails = (data) => dispatch(profileLoadingAction({ data, type: "resumeInfoLoading", push, accountType }))
    const onFinishPreview = () => push("/profile?action=view")
    const steps = [
        { title: "Registration" },
        {
            title: "General Information",
            content: <GeneralInformation removeResume={removeResume} onResumeInputChange={onResumeInputChange} loading={generalInfoLoading} accountType={accountType} finishGeneralInfo={finishGeneralInfo} />
        },
        {
            title: "Contact",
            content: <ContactInfo loading={contactInfoLoading} accountType={accountType} onFinish={onFinishContactInfo} />
        },
        {
            title: "Resume Details",
            content: <ResumeDetails loading={resumeInfoLoading} accountType={accountType} onFinish={onFinishResumeDetails} />
        },
        {
            title: "Preview",
            content: <PreviewProfile action={action} loading={previewSubmitLoading} accountType={accountType} onFinish={onFinishPreview} />
        },
    ]
    return (
        <div className="col-md-11 applicant-details">
            <div className="profile-page-steps">
                <Stepper steps={[{ title: 'Registration', }, { title: 'Personal' }, { title: 'Contact' }, { title: 'Resume Details' }, { title: 'Preview and Submit' }]} activeStep={activeStep} />
            </div>

            <div className="profile-page-step-contents">
                <div className="profile-content-header text-center">
                    {steps[activeStep]?.title}
                </div>

                <div className="row justify-content-center profile-page-step-contents-body">
                    <div className="col-md-10">
                        {steps[activeStep]?.content}
                    </div>
                </div>
            </div>
        </div>
    )
}




export default ProfileSetup
