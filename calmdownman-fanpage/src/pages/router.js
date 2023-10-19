import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import Scheduler from "./soyoun/Scheduler";
import GuestMain from "./kimtaehyeong/GuestMain";
import Course from "./kimtaehyeong/GuestWiki/Course";
import Video from "./minseong/pages/Video";
import VideoItem from "./minseong/componenets/VideoItem";

export const path = {
  root: "/",
  teahyeong: "/guest",
  wiki: "/guest/guestwiki",
  soyoun: "/scheduler",
  choonghyun: "/history",
  video: "/video",
  videoItem: "/video/:videoId",
};

export const router = createBrowserRouter([
  {
    path: path.root,
    element: <Layout />,
    children: [
      {
        path: path.root,
        element: <MainPage />,
      },
      {
        path: path.soyoun,
        element: <Scheduler />,
      },
      {
        path: path.teahyeong,
        element: <GuestMain />,
      },
      {
        path: path.wiki,
        element: <Course />,
      },
      {
        path: path.video,
        element: <Video />,
      },
      {
        path: path.videoItem,
        element: <VideoItem />,
      },
    ],
  },
]);
