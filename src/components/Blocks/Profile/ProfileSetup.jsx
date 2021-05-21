import React, { useEffect, useState } from 'react'
import queryParams from "querystring"
import { useHistory } from 'react-router';


import Stepper from 'react-stepper-horizontal';
import GeneralInformation from './GeneralInformation';
import ContactInfo from './ContactInfo';
import ResumeDetails from './ResumeDetails';
import PreviewProfile from './PreviewProfile';
import { useDispatch, useSelector } from 'react-redux';
import { profileLoadingAction } from '../../../store/profile/action';
const ProfileSetup = ({ action }) => {
    const dispatch = useDispatch();
    const { location: { search }, push } = useHistory()
    const { step, accountType } = queryParams.parse(search)
    const { generalInfoLoading, contactInfoLoading, resumeInfoLoading, previewSubmitLoading, } = useSelector(({ profileSlice }) => profileSlice)
    const [activeStep, setActiveStep] = useState(parseInt(step))

    useEffect(() => {
        setActiveStep(parseInt(step))
    }, [step])

    if (action !== "setup") return null;

    const finishGeneralInfo = async (data) => {
        dispatch(profileLoadingAction({ data, type: "generalInfoLoading", push, accountType }))
    }
    const onFinishContactInfo = (data) => {
        dispatch(profileLoadingAction({ data, type: "contactInfoLoading", push, accountType }))
    }
    const onFinishResumeDetails = (data) => {
        dispatch(profileLoadingAction({ data, type: "resumeInfoLoading", push, accountType }))
    }
    const onFinishPreview = () => {
        push("/profile?action=view")
    }
    const steps = [
        { title: "Registration" },
        {
            title: "General Information",
            content: <GeneralInformation loading={generalInfoLoading} accountType={accountType} finishGeneralInfo={finishGeneralInfo} />
        },
        {
            title: "Contact Information",
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
