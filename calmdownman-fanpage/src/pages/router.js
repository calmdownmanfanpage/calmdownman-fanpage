import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import History from "./main/choonghyun/History";
import Scheduler from "./soyoun/Scheduler";
import GuestMain from "./kimtaehyeong/GuestMain";
import Video from "./minseong/pages/Video";
import VideoItem from "./minseong/componenets/VideoItem";

export const path = {
  root: "/",
  teahyeong: "/guest",
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
        path: path.choonghyun,
        element: <History />,
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
