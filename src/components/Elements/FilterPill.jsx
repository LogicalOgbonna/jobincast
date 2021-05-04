import React from 'react'
import './FilterPill.less'
import { Tag } from 'antd'
import { useDispatch } from 'react-redux'
import { removeFilterPillAC } from '../../store/filter/actions'

const FilterPill = ({ label, type, id }) => {
    const dispatch = useDispatch()
    return (
        <div className="filter-pill-element">
            <Tag className={type} closable onClose={() => dispatch(removeFilterPillAC({ type, id }))}>{label}</Tag>
        </div>
    )
}

export default FilterPill
