import React from "react";

function DesktopNavSubCategory({
  category,
  subSubCatActive,
  subSubCatActiveHandler,
  subSubCatCloseHandler,
}) {
  return (
    <div className="absolute top-9 z-30">
      {category.subCategories.map((subcat) => (
        <div
          className="flex flex-col gap-2"
          onMouseEnter={() => subSubCatActiveHandler(subcat.name)}
          onMouseLeave={subSubCatCloseHandler}
        >
          <div className="bg-green-400">{subcat.name}//</div>
          {subcat?.subSubCategories?.length > 0 &&
            subSubCatActive === subcat.name &&
            subcat.subSubCategories.map((subSubCat) => (
              <div
                className="flex flex-col w-[200px] gap2 bg-rose-500 "
                onMouseEnter={subSubCatActiveHandler(subcat.name)}
                onMouseLeave={subSubCatCloseHandler}
              >
                <div>{subSubCat.name}</div>
              </div>
            ))}
          {/* {subSubCatActive &&
            subcat.subSubCategories &&
            subcat.subSubCategories.map((subSubCat) => (
              <div className="flex flex-col ">
                <div>{subSubCat.name}</div>
              </div>
            ))} */}
        </div>
      ))}
    </div>
  );
}

export default DesktopNavSubCategory;
