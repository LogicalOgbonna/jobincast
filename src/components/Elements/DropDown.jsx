import './DropDown.less';
import { useDispatch } from 'react-redux'

import React, { useState } from 'react';
import { selectFilterPillAC } from '../../store/filter/actions';


const Dropdown = ({ label, options, img, className }) => {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!isOpen);

    return (
        <div className={'dropdown ' + className}>
            <div className='dropdown-header' onClick={toggleDropdown}>
                {label}
                <img src={img} alt="drop-down" />
            </div>
            <div className={`dropdown-body ${isOpen && 'open'}`}>
                {options.map((item, index) => (
                    <div className="dropdown-item" onClick={e => dispatch(selectFilterPillAC(options[index]))} id={item.id}>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown
