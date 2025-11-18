import React, { useState } from "react";
import SideDrawerNavCategory from "./SideDrawerNavCategory";
function SideDrawerNav(props) {
  const [subCatActive, setSubCatActive] = useState();
  console.log(props.categoryData);
  const subCatActiveHandler = (data) => setSubCatActive(data);
  const subCatCloseHandler = () => setSubCatActive(false);

  return (
    <SideDrawerNavCategory
      categoryData={props.categoryData}
      subCatActive={subCatActive}
      subCatActiveHandler={subCatActiveHandler}
      subCatCloseHandler={subCatCloseHandler}
      {...props}
    />
  );
}

export default SideDrawerNav;
