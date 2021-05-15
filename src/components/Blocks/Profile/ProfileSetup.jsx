import React, { useState } from 'react'


import Stepper from 'react-stepper-horizontal';
import GeneralInformation from './GeneralInformation';
const ProfileSetup = ({ action }) => {
    const [activeStep, setActiveStep] = useState(1)
    if (action !== "setup") return null;

    const finishGeneralInfo = (data) => {
        console.log(data)
    }
    const steps = [
        { title: "Registration" },
        {
            title: "General Information",
            content: <GeneralInformation finishGeneralInfo={finishGeneralInfo} />
        },
    ]
    return (
        <div className="col-md-11 applicant-details">
            <div className="profile-page-steps">
                <Stepper steps={[{ title: 'Registration', }, { title: 'Information' }, { title: 'Resume Details' }, { title: 'Preview and Submit' }]} activeStep={activeStep} />
            </div>

            <div className="profile-page-step-contents">
                <div className="profile-content-header text-center">
                    {steps[activeStep].title}
                </div>

                <div className="row justify-content-center profile-page-step-contents-body">
                    <div className="col-md-10">
                        {steps[activeStep].content}
                    </div>
                </div>
            </div>
        </div>
    )
}




export default ProfileSetup
