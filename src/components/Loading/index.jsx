import React from "react";
import { Spin } from "antd";
import "./loading.css";
const Loading = (props) => {
  return (
    <div className="app-container">
      <Spin />
    </div>
  );
};

export default Loading;
