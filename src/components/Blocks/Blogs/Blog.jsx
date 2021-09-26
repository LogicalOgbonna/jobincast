import './Blog.scss';

import { Divider } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Blog = ({ img, date, title, excert}) => {
    return (
        <div className="blogs-block-card">
            <div className="mobil">
                <div className="row">
                    <div className="col-md-3 blogBlockImg">
                        <img src={img} alt="taletize" />
                    </div>
                    <div className="col-md-9 blogs-block-card-text-section">
                        <h6>{title}</h6>
                        <p className="bloglistexcert text-muted">{window.screen.width > 480 ? excert : (excert.slice(0,70)+'...')}</p>
                        <div className= "bloglistbottom">
                            <span className="text-muted font13 bloglistdate"><i className="dateicon fa fa-clock-o"></i>{date}</span>
                            <NavLink to= "/blog/qwerty" className= "font13 blink bloglistmore">Read More</NavLink>
                        </div>
                    </div>
                </div>

                <Divider/>
            </div>
        </div>
    )
}

export default Blog

