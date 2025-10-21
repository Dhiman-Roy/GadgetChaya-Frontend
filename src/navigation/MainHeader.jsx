import React, { useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa";

function MainHeader(props) {
  const [val, setVal] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
    setVal(event.target[0].value);
  };
  return (
    <div className=" bg-black pb-2 ">
      <div className=" flex items-center justify-between pr-3">
        <div className="flex gap-2 items-center pl-3">
          <button
            onClick={props.onOpen}
            className="w-9 h-9 p-0.5  border-gray-400 border-2 rounded flex flex-wrap items-center"
          >
            <div className="w-full rounded-2xl h-0.5 bg-white"></div>
            <div className="w-full rounded-2xl h-0.5 bg-white"></div>
            <div className="w-full rounded-2xl h-0.5 bg-white"></div>
          </button>
          <div className="w-26 h-16">
            <img
              className="w-full h-full bg-cover"
              src="GadgetChayaLogo.png"
              alt="website logo"
            />
          </div>
        </div>

        <div className="border-gray-600 rounded items-center hidden md:flex">
          <form className="flex items-center gap-1" onSubmit={submitHandler}>
            <input
              type="text"
              className="bg-white rounded font-bold p-1"
              placeholder="search here"
            ></input>
            <button type="submit" className="rounded">
              <FaSearch className="bg-amber-600 w-8 h-8 p-1 rounded" />
            </button>
          </form>
        </div>

        <div>
          <FaUser className=" text-white w-8 h-8" />
        </div>
      </div>

      <div className="border-gray-600 rounded  flex justify-center md:hidden">
        <form className="flex items-center gap-1" onSubmit={submitHandler}>
          <input
            type="text"
            className="bg-white rounded font-bold p-1"
            placeholder="search here"
          ></input>
          <button type="submit" className="rounded">
            <FaSearch className="bg-amber-600 w-8 h-8 p-1 rounded" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default MainHeader;
