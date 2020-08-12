import React from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from './theme-context'
import './SidebarRow.css'

function SidebarRow({title, Icon, selected}) {
    const themes = React.useContext(ThemeContext)
    let selectedBackground = null
    let selectedIcon=null
    if(selected){
        selectedBackground={backgroundColor:themes.selectedColor}
        selectedIcon={color:'red'}
    }
    else{
        selectedBackground = null
        selectedIcon=null
    }
    return (
        <Link to={`${process.env.PUBLIC_URL}/${title}`} style={{textDecoration:'none'}}>
            <div className="sidebarRow" style={selectedBackground} >
                <Icon className="sidebarRow__icon" style={selectedIcon}/>
                <h2 className="sidebarRow__title" style={{color:themes.color}}>{title}</h2>
            </div>
        </Link>
    )
}

export default SidebarRow
