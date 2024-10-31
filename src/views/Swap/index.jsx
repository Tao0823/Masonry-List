import React, { useState, useEffect } from "react";
import { ArrowDownOutlined, DownOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import TokenSelection from "./components/TokenSelection";

import trade from "@/assets/swap/trade.svg";
import arrow from "@/assets/swap/arrow.svg";
import tips from "@/assets/swap/tips.svg";

import "./swap.scss";

const Swap = (props) => {
  // 选中的框，false表示出售，true表示购买
  const [selected, setSelected] = useState(false);
  // 显示或隐藏更多信息
  const [showMore, setShowMore] = useState(false);

  // 币种种类列表
  const [currency, setCurrency] = useState([]);
  // 售卖选中的币种
  const [sellToken, setSellToken] = useState({});
  // 购买选中的币种
  const [buyToken, setBuyToken] = useState({});

  // 出售的信息
  const [sellAmount, setSellAmount] = useState("");
  const sellChange = ({ target: { value } }) => {
    setSellAmount(value);
  };

  // 购买的金额
  const [buyAmount, setBuyAmount] = useState("");
  const buyChange = ({ target: { value } }) => {
    setBuyAmount(value);
  };

  // 兑换提示
  const exchangeTip = () => {
    return (
      <div className="swap_tip">
        <p>
          This is the cost to process your transaction on the blockchain.
          Uniswap does not receive any share of these fees.
        </p>
        <a
          href="https://support.uniswap.org/hc/en-us/articles/8370337377805-What-is-a-network-cost"
          target="_blank"
        >
          Learn more
        </a>
      </div>
    );
  };

  // 请求token列表
  const requestTokenList = async () => {
    const res = await (
      await fetch(
        "http://0xtest2024apps001olunoshibdegenbitethusdtc0xogs891.wedegen.com/v2api/x20/swapTokenList"
      )
    ).json();
    console.log("请求token列表", res);
    if (res.code === 200 && res.data) {
      setCurrency(res.data);
    }
  };
  useEffect(() => {
    requestTokenList();
  }, []);
  return (
    <div className="swap">
      <div className="swap_container">
        <div
          className={
            selected ? "card card_sell card_selected" : "card card_sell"
          }
          onClick={() => setSelected(false)}
        >
          <div className="name">Sell</div>
          <div className="value">
            <div className="value_num">
              <input
                type="number"
                className="input_num"
                placeholder="0"
                value={sellAmount}
                onChange={sellChange}
              />
            </div>
            <div className="value_curr">
              <TokenSelection
                tokenList={currency}
                acToken={sellToken}
                setAcToken={setSellToken}
              />
            </div>
          </div>
          <div className="money_curr">
            <div>$0</div>
            <div className="money_num">
              0 USDT <div className="money_max">Max</div>
            </div>
          </div>
        </div>
        <div className="exchange">
          <div className="exchange_box">
            <ArrowDownOutlined
              className="exchange_icon"
              style={{ fontSize: "20px", color: "rgb(34, 34, 34)" }}
            />
          </div>
        </div>
        <div
          className={
            !selected ? "card card_buy card_selected" : "card card_buy "
          }
          onClick={() => setSelected(true)}
        >
          <div className="name">Buy</div>
          <div className="value">
            <div className="value_num">
              <input
                type="number"
                className="input_num"
                placeholder="0"
                value={sellAmount}
                onChange={sellChange}
              />
            </div>
            <div className="value_curr">
              {" "}
              <TokenSelection
                tokenList={currency}
                acToken={buyToken}
                setAcToken={setBuyToken}
              />
            </div>
          </div>
          <div className="money_curr">$0</div>
        </div>

        <div className="btn_container">
          {/* 未输入数字 */}
          <div className="enter_amount">Enter an amount</div>
          {/* 可以确认 */}
          {/* <div className="review">Review</div> */}
          {/* 链接钱包 */}
          {/* <div className="link_wallet">Connect Wallet</div> */}
        </div>
        <div className={showMore ? "more_info more_info_show" : "more_info"}>
          <div className="info_item">
            <span className="info_name">1 a = 5 b</span>
            <span className="info_value" onClick={() => setShowMore(!showMore)}>
              <span className="info_value_num">
                <Tooltip
                  title={exchangeTip}
                  trigger={["hover", "click"]}
                  color="white"
                  className={
                    showMore
                      ? "info_value_tip info_value_tip_hide"
                      : "info_value_tip"
                  }
                >
                  <img src={trade} alt="" className="trade_icon" />
                  <span>US$154</span>
                </Tooltip>
              </span>
              <img
                src={arrow}
                alt=""
                className={
                  showMore ? "arrow_icon arrow_icon_show" : "arrow_icon"
                }
              />
            </span>
          </div>
          <div className="info_item">
            <span className="info_name">
              <span>Fee (0.25%)</span>
            </span>
            <span className="info_value">
              <span className="info_value_text">0.006 1INCH</span>
            </span>
          </div>
          <div className="info_item">
            <span className="info_name">
              <span>Network cost</span>
            </span>
            <span className="info_value">
              <span className="info_value_text">$0.03</span>
            </span>
          </div>
          <div className="info_item">
            <span className="info_name">
              <span>Order routing</span>
            </span>
            <span className="info_value">
              <span className="info_value_text">Uniswap API</span>
            </span>
          </div>
          <div className="info_item">
            <span className="info_name">
              <span>Price impact</span>
            </span>
            <span className="info_value">-0.58%</span>
          </div>
          <div className="info_item">
            <span className="info_name">
              <span>Max slippage</span>
            </span>
            <span className="info_value">
              <span className="info_value_auto">Anto</span>
              <span className="info_value_text">1%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Swap;
