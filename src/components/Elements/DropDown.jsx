import './DropDown.scss';
import { useDispatch } from 'react-redux'

import React, { useState } from 'react';
import { selectFilterPillAC } from '../../store/filter/actions';
import { useHistory } from 'react-router';


const Dropdown = ({ label, options, img, className }) => {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!isOpen);
    const history = useHistory()

    const onClick = (index) => {
        dispatch(selectFilterPillAC({ data: options[index], history }))
        setOpen(false)
    }
    return (
        <div className={'dropdown ' + className}>
            <div className='dropdown-header' onClick={toggleDropdown}>
                {label}
                <img src={img} alt="drop-down" />
            </div>
            <div className={`dropdown-body ${isOpen && 'open'}`}>
                {options.map((item, index) => {
                    return (
                        <div key={item.id} className="dropdown-item text-capitalize" onClick={() => onClick(index)} id={item.id}>
                            {item?.label?.replace(/_/g, " ")?.toLowerCase()}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Dropdown
