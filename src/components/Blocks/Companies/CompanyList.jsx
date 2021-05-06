import './CompanyList.less';

import React from 'react';

import { taletize } from '../../../assets/images';
import { Pagination } from 'antd';
import Company from './Company';
import { NavLink } from 'react-router-dom';

const CompanyList = ({ paginated }) => {
    return (
        <div className="company-list-block">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <NavLink to="/company/1oiuqioweruw">
                        <Company
                            img={taletize}
                            available="2 jobs available"
                            company="Bridge IT Solutions"
                            applicants="20 People"
                            location="Kedah | Thailand"
                            technology="Technology"
                        />

                        {paginated && <div className="text-right">
                            <Pagination className="company-pagination" defaultCurrent={1} total={50} />
                        </div>}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default CompanyList
