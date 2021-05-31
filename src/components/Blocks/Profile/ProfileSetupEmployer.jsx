import React, { useEffect, useState } from 'react'
import queryParams from "querystring"
import { useHistory } from 'react-router';


import Stepper from 'react-stepper-horizontal';
import GeneralInformation from './Employers/GeneralInformation';
import ContactInfo from './Employers/ContactInfo';
// import ResumeDetails from './ResumeDetails';
// import PreviewProfile from './PreviewProfile';
import { useDispatch, useSelector } from 'react-redux';
import { profileLoadingAction } from '../../../store/profile/action';
import JobDetails from './Employers/JobDetails';
const ProfileSetupEmployer = ({ action }) => {
    const dispatch = useDispatch();
    const { location: { search }, push } = useHistory()
    const { step, accountType } = queryParams.parse(search)
    const { generalInfoLoading, contactInfoLoading, resumeInfoLoading, previewSubmitLoading, } = useSelector(({ profileSlice }) => profileSlice)
    const [activeStep, setActiveStep] = useState(parseInt(step))

    useEffect(() => {
        setActiveStep(parseInt(step))
    }, [step, accountType])

    if (action !== "setup") return null;
    if (accountType !== "EMPLOYER") return null;

    const finishGeneralInfo = async (data) => {
        dispatch(profileLoadingAction({ data, type: "generalInfoLoading", push, accountType }))
    }
    const onFinishContactInfo = (data) => {
        dispatch(profileLoadingAction({ data, type: "contactInfoLoading", push, accountType }))
    }
    const onJobDetailsFinish = (data) => dispatch(profileLoadingAction({ data, type: "resumeInfoLoading", push, accountType }))
    const onFinishPreview = () => {
        push("/profile?action=view")
    }
    const steps = [
        { title: "Registration" },
        {
            title: "General Information",
            content: <GeneralInformation step={activeStep} loading={generalInfoLoading} accountType={accountType} finishGeneralInfo={finishGeneralInfo} />
        },
        {
            title: "Contact",
            content: <ContactInfo step={activeStep} loading={contactInfoLoading} accountType={accountType} onFinish={onFinishContactInfo} />
        },
        {
            title: "Job Details",
            content: <JobDetails step={activeStep} loading={resumeInfoLoading} accountType={accountType} onFinish={onJobDetailsFinish} />
        },
        // {
        //     title: "Preview",
        //     content: <PreviewProfile action={action} loading={previewSubmitLoading} accountType={accountType} onFinish={onFinishPreview} />
        // },
    ]
    return (
        <div className="col-md-11 applicant-details">
            <div className="profile-page-steps">
                <Stepper steps={[{ title: 'Registration', }, { title: 'Personal' }, { title: 'Contact' }]} activeStep={activeStep} />
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




export default ProfileSetupEmployer
