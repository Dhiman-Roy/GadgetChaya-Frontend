import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import { useHttpClient } from "../hooks/httpHooks";
import SideDrawer from "./SideDrawer";
import DesktopNav from "./DesktopNav";

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
      {props.drawer && <SideDrawer categoryData={categoryData} {...props} />}
      <div className="hidden lg:flex">
        <DesktopNav categoryData={categoryData} />
      </div>
    </>
  );
}

export default MainNavigation;
