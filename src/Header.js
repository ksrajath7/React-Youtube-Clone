import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from "react-router-dom";
import './Header.css'

function Header() {
    const [inputSearch, setInputSearch] = useState('')
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""></img>
                </Link>
            </div>
            <div className="header__input">
                <input
                    value={inputSearch}
                    onChange={e=>setInputSearch(e.target.value)}
                    type="text"
                    placeholder="Search"/>
                    <Link to={`/search/${inputSearch}`}>
                        <SearchIcon className="header__inputButton"/>
                    </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon"/>
                <Avatar alt="rajath" src="https://lh3.googleusercontent.com/ogw/ADGmqu-06W96Ix2z0mzRb7yBSZAsB97F9lUDsf3wyzkS=s83-c-mo"/>
            </div>
        </div>
    )
}

export default Header
