import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import MainNavigation from "./navigation/MainNavigation";
import Backdrop from "./shared/uiElements/Backdrop";
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
    <>
      {drawer && <Backdrop onClick={closeDrawer} />}
      <MainNavigation onClick={openDrawer} />
      {/* <main>{routes}</main> */}
    </>
  );
}

export default App;
