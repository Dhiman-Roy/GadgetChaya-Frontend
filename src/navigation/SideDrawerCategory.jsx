import React, { useEffect, useState } from "react";
import ShowBrand from "./ShowBrand";
function SideDrawerCategory(props) {
  console.log(props.activeClick);

  const brandName = props.productData.map((product) => product.brand);
  const uniqueBrand = [...new Set(brandName)];

  const clickHandler = (item) => {
    // props.setActiveClick(props.activeClick === props.id ? null : props.id);
    // console.log("hi");

    props.setActiveClick((prev) => !prev);

    props.setProductItems(item);
  };
  console.log(props.productItems);
  const content = uniqueBrand.map((brand) => {
    if (props.productItems === props.items) {
      return <ShowBrand brandName={brand} />;
    }
  });

  return (
    <>
      <div className="flex flex-col">
        <div
          className=" mb-1 p-2 pl-4 text-center font-bold text-xl"
          onClick={() => clickHandler(props.items)}
        >
          {props.items}
        </div>
        {props.activeClick && content}
      </div>
    </>
  );
}

export default SideDrawerCategory;
