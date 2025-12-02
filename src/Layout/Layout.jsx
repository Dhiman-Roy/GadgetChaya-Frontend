import { Outlet, RouterProvider } from "react-router";
import MainNavigation from "../navigation/MainNavigation";
import Backdrop from "../shared/uiElements/Backdrop";

import { useState } from "react";

function Layout() {
  const [drawer, setDrawer] = useState(false);
  const openDrawer = () => setDrawer(true);
  const closeDrawer = () => setDrawer(false);

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
      <Outlet />
    </div>
  );
}

export default Layout;
