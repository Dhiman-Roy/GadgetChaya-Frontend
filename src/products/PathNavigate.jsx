import React from "react";
import { useNavigate } from "react-router";

function PathNavigate({ category, subCategory, subSubCategory }) {
  const navigate = useNavigate();
  const pathHandler = (givenPath) => {
    const categoryName = category?.trim().split(" ").join("-");
    const subCategoryName = subCategory?.trim().split(" ").join("-");
    const subSubCategoryName = subSubCategory?.trim().split(" ").join("-");
    if (givenPath === subSubCategory) {
      navigate(
        "/category/" +
          categoryName +
          "/" +
          subCategoryName +
          "/" +
          subSubCategoryName,
      );
    } else if (givenPath === subCategory) {
      navigate("/category/" + categoryName + "/" + subCategoryName);
    } else if (givenPath === category) {
      navigate("/category/" + categoryName);
    } else if (givenPath === "Home") {
      navigate("/");
    }
  };
  return (
    <div className="flex justify-start gap-1 text-black/80 font-semibold items-center cursor-pointer mt-3">
      <div onClick={() => pathHandler("Home")}>Home</div>

      {category && (
        <div onClick={() => pathHandler(category)}>
          {" > "} {category}
        </div>
      )}
      {subCategory && (
        <div onClick={() => pathHandler(subCategory)}>
          {" > "} {subCategory}
        </div>
      )}
      {subSubCategory && (
        <div onClick={() => pathHandler(subSubCategory)}>
          {" > "} {subSubCategory}
        </div>
      )}
    </div>
  );
}

export default PathNavigate;
