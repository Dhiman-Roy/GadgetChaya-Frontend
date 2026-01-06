import React, { useState } from "react";
import { Link } from "react-router";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router";

function SideDrawerNavSubCategory({ category, categoryName }) {
  const [subSubCatActive, setSubSubCatActive] = useState();
  const navigate = useNavigate();

  const clickHandler = (data) => {
    subSubCatActive === data
      ? setSubSubCatActive(null)
      : setSubSubCatActive(data);
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
    <div className=" z-30  w-full bg-indigo-200/95 rounded-xs ">
      {category.subCategories.map((subcat) => {
        return (
          <div className="flex flex-col  cursor-pointer r border-b-[1px] border-b-neutral-400">
            <div className="flex justify-between items-center px-2">
              <div
                className=" p-1 px-3  hover:text-amber-600 "
                onClick={() =>
                  linkHandler(`category/${categoryName}/${subcat.name}`)
                }
              >
                {subcat.name}
              </div>

              {subcat?.subSubCategories?.length > 0 && (
                <IoIosArrowForward onClick={() => clickHandler(subcat.name)} />
              )}
            </div>
            <div className={`cursor-pointer  rounded-xl `}>
              <div
                className={`rounded-xs bg-stone-200/95 transition-all ease-in-out duration-200 overflow-hidden ${
                  subSubCatActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } `}
              >
                {subcat?.subSubCategories?.length > 0 &&
                  subSubCatActive === subcat.name &&
                  subcat.subSubCategories.map((subSubCat) => (
                    <div
                      className="flex flex-col   px-3 py-2 hover:text-amber-600 "
                      // onClick={() => subSubCatActiveHandler(subcat.name)}
                    >
                      <div
                        className="px-5"
                        onClick={() =>
                          linkHandler(
                            `category/${categoryName}/${subcat.name}/${subSubCat.name}`
                          )
                        }
                      >
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

export default SideDrawerNavSubCategory;
