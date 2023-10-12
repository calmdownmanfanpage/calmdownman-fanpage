import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import Video from "./minseong/pages/Video";
export const path = {
  root: "/",
  teahyeong: "/teahyeong",
  soyeon: "/soyeon",
  choonghyeon: "/choonghyeon",
  minseong: "/video",
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
        path: path.minseong,
        element: <Video />,
      },
    ],
  },
]);
