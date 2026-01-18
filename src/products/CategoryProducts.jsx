import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";

export default function CategoryProducts() {
  const { categoryId, subCategoryId, subSubCategoryId } = useParams();
  const [requestCategory, setRequestCategory] = useState();
  const { productData } = useOutletContext();

  useEffect(() => {
    if (!productData || productData.length === 0) return;

    if (subSubCategoryId) {
      const modifiedId = subSubCategoryId.trim().split("-").join(" ");
      const filterData = productData.filter(
        (data) => data.subSubCategoryName === modifiedId,
      );
      setRequestCategory(filterData);
    } else if (subCategoryId) {
      const modifiedId = subCategoryId.trim().split("-").join(" ");
      const filterData = productData.filter(
        (data) => data.subCategoryName === modifiedId,
      );
      setRequestCategory(filterData);
    } else if (categoryId) {
      const modifiedId = categoryId.trim().split("-").join(" ");
      const filterData = productData.filter(
        (data) => data.categoryName === modifiedId,
      );
      setRequestCategory(filterData);
    }
  }, [productData, categoryId, subCategoryId, subSubCategoryId]);
  if (!requestCategory || requestCategory.length === 0) {
    return (
      <div className="text-center mt-5 text-4xl font-bold">
        No Product Found!
      </div>
    );
  }
  const content = requestCategory.map((data) => {
    return <div>{data.productName}</div>;
  });
  console.log(requestCategory);
  return <div>{content}</div>;
}
