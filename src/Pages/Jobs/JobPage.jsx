import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Avatar, Button } from 'antd'
import React from 'react'
import BaseMarkup from '../../components/Base/BaseMarkup'
import './JobPage.less'

const JobPage = () => {
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout job-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center">
                            <Avatar size={100} />
                            <h2 className="job-page-company-name">Bridge IT Solutions</h2>
                            <p className= "slogan">We Create the Internet</p>
                        </div>
                        <div className="col-md-10 job-details">
                            <h4>Full Stack Developer</h4>
                            <span className= "lh50 text-muted">Job Type: Full Time</span> <span className= "lh50 mx-2">|</span>
                            <span className= "lh50 text-muted">Job Category: Science & Technology</span>
                            <p className= "deadline font13">Application Deadline: 12th April, 2020</p>

                            <p className="job-details-title">Job Description</p>

                            <p className="job-details-content">
                                We do not own any data, information or material (“Content”) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may, but have no obligation to, monitor and review Content on the Website submitted or created using our Services by you.
                                We do not own any data, information or material (“Content”) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may, but have no obligation to, monitor and review Content on the Website submitted or created using our Services by you.
                                We do not own any data, information or material (“Content”) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may, but have no obligation to, monitor and review Content on the Website submitted or created using our Services by you.
                                We do not own any data, information or material (“Content”) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may, but have no obligation to, monitor and review Content on the Website submitted or created using our Services by you.
                                We do not own any data, information or material (“Content”) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may, but have no obligation to, monitor and review Content on the Website submitted or created using our Services by you.
                                We do not own any data, information or material (“Content”) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership
                                vuuiujkjkjkvjkvj
                            </p>

                            <p className="job-details-title">More Information</p>
                            <p>Address : address entered</p>
                            <p>Salary Offer :  inputed value</p>
                            <p>Minimum Experience Level : input</p>
                            <p>Minimum Degree Level :  input</p>

                            <br></br>
                            <br></br>
                            <br></br>

                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <Button className="job-details-button">Send Application</Button>
                                </div>
                                <div className="col-12 text-center">
                                    <div className="job-success-notification"><CheckOutlined />Application sent</div>
                                </div>
                                <div className="col-12 text-center">
                                    <div className="job-error-notification"><CloseOutlined />You require a resume to apply for this job</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default JobPage
