import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import { useHttpClient } from "../hooks/httpHooks";
import SideDrawer from "./SideDrawer";
import DesktopNav from "./DesktopNav";

function MainNavigation(props) {
  const [productData, setProductData] = useState([]);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      const data = await sendRequest("/products.json");
      setProductData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <MainHeader {...props} productData={productData} />
      {props.drawer && <SideDrawer productData={productData} {...props} />}
      <div className="hidden lg:flex"><DesktopNav productData={productData} /> </div>

    </>
  );
}

export default MainNavigation;
