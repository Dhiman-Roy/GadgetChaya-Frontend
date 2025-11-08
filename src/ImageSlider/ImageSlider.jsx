import React, { useEffect, useState } from "react";
import image1 from "./Images/IphoneSeries.PNG";
import image2 from "./Images/galaxy_s25_ultra.PNG";
import image3 from "./Images/macbook_air.PNG";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [image1, image2, image3];
  const imageLength = images.length;
  console.log("render");
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev === imageLength - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  const leftSlideHandler = () => {
    if (imageIndex === 0) {
      return setImageIndex(imageLength - 1);
    }
    setImageIndex(imageIndex - 1);
  };

  const rightSlideHandler = () => {
    if (imageIndex === imageLength - 1) {
      return setImageIndex(0);
    }
    setImageIndex(imageIndex + 1);
  };
  return (
    <div className="flex flex-col w-full mt-2 justify-between gap-2 p-3 lg:flex-row lg:justify-between lg:h-[550px] lg:gap-3">
      <div className="flex-1/2 rounded-2xl lg:flex-4/6 relative flex">
        <div className="flex overflow-hidden rounded-2xl ">
          {images.map((image, index) => (
            <img
              className="w-full h-full transform transition duration-600 ease-out grow-0 shrink-0"
              key={index}
              src={image}
              style={{ transform: `translateX(${-100 * imageIndex}%)` }}
              alt="slider Image"
            />
          ))}
        </div>

        <FaArrowLeft
          onClick={leftSlideHandler}
          className="text-white font-bold absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer lg:text-2xl "
        />
        <FaArrowRight
          onClick={rightSlideHandler}
          className="text-white font-bold absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer lg:text-2xl"
        />
        <div className="flex gap-3 absolute left-1/2 bottom-6 -translate-x-1/2">
          {images.map((_, index) => {
            return (
              <div
                className={`text-black h-2 w-2 rounded-full bg-amber-600 shadow-xl shadow-amber-700 transform duration-300 ease-in-out ${
                  imageIndex === index
                    ? "w-5 text-amber-700 font-extrabold"
                    : ""
                }`}
              >
                {/* <GoDotFill
                  
                /> */}
              </div>
            );
          })}
        </div>
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
