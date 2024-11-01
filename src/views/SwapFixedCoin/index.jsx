import React, { useState, useEffect } from "react";

import "./swapfixedcoin.scss";
const SwapFixedCoin = (props) => {
  const [tab, settab] = useState(0);

  // 买入数据
  const [buyAmount, setbuyAmount] = useState("0.0");
  const buyAmountChange = ({ target: { value } }) => {
    setbuyAmount(value);
  };

  // 卖出数据
  const [sellAmount, setsellAmount] = useState("0.0");
  const sellAmountChange = ({ target: { value } }) => {
    setsellAmount(value);
  };

  // 默认值
  const [defaultValues, setDefaultValues] = useState([
    {
      name: "reset",
      value: "0.0",
    },
    {
      name: "0.1 SOL",
      value: "0.1",
    },
    {
      name: "0.5 SOL",
      value: "0.5",
    },
    {
      name: "1 SOL",
      value: "1",
    },
  ]);
  useEffect(() => {}, []);
  return (
    <div className="swapfixedcoin">
      <div className="swapfixedcoin_box">
        <div className="swap_tab">
          <div
            className={tab === 0 ? "btn btn_active" : "btn"}
            onClick={() => settab(0)}
          >
            Buy
          </div>
          <div
            className={tab === 1 ? "btn btn_active" : "btn"}
            onClick={() => settab(1)}
          >
            Sell
          </div>
        </div>
        <div className="explain">
          <div>switch to Spookio</div>
          <div>Set max slippage</div>
        </div>
        {/* 买入 */}
        {tab === 0 && (
          <div className="input_box">
            <div className="input_info">
              <input
                type="number"
                className="input"
                value={buyAmount}
                onChange={buyAmountChange}
              />
              <span className="symbol">SOL</span>
              <img src="https://picsum.photos/50/50" alt="" className="icon" />
            </div>
            <div className="input_default">
              {defaultValues.map((item) => {
                return (
                  <div key={item.name} onClick={() => setbuyAmount(item.value)}>
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* 卖出 */}
        {tab === 1 && (
          <div className="input_box">
            <div className="input_info">
              <input
                type="number"
                className="input"
                value={sellAmount}
                onChange={sellAmountChange}
              />
              <span className="symbol">WLD</span>
              <img src="https://picsum.photos/50/50" alt="" className="icon" />
            </div>
            <div className="input_default">
              {defaultValues.map((item) => {
                return (
                  <div
                    key={item.name}
                    onClick={() => setsellAmount(item.value)}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="swap_btn"> place trade </div>
      </div>
    </div>
  );
};
export default SwapFixedCoin;
