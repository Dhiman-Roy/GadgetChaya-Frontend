import React, { useState } from "react";

function SideDrawerNavSubCategory({
  category,
  subSubCatActive,
  subSubCatActiveHandler,
  subSubCatCloseHandler,
  categoryDataLength,
  index,
}) {
  return (
    <div className=" z-30  w-full bg-indigo-200/95 rounded-xs ">
      {category.subCategories.map((subcat) => {
        return (
          <div
            className="flex flex-col  cursor-pointer r border-b-[1px] border-b-neutral-400"
            onClick={() => subSubCatActiveHandler(subcat.name)}
          >
            <div className=" p-1 px-3  hover:text-amber-600 ">
              {subcat.name}
            </div>
            <div className={`cursor-pointer  rounded-xl `}>
              <div className="rounded-xs bg-stone-200/95">
                {subcat?.subSubCategories?.length > 0 &&
                  subSubCatActive === subcat.name &&
                  subcat.subSubCategories.map((subSubCat) => (
                    <div
                      className="flex flex-col   px-3 py-2 hover:text-amber-600 "
                      onClick={() => subSubCatActiveHandler(subcat.name)}
                    >
                      <div className="px-5"> {subSubCat.name}</div>
                    </div>
                  ))}
              </div>
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

export default SideDrawerNavSubCategory;
