import './CareerTips.less';

import React from 'react';
import { NavLink } from 'react-router-dom';

import { career_tip_1, career_tip_2, career_tip_3, career_tip_4 } from '../../../assets/images';
import BlockHeader from './BlockHeader';
import { ArrowRightOutlined } from '@ant-design/icons';
import Dots from '../../Elements/Dots';

const CareerTips = () => {
    return (
        <div className="career-tips-block">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <BlockHeader
                        heading="Quick Career Tips"
                        subheading="Found by employers communicate directly with hiring managers and recruiters."
                    />
                </div>
                <div className="col-md-3">
                    <div className="career-tips-card">
                        <div className="career-tips-card-image" style={{ background: `url(${career_tip_1})` }} />
                        <div className="career-tips-card-text">

                            <h6>Over 1000+ Employers</h6>

                            <p className="text-muted py-2">We have a thousand plus employers registered and actively look...</p>

                            <NavLink to="/">Read More <ArrowRightOutlined className="mx-2 career-tips-card-text-button-icon" /> </NavLink>

                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="career-tips-card">
                        <div className="career-tips-card-image" style={{ background: `url(${career_tip_2})` }} />
                        <div className="career-tips-card-text">

                            <h6>Over 1000+ Employers</h6>

                            <p className="text-muted py-2">We have a thousand plus employers registered and actively look...</p>

                            <NavLink to="/">Read More <ArrowRightOutlined className="mx-2 career-tips-card-text-button-icon" /> </NavLink>

                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="career-tips-card">
                        <div className="career-tips-card-image" style={{ background: `url(${career_tip_3})` }} />
                        <div className="career-tips-card-text">

                            <h6>Over 1000+ Employers</h6>

                            <p className="text-muted py-2">We have a thousand plus employers registered and actively look...</p>

                            <NavLink to="/">Read More <ArrowRightOutlined className="mx-2 career-tips-card-text-button-icon" /> </NavLink>

                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="career-tips-card">
                        <div className="career-tips-card-image" style={{ background: `url(${career_tip_4})` }} />
                        <div className="career-tips-card-text">

                            <h6>Over 1000+ Employers</h6>

                            <p className="text-muted py-2">We have a thousand plus employers registered and actively look...</p>

                            <NavLink to="/">Read More <ArrowRightOutlined className="mx-2 career-tips-card-text-button-icon" /> </NavLink>

                        </div>
                    </div>
                </div>

                <Dots first={true} second={false} third={false} />
                
            </div>
        </div>
    )
}

export default CareerTips
