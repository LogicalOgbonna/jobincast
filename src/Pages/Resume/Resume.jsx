import './Resume.less';

import { Avatar, Button, Steps } from 'antd';
import React from 'react';

import BaseMarkup from '../../components/Base/BaseMarkup';



const { Step } = Steps;
const Resume = () => {
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout job-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center">
                            <Avatar size={100} />
                            <h2 className="job-page-company-name">John Doe</h2>
                            <p className= "slogan">Full Stack Web Developer</p>
                        </div>
                        <div className="col-md-10 job-details">
                            <h4 className= "lh50">General Information</h4>
                            <p>Address :</p>
                            <p>Location :  selected options</p>
                            <p>Job Title : input</p>
                            <p>Language(s) :  input</p>
                            <p>Highest Degree Level :  input</p>
                            <p>Total Years of Experience : input</p>
                            <br></br>

                            <p className="job-details-content">
                                We do not own any data, information or material (“Content”) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may, but have no obligation to, monitor and review Content on the Website submitted or created using our Services by you.
                            </p>
                            <br></br>
                            <div className="py-2">
                                <Steps direction="vertical" current={5}>
                                    <Step title="Education" description="This is a description." />
                                    <Step title="Work Experience" description="This is a description." />
                                    <Step title="Skills" description="This is a description." />
                                    <Step title="Awards" description="This is a description." />
                                </Steps>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <Button className="job-details-button">Download full Resume</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default Resume
