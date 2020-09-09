import React from 'react'
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="search_Page__filter">
                <TuneOutlinedIcon />
                <h2>필터</h2>
            </div>
            <hr/>
            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJy5Il9mFFK6qOOuZaYS9CUX9W7CKeySe-W-8of0Cw=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="파뿌리"
                vertified
                subs="106만"
                numOfVideo="1,121"
                description="일상 예능 버라이어티 채널 파뿌리입니다. 별 거 없는 평범한 세 남자 강호이,진렬이, 그리고 노랭이PD의 모자라지만 유쾌한 매력에.."
                />
                <hr/>
            <VideoRow 
                    views="94만"
                    subs="106만"
                    description="이 영상은 저희 파뿌리의 첫 책 [가자! 파뿌리]의 홍보가 포함되어 있습니다 [가자! 파뿌리]많이 사랑해주세요~ 만화책으로 파뿌리를.."
                    timestamp="3일 전"
                    channel="파뿌리"
                    title="24시간동안 날로 먹기 VS 익혀 먹기!! 불의 소중함을 다시 꺠달았습니다!!!"
                    image="https://i.ytimg.com/an_webp/IH48CrJMCiw/mqdefault_6s.webp?du=3000&sqp=CJyk4voF&rs=AOn4CLAzxQHlZwlnPEQEau57ZsMYJtCmJA" />
        </div>
    )
}

export default SearchPage;
