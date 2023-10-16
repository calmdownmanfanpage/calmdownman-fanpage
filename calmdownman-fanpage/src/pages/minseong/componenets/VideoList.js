import { useEffect, useState } from "react";
import styled from "styled-components";
import { getChannelInfo, getVideoList } from "../lib/api";

const ChannelContainer = styled.div`
  @media screen and (min-width: 834px) {
    min-width: 834px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChannelIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;

const ChannelHeaderImg = styled.div`
  background-image: url(${(props) => props.$bgImg});
  width: 180px;
  height: 180px;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
`;

const ChannelDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 10px;
`;

const StyledChannelHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const StyledChannelTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
`;

const StyledChannelUrl = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const StyledSubscribers = styled.span``;

const StyledChannelDesc = styled.span``;

const StyledChannelPublish = styled.span``;

const VideoList = () => {
  const [channelInfo, setChannelInfo] = useState({
    snippet: {
      title: "",
      description: "",
      customUrl: "",
      publishedAt: "",
      thumbnails: {
        medium: {
          url: "",
        },
      },
    },
    statistics: {
      subscriberCount: 0,
    },
  });
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelResult = await getChannelInfo();
        setChannelInfo(channelResult.items[0]);

        const videoResult = await getVideoList();
        setVideoList(videoResult.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ChannelContainer>
        <ChannelIconWrapper>
          <ChannelHeaderImg
            $bgImg={channelInfo.snippet.thumbnails.medium.url}
          />
        </ChannelIconWrapper>
        <ChannelDescription>
          <StyledChannelHeader>
            <StyledChannelTitle>{channelInfo.snippet.title}</StyledChannelTitle>
            <StyledChannelUrl>{channelInfo.snippet.customUrl}</StyledChannelUrl>
          </StyledChannelHeader>
          <StyledSubscribers>
            {`구독자 : ${channelInfo.statistics.subscriberCount / 10000}만명`}
          </StyledSubscribers>
          <StyledChannelDesc>
            {channelInfo.snippet.description}
          </StyledChannelDesc>
          <StyledChannelPublish>
            {channelInfo.snippet.publishedAt}
          </StyledChannelPublish>
        </ChannelDescription>
      </ChannelContainer>
    </>
  );
};

export default VideoList;
