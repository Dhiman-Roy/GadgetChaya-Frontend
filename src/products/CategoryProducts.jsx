import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";
import PathNavigate from "./pathNavigate";

export default function CategoryProducts() {
  const { categoryId, subCategoryId, subSubCategoryId } = useParams();
  const [requestCategory, setRequestCategory] = useState("");
  const [categoryCoverImage, setCategoryCoverImage] = useState("");
  const { productData, categoryData } = useOutletContext();

  console.log(categoryId);
  const category = categoryId?.trim().split("-").join(" ");
  const subCategory = subCategoryId?.trim().split("-").join(" ");
  const subSubCategory = subSubCategoryId?.trim().split("-").join(" ");

  useEffect(() => {
    if (!productData || productData.length === 0) return;

    if (subSubCategoryId) {
      const filterData = productData.filter(
        (data) => data.subSubCategoryName === subSubCategory,
      );
      const coverImage = categoryData.filter((data) => {
        if (data.name === category && data.subCategories) {
          data.subCategories.filter((subData) => {
            if (subData.name === subCategory && subData.subSubCategories) {
              subData.subSubCategories.map((subSubData) => {
                if (subSubData.name === subSubCategory) {
                  setCategoryCoverImage(subSubData.coverImage);
                }
              });
            }
          });
        }
      });
      console.log(coverImage);
      setRequestCategory(filterData);
    } else if (subCategoryId) {
      const filterData = productData.filter(
        (data) => data.subCategoryName === subCategory,
      );
      const coverImage = categoryData.filter((data) => {
        if (data.name === category && data.subCategories) {
          data.subCategories.filter((subData) => {
            if (subData.name === subCategory) {
              setCategoryCoverImage(subData.coverImage);
            }
          });
        }
      });
      setRequestCategory(filterData);
    } else if (categoryId) {
      const filterData = productData.filter(
        (data) => data.categoryName === category,
      );
      const coverImage = categoryData.filter((data) => {
        if (data.name === category) {
          setCategoryCoverImage(data.coverImage);
        }
      });
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
  console.log(categoryCoverImage);
  return (
    <div>
      {categoryCoverImage.trim() !== "" && (
        <div className="w-full h-52 lg:h-62 contain-content mt-4 rounded-xl shadow-2xl shadow-black-50  ">
          <img className="w-full h-full " src={categoryCoverImage} />
        </div>
      )}
      <PathNavigate
        category={category}
        subCategory={subCategory}
        subSubCategory={subSubCategory}
      />
      <div>{content}</div>
    </div>
  );
}
