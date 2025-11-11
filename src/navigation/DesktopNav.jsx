import React, { useState } from "react";

function DesktopNav(props) {
  const [uniqueSubCategoryName, setUniqueSubCategoryName] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const category = props.categoryData.map((data) => data.name);
  const uniqueCategory = [...new Set(category)];

  const brandHandler = (category) => {
    const selectedCategory = props.categoryData.filter(
      (data) => data?.name === category
    );
    console.log(selectedCategory);
    const subCategories = selectedCategory.map((data) => {
      console.log(data);
      if (data.subCategories) {
        return data.subCategories.map((subData) => subData.name);
      }
      return null;
    });

    const uniqueSubCategories = [...new Set(subCategories)];
    setUniqueSubCategoryName(uniqueSubCategories);
    setShowSubCategory(true);
    setSelectedCategory(category);
    setActiveLink(true);
  };
  const brandCloseHandler = () => {
    setShowSubCategory(false);
    setActiveLink(false);
  };
  const brandContentHandler = () => {
    setShowSubCategory(true);
    setActiveLink(true);
  };
  const brandContent =
    uniqueSubCategoryName.length === 0 ? (
      <div></div>
    ) : (
      uniqueSubCategoryName[0].map((data) => {
        return (
          <div
            className="cursor-pointer pb-1 hover:bg-amber-600/70 rounded-xs"
            onMouseEnter={brandContentHandler}
            onMouseLeave={brandCloseHandler}
          >
            {data}
          </div>
        );
      })
    );
  console.log(uniqueSubCategoryName);
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
        {selectedCategory === data && showSubCategory && (
          <div
            className="cursor-pointer absolute block top-10 min-w-32 text-center p-1.5 text-xl rounded-xl bg-gray-300/97 z-20"
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
