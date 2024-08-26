import { useState } from "react";
import "./home.scss";

import Masonry from "react-masonry-css";
import { Progress } from "antd";

export const Home = () => {
  // 瀑布流的不同宽度的列数
  const breakpointColumnsObj = {
    default: 4,
    1000: 3,
    768: 2,
  };
  const [list, setList] = useState([
    {
      name: "Item 1",
      desc: "dkdkandsndkljands",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 2",
      desc: "hahsdahshdhhdsa",
      img: "https://picsum.photos/500",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 3",
      desc: "BTC, ETH, SOL, BASE, and more. Not Financial advice, always DYOR",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 4",
      desc: "The prophecy of SIMTRON token predicts that its market cap will reach $1 billion by October.With new social platforms and no website,the prophet needs no validation.Believe in the prophecy &amp; join us,or stay away if you don’t,Join the Prophecy family TG &amp; X",
      img: "https://picsum.photos/200",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 1",
      desc: "The prophecy of SIMTRON token predicts that its market cap will reach $1 billion by October.With new social platforms and no website,the prophet needs no validation.Believe in the prophecy &amp; join us,or stay away if you don’t,Join the Prophecy family TG &amp; XThe prophecy of SIMTRON token predicts that its market cap will reach $1 billion by October.With new social platforms and no website,the prophet needs no validation.Believe in the prophecy &amp; join us,or stay away if you don’t,Join the Prophecy family TG &amp; X",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 2",
      desc: "hahsdahshdhhdsa",
      img: "https://picsum.photos/400",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 3",
      desc: "Meet Welcome to Dog Wif Tron, Dive in, and enjoy the vibe. Here’s to making more great memories together! VC starts 09:00 UTC! The mascot of the Tron Network",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 4",
      desc: "hahsdahshdhhdsa",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 5",
      desc: "hahsdahshdhhdsa",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 1",
      desc: "dkdkandsndkljands",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 2",
      desc: "hahsdahshdhhdsa",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 3",
      desc: "BTC, ETH, SOL, BASE, and more. Not Financial advice, always DYOR",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 4",
      desc: "The prophecy of SIMTRON token predicts that its market cap will reach $1 billion by October.With new social platforms and no website,the prophet needs no validation.Believe in the prophecy &amp; join us,or stay away if you don’t,Join the Prophecy family TG &amp; X",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 1",
      desc: "The prophecy of SIMTRON token predicts that its market cap will reach $1 billion by October.With new social platforms and no website,the prophet needs no validation.Believe in the prophecy &amp; join us,or stay away if you don’t,Join the Prophecy family TG &amp; XThe prophecy of SIMTRON token predicts that its market cap will reach $1 billion by October.With new social platforms and no website,the prophet needs no validation.Believe in the prophecy &amp; join us,or stay away if you don’t,Join the Prophecy family TG &amp; X",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 2",
      desc: "hahsdahshdhhdsa",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 3",
      desc: "Meet Welcome to Dog Wif Tron, Dive in, and enjoy the vibe. Here’s to making more great memories together! VC starts 09:00 UTC! The mascot of the Tron Network",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 4",
      desc: "hahsdahshdhhdsa",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
    {
      name: "Item 5",
      desc: "hahsdahshdhhdsa",
      img: "https://picsum.photos/300",
      total: 10000,
      sold: 200,
      marketcap: 1000,
      increase: 10,
    },
  ]);

  return (
    <div className="home">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="list"
        columnClassName="list_column"
      >
        {list.map((item, i) => (
          <div key={i} className="list_item">
            <div className="img">
              <img src={item.img} alt="" />
              <div className="increase">+{item.increase}%</div>
            </div>
            <div className="info">
              <h1 className="name">{item.name}</h1>
              <p className="desc">{item.desc}</p>
              <div className="marketcap">
                <div className="price">
                  Marketcap:{item.marketcap}(
                  {(item.sold / item.total).toFixed(2)}%)
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
        ))}
      </Masonry>
    </div>
  );
};
export default Home;
