import { useState } from "react";
import "./home.scss";

import Masonry from "react-masonry-css";
import ListItem from "@/components/ListItem";
import { Input, Select, Button, Spin } from "antd";
import { CloseOutlined, DownOutlined } from "@ant-design/icons";

import searchImg from "@/assets/home/search.svg";
import closureImg from "@/assets/home/closure.svg";

const { Search } = Input;
export const Home = () => {
  // 瀑布流的不同宽度的列数
  const breakpointColumnsObj = {
    default: 5,
    1200: 4,
    1000: 3,
    768: 2,
  };
  const data = [
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
  ];
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

  // 搜索
  const onSearch = (value) => {
    console.log("search", value);
  };

  // 选择器内容
  const options = [
    {
      value: "1",
      label: "Launched Time",
    },
    {
      value: "2",
      label: "Trading Volume",
    },
    {
      value: "3",
      label: "Market Cap",
    },
    {
      value: "4",
      label: "24H Price Increase",
    },
  ];

  // 选择器改变
  const handleChange = (value) => {
    console.log("select", value);
  };

  // 加载中
  const [loading, setLoading] = useState(false);
  // 更多按钮
  const moreButton = () => {
    setLoading(true);
    setTimeout(() => {
      setList([...list, ...data]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="home">
      <div className="home_header">
        <div className="home_header_search">
          <Search
            placeholder="Search for tokens"
            prefix={<img src={searchImg} />}
            allowClear={{
              clearIcon: <CloseOutlined style={{ color: "white" }} />,
            }}
            onSearch={onSearch}
            className="home_header_search_input"
          />
        </div>
        <div className="home_header_select">
          <Select
            defaultValue="1"
            onChange={handleChange}
            options={options}
            defaultOpen
            suffixIcon={<DownOutlined style={{ color: "white" }} />}
            className="home_header_select_input"
            popupClassName="home_header_select_popup"
          />
        </div>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="list"
        columnClassName="list_column"
      >
        {list.map((item, i) => (
          <ListItem item={item} key={i} />
        ))}
      </Masonry>
      <div className="home_more">
        {loading ? (
          <Spin />
        ) : (
          <Button
            type="primary"
            className="home_more_button"
            onClick={moreButton}
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};
export default Home;
