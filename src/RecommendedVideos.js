import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard';
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                    title="How to get 1000 views in just 3 days"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channel="rajath.ks"
                    image="https://ipiccy.com/blog/wp-content/uploads/2016/12/Youtube-thumbnails.jpg"
                    channelImage="https://lh3.googleusercontent.com/ogw/ADGmqu-06W96Ix2z0mzRb7yBSZAsB97F9lUDsf3wyzkS=s83-c-mo"
                />
                <VideoCard
                    title="How to get 1000 views"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channel="rajath.ks"
                    image="https://i.ytimg.com/vi/d_T5P-zIIAs/maxresdefault.jpg"
                    channelImage="https://lh3.googleusercontent.com/ogw/ADGmqu-06W96Ix2z0mzRb7yBSZAsB97F9lUDsf3wyzkS=s83-c-mo"
                />
                <VideoCard
                    title="How to get 1000 views"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channel="rajath.ks"
                    image=""
                    channelImage="https://lh3.googleusercontent.com/ogw/ADGmqu-06W96Ix2z0mzRb7yBSZAsB97F9lUDsf3wyzkS=s83-c-mo"
                />
            </div>
            
        </div>
    )
}

export default RecommendedVideos
