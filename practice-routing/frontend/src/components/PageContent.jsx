import React from "react";
import classes from "./PageContent.module.css";
import MainNavigation from "./MainNavigation";

const PageContent = ({ title, children }) => {
  return (
    <div className={classes.content}>
      <MainNavigation />
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
