import { useEffect, useState } from "react";
import styled from "styled-components";
import { getChannelInfo } from "../lib/api";
const ChannelContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 50px;
`;

const ChannelIconWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 20px;
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
  width: 50%;
  height: 180px;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding: 5px;
`;

const StyledChannelHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledChannelTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
`;

const StyledChannelUrl = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const StyledSpan = styled.span`
  margin-bottom: 15px;
  font-size: 20px;
  margin-left: 5px;
`;
const Channel = () => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelResult = await getChannelInfo();
        setChannelInfo(channelResult.items[0]);
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
            <StyledChannelTitle>
              {channelInfo.snippet.title} ✔
            </StyledChannelTitle>
            <StyledChannelUrl>{channelInfo.snippet.customUrl}</StyledChannelUrl>
          </StyledChannelHeader>
          <StyledSpan>
            {`구독자💛 : ${channelInfo.statistics.subscriberCount / 10000}만`}
          </StyledSpan>
          <StyledSpan>{channelInfo.snippet.description}</StyledSpan>
          <StyledSpan>{`Since : ${
            channelInfo.snippet.publishedAt.split("T")[0]
          }`}</StyledSpan>
        </ChannelDescription>
      </ChannelContainer>
    </>
  );
};

export default Channel;
