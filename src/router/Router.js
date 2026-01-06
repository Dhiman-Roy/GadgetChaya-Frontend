import { createBrowserRouter } from "react-router";
import HomePage from "../dashboard/HomePage";
import Layout from "../Layout/Layout";
import CategoryProducts from "../products/CategoryProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "category/:categoryId/:subCategoryId?/:subSubCategoryId?",
        Component: CategoryProducts,
      },
    ],
  },
]);
