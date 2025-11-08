import React, { useState } from "react";
import image1 from "./Images/IphoneSeries.PNG";
import image2 from "./Images/galaxy_s25_ultra.PNG";
import image3 from "./Images/macbook_air.PNG";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [image1, image2, image3];
  const imageLength = images.length;
  console.log(imageIndex);
  const leftSlideHandler = () => {
    if (imageIndex <= 0) {
      return setImageIndex(imageLength - 1);
    }
    setImageIndex(imageIndex - 1);
  };

  const rightSlideHandler = () => {
    if (imageIndex >= imageLength - 1) {
      return setImageIndex(0);
    }
    setImageIndex(imageIndex + 1);
  };
  return (
    <div className="flex flex-col w-full mt-2 justify-between gap-2 p-3  lg:flex-row lg:justify-between lg:h-[550px] lg:gap-3">
      <div className="flex-1/2 rounded-2xl lg:flex-4/6 relative flex">
        <div className="flex overflow-hidden">
          <img
            className="w-full h-full rounded-2xl "
            src={images[imageIndex]}
            alt=""
          />
        </div>

        <FaArrowLeft
          onClick={leftSlideHandler}
          className="text-white font-bold absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer lg:text-2xl "
        />
        <FaArrowRight
          onClick={rightSlideHandler}
          className="text-white font-bold absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer lg:text-2xl"
        />
      </div>

      <div className="flex-1/2 flex flex-row gap-1 lg:flex-col lg:flex-2/6 lg:gap-3 ">
        <div className=" flex-1/2 h-1/2 flex">
          <img
            className="w-full h-full rounded-2xl object-fill"
            src={image2}
            alt=""
          />
          ;
        </div>
        <div className=" flex-1/2 h-1/2">
          <img
            className="w-full h-full rounded-2xl object-fill"
            src={image2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
