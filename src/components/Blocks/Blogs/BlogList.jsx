import './BlogList.less';

import React from 'react';

import { career_tip_3 } from '../../../assets/images/index';
import { Pagination } from 'antd';
import Blog from './Blog';
import { NavLink } from 'react-router-dom';

const BlogList = ({ paginated }) => {
    return (
        <div className="blogs-list-block">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <NavLink to="/blog/qwerty">
                        <Blog
                            img={career_tip_3}
                            title="The 5 Essential Elements Your Resume Needs"
                            excert="There is no single document in a person’s life that is more obsessed over than the resumé. Mortgage papers, a Last Will and Testament, even divorce papers don’t have the same intensive review, page-for-page, than the notorious resumé..."
                            date="12th April, 2020"
                        />

                        {paginated && <div className="text-right">
                            <Pagination className="blog-pagination" defaultCurrent={1} total={50} />
                        </div>}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default BlogList