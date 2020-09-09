import React from 'react'
import "./VideoRow.css";

function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="videoRow">
            <img src={image} alt=""/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} 
                    {/* {" "}구독자{" "}
                    <span className="videoRow__subNumber">{subs}
                    </span>명 */}
                    {" "}
                    조회수 {views}회 · {timestamp}
                </p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
