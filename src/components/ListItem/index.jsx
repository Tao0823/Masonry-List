import React, { useState, useEffect } from "react";

import "./listitem.scss";

import { Progress } from "antd";

const ListItem = ({ item }) => {
  return (
    <div className="list_item">
      <div className="img">
        <img src={item.img} alt="" />
        <div className="increase">+{item.increase}%</div>
      </div>
      <div className="info">
        <h1 className="name">{item.name}</h1>
        <p className="desc">{item.desc}</p>
        <div className="marketcap">
          <div className="price">
            Marketcap:{item.marketcap}({(item.sold / item.total).toFixed(2)}%)
          </div>
          <div className="">
            <Progress
              percent={(item.sold / item.total) * 100}
              showInfo={false}
              strokeColor={{
                from: "#6901ff",
                to: "#ff75a3",
              }}
              trailColor="#2b2b35"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListItem;
