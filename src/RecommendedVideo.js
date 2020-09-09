import React from 'react'
import "./RecommendedVideo.css"
import VideoCard from "./VideoCard";


function RecommendedVideo() {
    return (
        <div className="recommendedVideos">
            <h2>추천</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="러플리들 사약길 걷게 만든 에이틴"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhkJRzBxR5pFfWa7VwlUaPxIvN032mP3BqN=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="
                    PLAYLIST ORIGINALS 플레이리스트"
                    image="https://i.ytimg.com/an_webp/QnSA8vteHk0/mqdefault_6s.webp?du=3000&sqp=CJvW3foF&rs=AOn4CLDdNUADhgXAGxoYXho5n1jGJk9ygQ"/>
                <VideoCard
                    title="가짜사나이 2기 면접 E조"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GgwzQLfVd5DjqwsL3iBc-MysWAMkg4LI4OQOQ=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="
                    피지컬갤러리"
                    image="https://i.ytimg.com/an_webp/cm1XJFmJJ78/mqdefault_6s.webp?du=3000&sqp=CL3G3foF&rs=AOn4CLAnvc0PBFF13bv-i37XFKhLV7BjvQ"/>
                <VideoCard
                    title="IT 다큐멘터리 역대급 띵작 5편 추천"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14Ghr3ghXlYO6z7dMVM4nenFziOq06jVai-cIFw=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="
                    노마드 코더 Nomad Corders"
                    image="https://i.ytimg.com/an_webp/i23Qn1nTuiw/mqdefault_6s.webp?du=3000&sqp=CJTn3foF&rs=AOn4CLDN2PK24IzFVVpHAdMloS0R420rZw"/>
                <VideoCard
                    title="Lesson 2 - Deep Learning for Corders (2020)"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gj9V93cWTb_2QfZdivD1o7jKAYyoGkjRPFSAw=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="
                    Jeremy Howard"
                    image="https://i.ytimg.com/vi/BvHmRx14HQ8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC0-N11Qm2v9hMXpRbwhxLKg7vNWw"/>
            
            
            
            </div>
        </div>
    )
}

export default RecommendedVideo
