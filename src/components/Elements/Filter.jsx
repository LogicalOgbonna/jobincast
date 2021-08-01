import './Filter.scss';

import { RedoOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearFilterPillAC } from '../../store/filter/actions';
import Dropdown from './DropDown';
import FilterPills from './FilterPills';
import { useHistory } from 'react-router';



const FilterElement = ({ options, extra }) => {
    const dispatch = useDispatch();
    const pills = useSelector(({ filterSlice: { pills } }) => pills)
    const history = useHistory()
    return (
        <div className="filter-element">
            <div className="filter-section row">
                {options.map((option, index) =>
                    <div key={index} className="col-md-2 filter-dropdown">
                        <Dropdown options={option.data} label={option.label} img={option.icon} />
                    </div>
                )}

                <div className="extra-filter-element">
                    {extra}
                </div>
            </div>

            <div className="filter-element-pills">
                <div className="filter-pills">
                    <FilterPills />
                </div>
                {pills.length > 0 && <button type="default" onClick={() => dispatch(clearFilterPillAC(history))} className="filter-element-button text-right"><RedoOutlined /> RESET</button>}
            </div>
        </div>
    )
}

FilterElement.defaultProps = {
    options: []
}
// FilterElement.propTypes = {
//     options: PropTypes.shape({
//         map: PropTypes.func
//     })
// }

export default FilterElement
