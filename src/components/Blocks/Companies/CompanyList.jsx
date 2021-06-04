import { Pagination } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Company from './Company';
import './CompanyList.less';



const CompanyList = ({ paginated, data: { content, totalElements } }) => {
    return (
        <div className="company-list-block">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    {content.map(company =>
                        <NavLink to={`/company/${company.companyId}`}>
                            <Company
                                img={company.imageURL}
                                available={company.numberOfPositions + " jobs available"}
                                company={company.name}
                                applicants={company.people}
                                location={company.location}
                                technology={company.industry}
                            />

                        </NavLink>
                    )}
                    {paginated && <div className="text-right">
                        <Pagination className="company-pagination" total={totalElements} />
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default CompanyList
