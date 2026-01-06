import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useHttpClient } from "../hooks/httpHooks";

function Categories() {
  const { sendRequest } = useHttpClient();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await sendRequest("/categories.json");
      setData(responseData);
    };

    fetchData();
  }, [sendRequest]);
  const content = data.map((singleData) => (
    <Link
      className=" p-2 w-32 border border-orange-600/80 shadow-2xl shadow-black/50 hover:scale-107 hover:shadow-xl bg-white cursor-pointer h-32 flex flex-col justify-between gap-1.5 rounded-xl"
      to={`/category/${singleData.name}`}
    >
      <div className="w-28 h-20">
        <img src={singleData.image} className="w-full h-full bg-cover" />
      </div>
      <div className=" text-center overflow-hidden h-7 rounded-xs font-bold text-orange-600/80 ">
        {singleData.name}
      </div>
    </Link>
  ));

  return (
    <div>
      <h2 className="text-4xl inline-block font-bold mx-2 bg-gradient-to-r from-orange-600 to-teal-600 p-2 text-transparent bg-clip-text">
        Categories
      </h2>
      <div className=" flex justify-between flex-wrap gap-2 items-center p-3  bg-teal-100/60 max-h-71 overflow-auto ">
        {content}
      </div>
    </div>
  );
}

export default Categories;
