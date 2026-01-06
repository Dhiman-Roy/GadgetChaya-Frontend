import React from "react";
import MainNavigation from "../navigation/MainNavigation";
import Backdrop from "../shared/uiElements/Backdrop";
import ImageSlider from "../ImageSlider/ImageSlider";
import Categories from "./Categories";

function HomePage() {
  return (
    <>
      <ImageSlider />
      <Categories />
    </>
  );
}

export default HomePage;
