import React from "react";
import Header from "../Header/Header";
import "./PageContainer.css";

const PageContainer = (props) => {
  return (
    <div className="page-container">
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default PageContainer;
