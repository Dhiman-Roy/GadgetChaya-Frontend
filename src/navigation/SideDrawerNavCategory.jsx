import React, { useState } from "react";
import DesktopNavSubCategory from "./DesktopNavSubCategory";
import SideDrawerNavSubCategory from "./SideDrawerNavSubCategory";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
function SideDrawerNavCategory({
  categoryData,
  subCatActive,
  subCatActiveHandler,
  subCatCloseHandler,
  drawer,
}) {
  const [drawerSlider, setDrawerSlider] = useState(false);
  const [subSubCatActive, setSubSubCatActive] = useState();

  const subSubCatActiveHandler = (data) => setSubSubCatActive(data);
  const subSubCatCloseHandler = () => setSubSubCatActive(false);

  const clickHandler = (data) => {
    subCatActive ? subCatCloseHandler() : subCatActiveHandler(data);
  };
  console.log(drawer);
  return (
    <div className="h-full">
      <div className={`flex flex-col h-full overflow-y-auto  `}>
        {categoryData.map((category, index) => (
          <div className="  relative min-w-[90px]  cursor-pointer  ">
            <div className="flex justify-between items-center px-2  w-full py-2 font-bold ">
              <div className="w-full px-1">{category.name}</div>
              <IoIosArrowForward onClick={() => clickHandler(category.name)} />
            </div>
            {subCatActive === category.name &&
              category.subCategories.length > 0 && (
                <SideDrawerNavSubCategory
                  category={category}
                  subSubCatActive={subSubCatActive}
                  subSubCatActiveHandler={subSubCatActiveHandler}
                  subSubCatCloseHandler={subSubCatCloseHandler}
                  categoryDataLength={categoryData.length}
                  index={index}
                />
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideDrawerNavCategory;
