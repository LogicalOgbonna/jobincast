import { Pagination } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Company from './Company';
import './CompanyList.scss';



const CompanyList = ({ paginated, data: { content, totalElements, number }, onPaginationChange }) => {
    return (
        <div className="company-list-block">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    {content.map(company =>
                        <NavLink to={`/company/${company.companyId}`}>
                            <Company
                                img={company.imageURL}
                                available={company.numberOfPositions + " jobs available"}
                                company={company.name}
                                companySize={company.companySize}
                                location={company.location?.toLowerCase()}
                                technology={company.industry?.toLowerCase()}
                            />

                        </NavLink>
                    )}
                    {paginated && <div className="text-right">
                        <Pagination
                            onChange={onPaginationChange}
                            className="company-pagination"
                            total={totalElements}
                            current={number}
                        />
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default CompanyList
