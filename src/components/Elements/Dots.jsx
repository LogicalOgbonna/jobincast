import React from 'react'
import Dot from './Dot'
const Dots = ({ first, second, third, totalPages, onClick }) => {
    return (
        <div className="d-flex pt-5">
            {totalPages >= 1 && <Dot onClick={onClick} page={0} active={first} />}
            {totalPages >= 2 && <Dot onClick={onClick} page={1} active={second} />}
            {totalPages >= 3 && <Dot onClick={onClick} page={1} active={third} />}
        </div>
    )
}

export default Dots
