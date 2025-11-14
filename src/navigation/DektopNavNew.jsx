import React, { useState } from "react";
import DesktopNavCategory from "./DesktopNavCategory";
function DektopNavNew({ categoryData }) {
  const [subCatActive, setSubCatActive] = useState();
  console.log(categoryData);
  const subCatActiveHandler = (data) => setSubCatActive(data);
  const subCatCloseHandler = () => setSubCatActive(false);

  return (
    <DesktopNavCategory
      categoryData={categoryData}
      subCatActive={subCatActive}
      subCatActiveHandler={subCatActiveHandler}
      subCatCloseHandler={subCatCloseHandler}
    />
  );
}

export default DektopNavNew;
