import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './VideoCard.css'

function VideoCard({image, title, channel, channelImage, timestamp, views}) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt=""/>
            <div className="videoCard__info">
                <Avatar src={channelImage} alt={channel} className="videoCard__avatar"/>
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} - {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
