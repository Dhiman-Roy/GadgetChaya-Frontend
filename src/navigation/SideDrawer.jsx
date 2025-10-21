import React, { useState } from "react";
import SideDrawerCategory from "./SideDrawerCategory";
import { MdOutlineCancel } from "react-icons/md";

function SideDrawer(props) {
  const [productItems, setProductItems] = useState("");
  const productList = [];
  const [activeClick, setActiveClick] = useState(false);
  const productBrandArray = props.productData.map((data) => data.brand);
  const productArray = props.productData.map((data) => {
    return data.category;
  });
  console.log("render");
  console.log(activeClick);
  const productCategory = [...new Set(productArray)];
  // const uniqueBrand = [...new Set(productBrandArray)];

  const filteredData = (data) => {
    return props.productData.filter((p) => p.category === data);
  };

  const drawerContent = productCategory.map((data) => {
    return (
      <SideDrawerCategory
        items={data}
        productData={filteredData(data)}
        key={Math.random()}
        id={Math.random()}
        activeClick={activeClick}
        setActiveClick={setActiveClick}
        productItems={productItems}
        setProductItems={setProductItems}
      />
    );
  });
  return (
    <div className="fixed top-0 left-0 min-w-52 bg-gray-700 text-white z-20 h-full opacity-95">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl text-amber-600">Menu</h2>
        <div onClick={props.onClose}>
          <MdOutlineCancel className="text-2xl text-red-400" />
        </div>
      </div>
      {drawerContent}
    </div>
  );
}

export default SideDrawer;
