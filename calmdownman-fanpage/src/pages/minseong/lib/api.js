import axios from "axios";
import {
  BASE_CHANNEL_URL,
  BASE_VIDEO_URL,
  API_KEY,
  CHANNEL_ID,
  BASE_COMMENTS_URL,
} from "./key";

export const getChannelInfo = () => {
  return axios
    .get(
      `${BASE_CHANNEL_URL}part=statistics%2Csnippet&id=${CHANNEL_ID}&key=${API_KEY}`
    )
    .then((response) => response.data);
};

export const getVideoList = () => {
  return axios
    .get(
      `${BASE_VIDEO_URL}part=snippet&maxResults=20&channelId=${CHANNEL_ID}&type=video&order=date&key=${API_KEY}`
    )
    .then((response) => response.data);
};

export const getComments = (videoId) => {
  return axios
    .get(`${BASE_COMMENTS_URL}part=snippet&videoId=${videoId}&key=${API_KEY}`)
    .then((response) => response.data);
};
