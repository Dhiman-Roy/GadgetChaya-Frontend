import React, { useState } from "react";

function DesktopNavSubCategory({
  category,
  subSubCatActive,
  subSubCatActiveHandler,
  subSubCatCloseHandler,
  categoryDataLength,
  index,
}) {
  return (
    <div className="absolute top-9 z-30 text-center">
      {category.subCategories.map((subcat) => {
        return (
          <div
            className="flex flex-col cursor-pointer"
            onMouseEnter={() => subSubCatActiveHandler(subcat.name)}
            onMouseLeave={subSubCatCloseHandler}
          >
            <div className="bg-green-400">{subcat.name}</div>
            <div
              className={`cursor-pointer absolute top-0 ${
                index > 4
                  ? "-translate-x-full left-0"
                  : "translate-x-full right-0"
              } `}
            >
              {subcat?.subSubCategories?.length > 0 &&
                subSubCatActive === subcat.name &&
                subcat.subSubCategories.map((subSubCat) => (
                  <div
                    className="flex flex-col w-[200px] bg-rose-500 p-2 "
                    onMouseEnter={subSubCatActiveHandler(subcat.name)}
                    onMouseLeave={subSubCatCloseHandler}
                  >
                    {subSubCat.name}
                  </div>
                ))}
            </div>

            {/* {subSubCatActive &&
            subcat.subSubCategories &&
            subcat.subSubCategories.map((subSubCat) => (
              <div className="flex flex-col ">
                <div>{subSubCat.name}</div>
              </div>
            ))} */}
          </div>
        );
      })}
    </div>
  );
}

export default DesktopNavSubCategory;
