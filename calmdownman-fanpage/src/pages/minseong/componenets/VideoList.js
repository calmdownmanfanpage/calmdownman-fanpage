import { useEffect, useState } from "react";
import styled from "styled-components";
import { getChannelInfo, getVideoList } from "../lib/api";

const VideoList = () => {
  const [channelInfo, setChannelInfo] = useState([]);
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      try {
        const result = await getVideoList();
        setVideoList(result.items);
      } catch (e) {
        console.log(e);
      }
    };
    const getChannelInformation = async () => {
      try {
        const result = await getChannelInfo();
        setChannelInfo(result.items);
      } catch (e) {
        console.log(e);
      }
    };
    getChannelInformation();
    getVideos();
  }, []);
  return <></>;
};

export default VideoList;
