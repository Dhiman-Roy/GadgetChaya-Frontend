import React, { useState } from "react";
import SideDrawerCategory from "./SideDrawerCategory";
import { MdOutlineCancel } from "react-icons/md";

function SideDrawer(props) {
  const [productItems, setProductItems] = useState("");

  const [activeClick, setActiveClick] = useState(false);

  const categoryArray = props.categoryData.map((data) => {
    return data.name;
  });
  console.log("render");
  console.log(activeClick);
  const uniqueCategoryArray = [...new Set(categoryArray)];

  const filteredData = (data) => {
    return props.categoryData.filter((c) => c.name === data);
  };

  const drawerContent = uniqueCategoryArray.map((data, index) => {
    return (
      <SideDrawerCategory
        items={data}
        categoryData={filteredData(data)}
        key={index}
        id={index}
        activeClick={activeClick}
        setActiveClick={setActiveClick}
        productItems={productItems}
        setProductItems={setProductItems}
      />
    );
  });
  return (
    <div>
      <div className="fixed top-0 left-0 min-w-52 bg-gray-700 text-white z-20 h-full opacity-95 lg:hidden">
        <div className="flex items-center justify-between p-4  ">
          <h2 className="text-2xl text-amber-600">Menu</h2>
          <div onClick={props.onClose}>
            <MdOutlineCancel className="text-2xl text-red-400" />
          </div>
        </div>
        <div className="overflow-y-auto h-full ">{drawerContent}</div>
      </div>
    </div>
  );
}

export default SideDrawer;
