import React from "react";
import Home from "./Home";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
import "./index.css";

const index = () => {
  return (
    <div className="home__index">
      <Home />

      <BottomDrawer className="drawer__mobile" />
    </div>
  );
};

export default index;
