import React from 'react'
import './SearchPage.css'

function SearchPage({a}) {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <h2><span style={{color:'red'}}>No result for </span>{a}</h2>
            </div>
            <hr/>
            
            
        </div>
    )
}

export default SearchPage
