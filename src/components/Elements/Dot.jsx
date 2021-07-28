import React from 'react'
import './Dot.scss'

const Dot = ({ active, onClick, page }) => {
    return (
        <div onClick={() => onClick(page)} className={`dot ${active ? 'active-dot': 'normal-dot'} mx-1`} />
    )
}

export default Dot
