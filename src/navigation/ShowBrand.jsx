import React from "react";

function ShowBrand(props) {
  return (
    <div className="bg-gray-200 opacity-90 text-black text-center font-bold pb-1.5 ">
      {props.brandName}
    </div>
  );
}

export default ShowBrand;
