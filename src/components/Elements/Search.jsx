import './Search.less';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const SearchElement = ({ buttonText }) => {
    return (
        <div className="search-element">
            <div className="container">
                <div className="row search-element-padding">
                    <div className="col-md-9">
                        <Input prefix={<SearchOutlined style={{ fontSize: '24px' }} />} placeholder="Search by position title or applicant name " />
                    </div>
                    <div className="col-md-3 text-right">
                        <button className="search-element-button">{buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

SearchElement.propTypes = {
  buttonText: PropTypes.node
}

SearchElement.defaultProps = {
    buttonText: <div><i className="fa fa-briefcase" /> POST RESUME</div>
}

export default SearchElement
