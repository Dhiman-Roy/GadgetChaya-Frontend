import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import MainNavigation from "./navigation/MainNavigation";
import Backdrop from "./shared/uiElements/Backdrop";
import ImageSlider from "./ImageSlider/ImageSlider";
import { useState } from "react";

function App() {
  const [drawer, setDrawer] = useState(false);
  const openDrawer = () => setDrawer(true);
  const closeDrawer = () => setDrawer(false);
  // let routes;
  // if(true){
  //   routes= (
  //     <Routes>
  //       <Route path="/" element={<Homepage/>} />
  //     </Routes>
  //   )
  // }
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
      <ImageSlider />
      {/* <main>{routes}</main> */}
    </div>
  );
}

export default App;
