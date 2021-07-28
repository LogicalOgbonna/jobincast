import { Skeleton, Spin } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { service_location, service_type } from '../../../assets/icons'
import { getFeaturedCompaniesAC } from '../../../store/home/action'
import Dots from '../../Elements/Dots'
import BlockHeader from './BlockHeader'
import './FeaturedCompanies.scss'

const FeaturedCompanies = () => {
    const dispatch = useDispatch()
    const { featuredCompanies: { content, number, totalPages }, featuredCompaniesLoading } = useSelector(({ homeSlice: { featuredCompanies, featuredCompaniesLoading } }) => ({ featuredCompanies, featuredCompaniesLoading }))

    const changePage = page => {
        dispatch(getFeaturedCompaniesAC(`page=${page}&size=4`))
    }
    return (
        <div className="featured-companies-block">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <BlockHeader
                        featured
                        heading="Featured Companies"
                        subheading="With more than 12 million employer reviews, Company Pages give people insights into potential employers and help you create a memorable candidate experience."
                    />
                </div>
                {featuredCompaniesLoading && <>
                    <div className="col-md-3">
                        <div className="featured-companies-card">
                            <Skeleton paragraph={{ rows: 2 }} avatar={{ shape: "square", size: 90 }} shape="square" active />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="featured-companies-card">
                            <Skeleton paragraph={{ rows: 2 }} avatar={{ shape: "square", size: 90 }} shape="square" active />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="featured-companies-card">
                            <Skeleton paragraph={{ rows: 2 }} avatar={{ shape: "square", size: 90 }} shape="square" active />
                        </div>
                    </div>
                </>}

                {
                    !featuredCompaniesLoading && content.map(company =>
                        <div key={company.imageURL} className="col-md-3">
                            <div className="featured-companies-card">
                                <div className="featured-companies-first-row row pr-3">
                                    <div className="col-md-6">
                                        <img src={company.imageURL} alt="company-logo" className="featured-companies-logo" width="100" />
                                    </div>
                                    <div className="col-md-6 featured-companies-positions">
                                        {company.numberOfPositions} job positions
                                    </div>
                                </div>
                                <h6 className="featured-companies-second-row">{company.name}</h6>
                                <div className="featured-companies-third-row">
                                    <div className="featured-companies-third-row-content">
                                        <img src={service_location} alt="service_location" />
                                        <span className="px-3">{company.location}</span>
                                    </div>
                                    <div className="featured-companies-third-row-content">
                                        <img src={service_type} alt="service_type" />
                                        <span className="px-3">{company.industry}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="row justify-content-center">
                <Dots onClick={changePage} totalPages={totalPages} first={number + 1 === 1} second={number + 1 === 2} third={number + 1 === 3} />
            </div>
        </div>
    )
}

export default FeaturedCompanies
