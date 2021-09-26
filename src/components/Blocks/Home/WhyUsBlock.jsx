import React from 'react'
import { money, stack, addressBook, trumpet, available } from '../../../assets/icons'
import BlockHeader from './BlockHeader'
import './WhyUsBlock.scss'
const WhyUsBlock = () => {
    return (
        <div className="why-choose-us-block">
            <div className="row justify-content-center">
                <div className="col-lg-10">

                    <BlockHeader
                        heading="Why Use JobinCast"
                        subheading="More than 10,000 trusted jobs are available on the website for candidates to send to their applications and exactly find their expected jobs."
                    />

                    <div className="row justify-content-center whyUsInput">
                        <div className="col-lg-4 whyUsBlock">
                            <div className="why-us-card margin-buttom">
                                <img src={money} alt="money" />
                                <h5 className="my-3">Pay as You Go</h5>
                                <p>Why pay for unqualified talent? With us, employers or recruiter can post unlimited job ads for free, but you only pay when you ready to select or shortlist a talent.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 whyUsBlock">
                            <div className="why-us-card margin-buttom">
                                <img src={available} alt="available" />
                                <h5 className="my-3">Affordability & Flexibility</h5>
                                <p>Our pay-as-you-go rate starts at $2 per contact reveal. You can buy a minimum credit of $10. Credit balance has no expiry date.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 whyUsBlock">
                            <div className="why-us-card">
                                <img src={stack} alt="stack" />
                                <h5 className="my-3">Standalone Resume Database</h5>
                                <p>Employers can get talents right away from our robust resume database at $2 per contact reveal. and then add your job ad separately later.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 whyUsBlock">
                            <div className="why-us-card">
                                <img src={stack} alt="stack" />
                                <h5 className="my-3">Free Job Application</h5>
                                <p>Join as a standard member, create your resume instantly for free and you are ready to apply for jobs advertised. All is free, with no hidden cost.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 whyUsBlock">
                            <div className="why-us-card margin-buttom">
                                <img src={addressBook} alt="addressBook" />
                                <h5 className="my-3">Premium Resume</h5>
                                <p>Talents can choose for a premium resume with a 120secs video clip to enhance their presentation to the employer and recruiter. Only $10 per year.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 whyUsBlock">
                            <div className="why-us-card">
                                <img src={trumpet} alt="trumpet" />
                                <h5 className="my-3">Free Job Alerts</h5>
                                <p>Talents can get regular job alerts from us and you will never miss a relevant job matching your profile straight in your inbox.  And it’s totally free. No hidden cost.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUsBlock
