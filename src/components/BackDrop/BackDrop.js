import React from "react";
import "./BackDrop.css";

const BackDrop = ({ close }) => {
  return <div className="backdrop" onClick={close}></div>;
};

export default BackDrop;
