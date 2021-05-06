import React from 'react'
import Dot from './Dot'
const Dots = ({ first, second, third }) => {
    return (
        <div className="d-flex pt-5">
            <Dot active={first} />
            <Dot active={second} />
            <Dot active={third} />
        </div>
    )
}

export default Dots
