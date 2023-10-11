import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import GuestMain from "./kimtaehyeong/GuestMain";
export const path = {
  root: "/",
  teahyeong: "/guest",
  soyeon: "/soyeon",
  choonghyeon: "/choonghyeon",
  minseong: "/minseong",
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
        path: path.teahyeong,
        element: <GuestMain />,
      },
    ],
  },
]);
