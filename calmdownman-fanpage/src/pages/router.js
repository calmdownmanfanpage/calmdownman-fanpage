import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import About from "./soyoun/About"
export const path = {
  root: "/",
  teahyeong: "/teahyeong",
  soyeon: "/about",
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
        path: path.soyeon,
        element: <About />,
      },
    ],
  },
]);
