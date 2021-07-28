import React from 'react'
import './BlockHeader.scss'
const BlockHeader = ({ heading, subheading, featured }) => {
    return (
        <div className={featured ? "block-header-featured-companies" : "block-header"}>
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
