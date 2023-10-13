import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import Scheduler from "./soyoun/Scheduler"
import { DemoApp } from "./soyoun/FullCalendarTest";
export const path = {
  root: "/",
  teahyeong: "/teahyeong",
  soyoun: "/scheduler",
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
        path: path.soyoun,
        element: <DemoApp />,
      },
    ],
  },
]);
