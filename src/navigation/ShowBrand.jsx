import React from "react";

function ShowBrand(props) {
  console.log(props);

  return <div className="bg-amber-600 text-blue-800 ">{props.brandName}</div>;
}

export default ShowBrand;
