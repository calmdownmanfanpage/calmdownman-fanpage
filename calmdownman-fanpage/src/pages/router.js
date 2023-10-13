import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import History from "./main/choonghyun/History";
export const path = {
  root: "/",
  teahyeong: "/teahyeong",
  soyeon: "/soyeon",
  choonghyun: "/history",
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
        path: path.choonghyun,
        element: <History/>,
      },
    ],
    
  },
]);
