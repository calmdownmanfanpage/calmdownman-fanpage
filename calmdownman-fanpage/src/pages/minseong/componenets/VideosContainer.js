import { useEffect, useState } from "react";
import styled from "styled-components";
import { getVideoList } from "../lib/api";
import VideoItems from "./VideoItems";

const VideoListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  grid-template-columns: repeat(5, 1fr);
  background-color: #ecf0f1;
`;

const VideosContainer = () => {
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
          <VideoItems info={item} key={index} />
        ))}
      </VideoListContainer>
    </>
  );
};

export default VideosContainer;
