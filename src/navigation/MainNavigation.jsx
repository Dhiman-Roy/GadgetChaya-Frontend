import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import { useHttpClient } from "../hooks/httpHooks";
import SideDrawer from "./SideDrawer";
import SideDrawerNav from "./SideDrawerNav";
import { Outlet } from "react-router";

import DesktopNavNew from "./DektopNavNew";

function MainNavigation(props) {
  const [categoryData, setCategoryData] = useState([]);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      const data = await sendRequest("/categories.json");
      setCategoryData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <MainHeader {...props} categoryData={categoryData} />

      <div
        className={`fixed top-0 left-0  h-full w-[260px]  bg-violet-50 z-40 shadow-xl transition-transform duration-500 ease-in-out
    ${props.drawer ? "translate-x-0" : "-translate-x-full"}`}
      >
        <SideDrawerNav categoryData={categoryData} {...props} />
      </div>

      <div className="hidden lg:flex ">
        <DesktopNavNew categoryData={categoryData} />
      </div>
    </>
  );
}

export default MainNavigation;
