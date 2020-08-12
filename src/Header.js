import React from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from "react-router-dom";
import ThemeContext from './theme-context'
import './Header.css'

function Header(props) {

    const themes = React.useContext(ThemeContext)

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 620
    const [inputSearch, setInputSearch] = React.useState('')

    React.useEffect(() => {
        
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
      }, []);
    return (
        <div className="header" style={{backgroundColor:themes.background}}>
            <div className="header__left">
            {props.theme &&
                <h1 style={{color:themes.color}} onClick={()=>props.setTheme(!props.theme)}>DARK</h1>
                }
                {!props.theme &&
                <h1 style={{color:themes.color}} onClick={()=>props.setTheme(!props.theme)}>LIGHT</h1>
                }
                <Link to={`${process.env.PUBLIC_URL}/`}>
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""></img>
                </Link>
            </div>
            { width>breakpoint &&
                <div className="header__input"  style={{borderColor:themes.grayBackground}}>
                    <input   style={{backgroundColor:themes.grayBackground}}
                        value={inputSearch}
                        onChange={e=>setInputSearch(e.target.value)}
                        type="text"
                        placeholder="Search"/>
                    <Link to={`${process.env.PUBLIC_URL}/search/${inputSearch}`}>
                        <SearchIcon className="header__inputButton"  style={{color:themes.smallColor}}/>
                    </Link>
                </div>
            }
                
            <div className="header__icons"  style={{color:themes.color}}>
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon"/>
                <Avatar alt="rajath" src="https://lh3.googleusercontent.com/ogw/ADGmqu-06W96Ix2z0mzRb7yBSZAsB97F9lUDsf3wyzkS=s83-c-mo"/>
            </div>
        </div>
    )
}

export default Header
