import React, { useState } from "react";
import SideDrawerNavCategory from "./SideDrawerNavCategory";
import { MdCancelPresentation } from "react-icons/md";

function SideDrawerNav(props) {
  console.log(props.categoryData);

  return (
    <div className="">
      <div className=" flex justify-between px-3 mt-5 mb-3 text-2xl items-center">
        <h2>MENU</h2>
        <MdCancelPresentation onClick={props.onClose} />
      </div>
      <SideDrawerNavCategory
        categoryData={props.categoryData}
        // subCatActive={subCatActive}
        // setSubCatActive={setSubCatActive}
        {...props}
      />
    </div>
  );
}

export default SideDrawerNav;
