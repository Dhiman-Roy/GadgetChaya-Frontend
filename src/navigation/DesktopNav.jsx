import React, { useState } from "react";

function DesktopNav(props) {
  const [uniqueBrandName, setUniqueBrandName] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showBrand, setShowBrand] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const category = props.productData.map((data) => data.category);
  const uniqueCategory = [...new Set(category)];
  console.log(uniqueCategory);
  const brandHandler = (category) => {
    const selectedCategory = props.productData.filter(
      (data) => data.category === category
    );
    const brandName = selectedCategory.map((data) => data.brand);
    const uniqueBrand = [...new Set(brandName)];
    setUniqueBrandName(uniqueBrand);
    setShowBrand(true);
    setSelectedCategory(category);
    setActiveLink(true);
  };
  const brandCloseHandler = () => {
    setShowBrand(false);
    setActiveLink(false);
  };
  const brandContentHandler = () => {
    setShowBrand(true);
    setActiveLink(true);
  };
  const brandContent = uniqueBrandName.map((data) => {
    return (
      <div
        className="cursor-pointer pb-1 hover:bg-amber-600/70 rounded-xs"
        onMouseEnter={brandContentHandler}
        onMouseLeave={brandCloseHandler}
      >
        {data}
      </div>
    );
  });

  const content = uniqueCategory.map((data) => {
    return (
      <div className="flex flex-col text-center text-xl  font-bold py-1 ">
        <div
          className="cursor-pointer min-w-32 hover:bg-amber-600/70 rounded-xs py-0.5"
          onMouseEnter={() => brandHandler(data)}
          onMouseLeave={brandCloseHandler}
        >
          {data}
        </div>
        {selectedCategory === data && showBrand && (
          <div
            className="cursor-pointer absolute top-10 min-w-32 text-center p-1.5 text-xl rounded-xl bg-gray-300/40"
            onMouseEnter={brandContentHandler}
            onMouseLeave={brandCloseHandler}
          >
            {brandContent}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="relative w-full shadow-xl/20 p-1 ">
      <div className="flex justify-between w-full max-w-[1440px] mx-auto flex-wrap  px-2 ">
        {content}
      </div>
    </div>
  );
}

export default DesktopNav;
