import React from 'react'
import BaseMarkup from '../../components/Base/BaseMarkup'
import SearchElement from '../../components/Elements/Search'

const SearchPage = () => {
    return (
        <BaseMarkup>
            <div className="desktop-layout">
            <SearchElement
                    onClick={() => console.log("Hello")}
                    buttonText={<div> SEARCH </div>}
                />
            </div>
        </BaseMarkup>
    )
}

export default SearchPage
