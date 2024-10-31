import React, { useState, useEffect } from "react";

import arrowtwo from "@/assets/swap/arrowtwo.svg";
import arrowwhite from "@/assets/swap/arrowwhite.svg";

import "./tokenSelection.scss";

const TokenSelection = ({ tokenList, acToken, setAcToken }) => {
  console.log("tokenList", tokenList);
  const isActoken = Object.keys(acToken).length === 0;

  useEffect(() => {}, []);
  return (
    <div className="token_selection">
      <div
        className={isActoken ? "show_token show_token_no_data" : "show_token"}
      >
        {!isActoken ? (
          <span className="selected_token">
            <img src={acToken.icon} alt="" />
            <span>{acToken.name}</span>
          </span>
        ) : (
          <span>Select token</span>
        )}
        <span className="arrow_icon">
          <img
            src={isActoken ? arrowwhite : arrowtwo}
            alt=""
            className="arrow"
          />
        </span>
      </div>
    </div>
  );
};
export default TokenSelection;
