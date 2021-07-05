import React from 'react'
import { point40 } from '../../assets/images'
import BaseMarkup from '../../components/Base/BaseMarkup'
import UserHeading from '../../components/Elements/UserHeading'
import "./points.less"
import Paypal from "./Paypal"

const Points = () => {
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout points-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <UserHeading message="Manage Applicants" subMessage={`Points Balance: 0pts`} />

                        <div className="col-md-10 points-content">
                            <div className="heading">
                                <p className="text-center">Point Packages</p>
                                <p className="text-center">Jobincast Points are used to download complete applicant complete resume which contains their contact information</p>
                            </div>
                            <div className="cards-section">
                                <div className="card">
                                    <img src={point40} alt="points40"/>
                                </div>
                                <div className="card"></div>
                                <div className="card"></div>
                            </div>


                            <Paypal />
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default Points
