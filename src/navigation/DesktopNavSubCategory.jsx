import React, { useState } from "react";
import { useNavigate } from "react-router";

function DesktopNavSubCategory({
  category,
  categoryName,
  subSubCatActive,
  subSubCatActiveHandler,
  subSubCatCloseHandler,

  index,
}) {
  const navigate = useNavigate();
  const linkHandler = (data) => {
    if (data.includes(" ")) {
      const newUrl = data.split(" ").join("-");
      navigate(newUrl);
    } else {
      navigate(data);
    }
  };
  return (
    <div className="absolute top-10 z-30 text-center w-full bg-indigo-200/95 rounded-xs ">
      {category.subCategories.map((subcat) => {
        return (
          <div
            className="flex flex-col cursor-pointer relative border-b-[1px] border-b-neutral-400"
            onMouseEnter={() => subSubCatActiveHandler(subcat.name)}
            onMouseLeave={subSubCatCloseHandler}
          >
            <div
              onClick={() =>
                linkHandler(`category/${categoryName}/${subcat.name}`)
              }
              className=" p-1  hover:text-amber-600 "
            >
              {subcat.name}
            </div>
            <div
              className={`cursor-pointer absolute top-0  rounded-xl ${
                index > 4
                  ? "-translate-x-full left-0"
                  : "translate-x-full right-0"
              } `}
            >
              <div className="rounded-xs bg-stone-200/95">
                {subcat?.subSubCategories?.length > 0 &&
                  subSubCatActive === subcat.name &&
                  subcat.subSubCategories.map((subSubCat) => (
                    <div
                      className="flex flex-col   px-3 py-2 hover:text-amber-600 "
                      onMouseEnter={() => subSubCatActiveHandler(subcat.name)}
                      onMouseLeave={subSubCatCloseHandler}
                    >
                      <div
                        onClick={() =>
                          linkHandler(
                            `category/${categoryName}/${subcat.name}/${subSubCat.name}`
                          )
                        }
                      >
                        {" "}
                        {subSubCat.name}
                      </div>
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

export default DesktopNavSubCategory;
