import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import SidebarRow from './SidebarRow'

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from "react-router-dom";

import './SidebarCollapsable.css'
function SidebarCollapsable({home, trending, subscriptions}) {
    const [width, setWidth] = React.useState(window.innerWidth)
    const [collapse, setCollapse] = React.useState(false)
    const [inputSearch, setInputSearch] = React.useState('')
    const breakpoint = 620
    React.useEffect(() => {
        
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
      }, [])
      if(width<breakpoint ){
        return (
                <div className="sidebar1">
                    <div className="menuIcon__container" onClick={()=>setCollapse(!collapse)}>
                        {collapse && <CloseIcon/>}
                        {!collapse && <MenuIcon/>}
                    </div>
                    { collapse &&
                    <div className="SidebarRow__container">
                            
                        <div className="searchBar">
                        <input
                            value={inputSearch}
                            onChange={e=>setInputSearch(e.target.value)}
                            type="text"
                            placeholder="Search"/>
                        <Link to={`${process.env.PUBLIC_URL}/search/${inputSearch}`} onClick={e=>setCollapse(!collapse)}>
                            <SearchIcon className="searchButton"/>
                        </Link>
                        </div>
                        <div onClick={()=>setCollapse(!collapse)}>
                            <SidebarRow selected={home} Icon={HomeIcon} title="Home"/>
                            <SidebarRow selected={trending} Icon={WhatshotIcon} title="Trending"/>
                            <SidebarRow selected={subscriptions} Icon={SubscriptionsIcon} title="Subscriptions"/>
                            <hr/>
                            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
                            <SidebarRow Icon={HistoryIcon} title="History"/>
                            <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
                            <SidebarRow Icon={WatchLaterIcon} title="Watch later"/>
                            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
                            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
                            <hr/>
                        </div>
                    </div>
                    }
                </div>
        )
      }
      else{
          return (<></>)
      }
      
}

export default SidebarCollapsable
