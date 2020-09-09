import React from 'react'
import {Avatar} from "@material-ui/core";
import "./ChannelRow.css"
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChanneRow({image,channel,subs,numOfVideo,description,vertified}) {
    return (
        <div className="channelRow">
            <Avatar className="channel__logo" 
            alt={channel} src={image}/>
            <div className="channelRow__text">
                <h4>{channel} {vertified && <VerifiedIcon />}</h4>
                <p>구독자 {subs}명  º 동영상 {numOfVideo}개  </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChanneRow;
