import React from 'react'
import './Dot.less'

const Dot = ({ active }) => {
    return (
        <div className={`dot ${active ? 'active-dot': 'normal-dot'} mx-1`}>

        </div>
    )
}

export default Dot
