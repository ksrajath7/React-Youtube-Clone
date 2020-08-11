import React from 'react'
import { NavLink } from 'react-router-dom'
import './SidebarRow.css'
function SidebarRow({title, Icon, selected}) {
    return (
        <NavLink to={`/${title}`} style={{textDecoration:'none'}}>
            <div className={`sidebarRow ${selected && "selected"}`}>
                <Icon className="sidebarRow__icon"/>
                <h2 className="sidebarRow__title">{title}</h2>
            </div>
        </NavLink>
    )
}

export default SidebarRow
