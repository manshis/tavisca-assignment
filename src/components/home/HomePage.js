import React from "react";
import TabsFactory from "../tabs/TabsFactory";

const HomePage = () => (
  <div className="container">
    <div className="header">
      <span>Tavisca Assignment</span>
    </div>
    <div className="tabs-container">
      {" "}
      <TabsFactory></TabsFactory>{" "}
    </div>
  </div>
);

export default HomePage;
