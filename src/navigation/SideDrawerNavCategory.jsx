import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import DesktopNavSubCategory from "./DesktopNavSubCategory";
import SideDrawerNavSubCategory from "./SideDrawerNavSubCategory";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
function SideDrawerNavCategory({ categoryData }) {
  const [subCatActive, setSubCatActive] = useState(null);
  const navigate = useNavigate();
  // const [subSubCatActive, setSubSubCatActive] = useState();

  // const subCatCloseHandler = () => setSubCatActive(false);

  const clickHandler = (data) => {
    // subCatActive ? subCatCloseHandler() : subCatActiveHandler(data);
    subCatActive === data ? setSubCatActive(null) : setSubCatActive(data);
  };
  const linkHandler = (data) => {
    if (data.includes(" ")) {
      const newUrl = data.split(" ").join("-");
      navigate(newUrl);
    } else {
      navigate(data);
    }
  };
  return (
    <div className="h-full">
      <div className={`flex flex-col   `}>
        {categoryData.map((category, index) => (
          <div className={`   min-w-[90px]  cursor-pointer  `}>
            <div
              className={`   flex justify-between items-center px-2  w-full py-2 font-bold   cursor-pointer   `}
            >
              <div
                className="w-full px-1"
                onClick={() => linkHandler(`category/${category.name}`)}
              >
                {category.name}
              </div>
              <IoIosArrowForward onClick={() => clickHandler(category.name)} />
            </div>
            <div
              className={`cursor-pointer overflow-hidden top-0  transition-all ease-out duration-600 ${
                subCatActive === null
                  ? "max-h-0 opacity-0"
                  : "max-h-96 opacity-100"
              } `}
            >
              {subCatActive === category.name &&
                category.subCategories.length > 0 && (
                  <div>
                    <SideDrawerNavSubCategory
                      category={category}
                      categoryName={category.name}
                      // subSubCatActive={subSubCatActive}
                      categoryDataLength={categoryData.length}
                      index={index}
                    />
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideDrawerNavCategory;
