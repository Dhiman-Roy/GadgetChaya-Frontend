import { createBrowserRouter } from "react-router";
import HomePage from "../dashboard/HomePage";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ index: true, Component: HomePage }],
  },
]);
