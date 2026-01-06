import React, { useState } from "react";
import DesktopNavSubCategory from "./DesktopNavSubCategory";
import { useNavigate } from "react-router";
function DesktopNavCategory({
  categoryData,
  subCatActive,
  subCatActiveHandler,
  subCatCloseHandler,
}) {
  const navigate = useNavigate();
  const [subSubCatActive, setSubSubCatActive] = useState();
  const subSubCatActiveHandler = (data) => setSubSubCatActive(data);
  const subSubCatCloseHandler = () => setSubSubCatActive(false);
  const linkHandler = (data) => {
    if (data.includes(" ")) {
      const newUrl = data.split(" ").join("-");
      navigate(newUrl);
    } else {
      navigate(data);
    }
  };
  return (
    <div className="w-full bg-gray-300/95 text-bold shadow-gray-400 shadow-xl ">
      <div className="flex justify-between w-full  ">
        {categoryData.map((category, index) => (
          <div
            className="  relative min-w-[90px]  cursor-pointer  "
            onMouseEnter={() => subCatActiveHandler(category.name)}
            onMouseLeave={subCatCloseHandler}
          >
            <div
              className="flex flex-col gap-2  w-full text-center py-2 xl:font-semibold xl:text-lg shrink-0  overflow-hidden "
              onClick={() => linkHandler(`category/${category.name}`)}
            >
              {category.name}
            </div>
            {subCatActive === category.name &&
              category.subCategories.length > 0 && (
                <DesktopNavSubCategory
                  category={category}
                  categoryName={category.name}
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
