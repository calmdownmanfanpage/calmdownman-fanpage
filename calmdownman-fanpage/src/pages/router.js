import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import Video from "./minseong/pages/Video";
import VideoItem from "./minseong/componenets/VideoItem";

export const path = {
  root: "/",
  teahyeong: "/teahyeong",
  soyeon: "/soyeon",
  choonghyeon: "/choonghyeon",
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
