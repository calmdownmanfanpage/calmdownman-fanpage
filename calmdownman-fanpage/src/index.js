import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./pages/router.js";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
