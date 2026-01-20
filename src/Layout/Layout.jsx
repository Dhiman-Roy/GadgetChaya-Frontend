import { Outlet, RouterProvider } from "react-router";
import MainNavigation from "../navigation/MainNavigation";
import Backdrop from "../shared/uiElements/Backdrop";
import { useHttpClient } from "../hooks/httpHooks";

import { useEffect, useState } from "react";

function Layout() {
  const [productData, setProductData] = useState();
  const [categoryData, setCategoryData] = useState();
  const [drawer, setDrawer] = useState(false);
  const { sendRequest } = useHttpClient();
  const openDrawer = () => setDrawer(true);
  const closeDrawer = () => setDrawer(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sendRequest("/products1.json");
      const category = await sendRequest("/categories.json");
      console.log(data);
      setProductData(data);
      setCategoryData(category);
    };
    fetchData();
  }, [sendRequest]);

  return (
    <div className="max-w-[1440px] mx-auto">
      {drawer && (
        <div className="lg:hidden">
          <Backdrop onClick={closeDrawer} />
        </div>
      )}
      <MainNavigation
        onOpen={openDrawer}
        onClose={closeDrawer}
        drawer={drawer}
      />
      <Outlet context={{ productData, categoryData }} />
    </div>
  );
}

export default Layout;
