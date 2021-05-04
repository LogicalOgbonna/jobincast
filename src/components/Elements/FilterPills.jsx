import React from 'react'
import './FilterPills.less'
import { useSelector } from 'react-redux';
import FilterPill from './FilterPill';

const FilterPills = () => {
    const pills = useSelector(({ filterSlice: { pills } }) => pills)
    return (
        pills.map(({ label, id, type }) => <FilterPill label={label} type={type} id={id} key={id} />)
    )
}

export default FilterPills
