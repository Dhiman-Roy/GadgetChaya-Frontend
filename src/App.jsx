import "./App.css";
import { Outlet, RouterProvider } from "react-router";
import MainNavigation from "./navigation/MainNavigation";
import Backdrop from "./shared/uiElements/Backdrop";
import ImageSlider from "./ImageSlider/ImageSlider";
import HomePage from "./dashboard/HomePage";
import { router } from "./router/Router";
import { Component } from "react";
import Layout from "./Layout/Layout";

function App() {
  return (
    <RouterProvider router={router}>
      <div className="max-w-[1440px] mx-auto">
        <Layout />
      </div>
    </RouterProvider>
  );
}

export default App;
