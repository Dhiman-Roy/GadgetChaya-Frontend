import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";

export default function CategoryProducts() {
  const { categoryId, subCategoryId, subSubCategoryId } = useParams();
  const [requestCategory, setRequestCategory] = useState();
  const { productData } = useOutletContext();
  useEffect(() => {
    const searchString = () => {
      if (subSubCategoryId) return subSubCategoryId;
      if (subCategoryId) return subCategoryId;
      if (categoryId) return categoryId;
    };

    let data = searchString();
    if (data.includes("-")) {
      data = data.split("-").join(" ");
    }
    setRequestCategory(data);
  }, [categoryId, subCategoryId, subSubCategoryId]);

  // if (requestCategory.includes("-")) {
  //   setRequestCategory(requestCategory.split("-").join(" "));
  // }
  console.log(requestCategory);
  return <div>CategoryProducts</div>;
}
