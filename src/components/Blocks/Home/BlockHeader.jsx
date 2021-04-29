import React from 'react'
import './BlockHeader.less'
const BlockHeader = ({ heading, subheading, customPadding }) => {
    return (
        <div className="block-header">
            <h2 className="text-center featured-companies-header">
                {heading}
            </h2>
            <p className="text-muted text-center  p-4">
                {subheading}
            </p>
        </div>
    )
}

export default BlockHeader
