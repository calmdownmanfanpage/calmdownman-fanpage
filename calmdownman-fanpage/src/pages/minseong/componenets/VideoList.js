import { useEffect, useState } from "react";
import styled from "styled-components";
import { getVideoList } from "../lib/api";
import VideoItem from "./VideoItem";

const VideoListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, auto));
`;

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      <VideoListContainer>
        {videoList.map((item, index) => (
          <VideoItem info={item} key={index} />
        ))}
      </VideoListContainer>
    </>
  );
};

export default VideoList;
