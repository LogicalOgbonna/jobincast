import React from 'react'

const RightColumn = ({ children }) => {
    return (
        <div className="pull-right col-md-4">
            {children}
        </div>
    )
}

export default RightColumn
