import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardComponent from "./components/CardComponent";

// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());

const App = () => {
  const [item, setItem] = useState(Array.from({ length: 10 }));
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios({
      url: "http://localhost:8080/data?page_count=" + page,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setItem(res.data.nodes);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  const fetchMoreData = () => {
    setPage(page + 1);
    console.log("fetchMoreData");
    axios({
      url: "http://localhost:8080/data?page_count=" + page,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setItem(item.concat(res.data.nodes));
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InfiniteScroll
        dataLength={item.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {item.map((i, index) => (
          <div
            style={{
              paddingLeft: "100px",
              paddingRight: "100px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <CardComponent content={i} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};
export default App;
