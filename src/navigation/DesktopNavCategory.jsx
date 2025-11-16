import React, { useState } from "react";
import DesktopNavSubCategory from "./DesktopNavSubCategory";
function DesktopNavCategory({
  categoryData,
  subCatActive,
  subCatActiveHandler,
  subCatCloseHandler,
}) {
  const [subSubCatActive, setSubSubCatActive] = useState();
  const subSubCatActiveHandler = (data) => setSubSubCatActive(data);
  const subSubCatCloseHandler = () => setSubSubCatActive(false);
  return (
    <div className="w-full ">
      <div className="flex justify-between w-full ">
        {categoryData.map((category, index) => (
          <div
            className="w-[200px] h-[100px] top-3 relative   "
            onMouseEnter={() => subCatActiveHandler(category.name)}
            onMouseLeave={subCatCloseHandler}
          >
            <div className="flex flex-col gap-2 bg-pink-700 w-full text-center py-2  ">
              {category.name}
            </div>
            {subCatActive === category.name &&
              category.subCategories.length > 0 && (
                <DesktopNavSubCategory
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

export default DesktopNavCategory;
