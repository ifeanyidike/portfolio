import React from "react";
import "./PageHeader.css";
import Avatar from "@material-ui/core/Avatar";

const PageHeader = ({ title, avatar }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      {avatar && (
        <Avatar aria-label="Logo" className="header__avatar">
          {avatar}
        </Avatar>
      )}
    </div>
  );
};

export default PageHeader;
