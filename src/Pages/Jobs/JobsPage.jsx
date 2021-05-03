
import React from 'react'
import BaseMarkup from '../../components/Base/BaseMarkup'
import RecentJobs from '../../components/Elements/RecentJobs'
import SearchElement from '../../components/Elements/Search'
import FilterElement from '../../components/Elements/Filter'
import './JobsPage.less'

const JobsPage = () => {
    return (
        <BaseMarkup>
            <div className="desktop-layout">
                <SearchElement />
                <div className="container jobs-page">
                    <div className="row">
                        <div className="col-md-12">
                            <FilterElement />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <RecentJobs />
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default JobsPage
