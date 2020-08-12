import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import ThemeContext from './theme-context'

import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar({home, trending, subscriptions}) {
    const themes = React.useContext(ThemeContext)
    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 620
    React.useEffect(() => {
        
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
      }, []);
    if(width>breakpoint)
    {
        return (
        
            <div className="sidebar">
                <SidebarRow selected={home} Icon={HomeIcon} title="Home"/>
                <SidebarRow selected={trending} Icon={WhatshotIcon} title="Trending"/>
                <SidebarRow selected={subscriptions} Icon={SubscriptionsIcon} title="Subscriptions"/>
                <hr style={{backgroundColor:themes.grayBackground}}/>
                <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
                <SidebarRow Icon={HistoryIcon} title="History"/>
                <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
                <SidebarRow Icon={WatchLaterIcon} title="Watch later"/>
                <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
                <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
            </div>
        )
    }
    else{
        return (<></>)
    }
    
}

export default Sidebar
