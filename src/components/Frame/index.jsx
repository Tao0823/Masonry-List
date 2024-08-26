import React, { useState, useEffect } from "react";
const Frame = (props) => {
  useEffect(() => {}, []);
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};
export default Frame;
