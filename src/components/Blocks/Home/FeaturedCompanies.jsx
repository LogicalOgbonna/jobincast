import React from 'react'
import { service_location, service_type } from '../../../assets/icons'
import { treehouse } from '../../../assets/images'
import Dots from '../../Elements/Dots'
import BlockHeader from './BlockHeader'
import './FeaturedCompanies.less'

const FeaturedCompanies = () => {
    return (
        <div className="featured-companies-block">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <BlockHeader
                        heading="Featured Companies"
                        subheading="With more than 12 million employer reviews, Company Pages give people insights into potential employers and help you create a memorable candidate experience."
                    />
                </div>
                <div className="col-md-3">
                    <div className="featured-companies-card">
                        <div className="featured-companies-first-row row pr-3">
                            <div className="col-md-6">
                                <img src={treehouse} alt="company-logo" className="featured-companies-logo" width="100" />
                            </div>
                            <div className="col-md-6 featured-companies-positions">
                                11 job positions
                                    </div>
                        </div>
                        <h6 className="featured-companies-second-row">Treehouse Apartments</h6>
                        <div className="featured-companies-third-row">
                            <div className="featured-companies-third-row-content">
                                <img src={service_location} alt="service_location" />
                                <span className="px-3">Indonesia</span>
                            </div>
                            <div className="featured-companies-third-row-content">
                                <img src={service_type} alt="service_type" />
                                <span className="px-3">Real Estate</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="featured-companies-card">
                        <div className="featured-companies-first-row row pr-3">
                            <div className="col-md-6">
                                <img src={treehouse} alt="company-logo" className="featured-companies-logo" width="100" />
                            </div>
                            <div className="col-md-6 featured-companies-positions">
                                11 job positions
                                    </div>
                        </div>
                        <h6 className="featured-companies-second-row">Treehouse Apartments</h6>
                        <div className="featured-companies-third-row">
                            <div className="featured-companies-third-row-content">
                                <img src={service_location} alt="service_location" />
                                <span className="px-3">Indonesia</span>
                            </div>
                            <div className="featured-companies-third-row-content">
                                <img src={service_type} alt="service_type" />
                                <span className="px-3">Real Estate</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="featured-companies-card">
                        <div className="featured-companies-first-row row pr-3">
                            <div className="col-md-6">
                                <img src={treehouse} alt="company-logo" className="featured-companies-logo" width="100" />
                            </div>
                            <div className="col-md-6 featured-companies-positions">
                                11 job positions
                                    </div>
                        </div>
                        <h6 className="featured-companies-second-row">Treehouse Apartments</h6>
                        <div className="featured-companies-third-row">
                            <div className="featured-companies-third-row-content">
                                <img src={service_location} alt="service_location" />
                                <span className="px-3">Indonesia</span>
                            </div>
                            <div className="featured-companies-third-row-content">
                                <img src={service_type} alt="service_type" />
                                <span className="px-3">Real Estate</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="featured-companies-card">
                        <div className="featured-companies-first-row row pr-3">
                            <div className="col-md-6">
                                <img src={treehouse} alt="company-logo" className="featured-companies-logo" width="100" />
                            </div>
                            <div className="col-md-6 featured-companies-positions">
                                11 job positions
                                    </div>
                        </div>
                        <h6 className="featured-companies-second-row">Treehouse Apartments</h6>
                        <div className="featured-companies-third-row">
                            <div className="featured-companies-third-row-content">
                                <img src={service_location} alt="service_location" />
                                <span className="px-3">Indonesia</span>
                            </div>
                            <div className="featured-companies-third-row-content">
                                <img src={service_type} alt="service_type" />
                                <span className="px-3">Real Estate</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Dots first={true} second={false} third={false} />
            </div>
        </div>
    )
}

export default FeaturedCompanies
