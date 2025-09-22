import React from "react";

export default function Backdrop(props) {
  return (
    <div
      className="fixed bg-gray-100 opacity-40 w-full h-full z-10"
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
