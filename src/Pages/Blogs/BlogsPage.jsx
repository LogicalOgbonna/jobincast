import './BlogsPage.scss';

import React from 'react'

import BaseMarkup from '../../components/Base/BaseMarkup';
import BlogLists from '../../components/Blocks/Blogs/BlogList';
import {phone} from '../../assets/images/index'
import { Divider } from '../../../node_modules/rc-menu/lib';

const BlogsPage = () => {
    return (
        <BaseMarkup className="background-image-left">
            <div className="desktop-layout">
                <div className= "blogs-page">
                    <div className= "container">
                        <div className= "row justify-content-center">
                            <div className= "big-blog col-lg-12">
                                <div className= "big-blog-area col-lg-6">
                                    <img src= {phone} alt="walker" />
                                    <span className= "lh50 font13 text-muted bigblogdate"><i className="dateicon fa fa-clock-o"></i> 14th March, 2020 </span>
                                    <h4 className= "bigblogtitle"> The 5 Essential Elements Your Resume Needs </h4>
                                    {/* <p className= "text-muted bigblogdetails"> There is no single document in a person’s life that is more obsessed over than the resumé. Mortgage papers, a Last Will and Testament, even divorce papers don’t have the same intensive review, page-for-page, than the notorious resumé. </p> */}
                                    {/* <a className="blink font13 bigblogredirect" href="#">Read More</a> */}
                                </div>
                                <div className= "big-blog-area col-lg-6">
                                    <img src= {phone} alt="taletize" />
                                    <span className= "lh50 font13 text-muted bigblogdate"><i className="dateicon fa fa-clock-o"></i> 14th March, 2020 </span>
                                    <h4 className= "bigblogtitle"> The 5 Essential Elements Your Resume Needs </h4>
                                    {/* <p className= "text-muted bigblogdetails"> There is no single document in a person’s life that is more obsessed over than the resumé. Mortgage papers, a Last Will and Testament, even divorce papers don’t have the same intensive review, page-for-page, than the notorious resumé. </p> */}
                                    {/* <a className="blink font13 bigblogredirect" href="#">Read More</a> */}
                                </div>
                            </div>
                            <div className= "miniheaderarea col-lg-11">
                                <p className = "font13 miniheader">Recent Stories</p>
                                <Divider className="minidivider" />
                            </div>
                            <div className= "blog-list-area col-lg-9">
                                <BlogLists paginated/>
                            </div>
                        </div> 

                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default BlogsPage
