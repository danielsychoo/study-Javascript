import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigation, Board } from "../component";
import qs from "qs";

const Home = () => {
  const [boardContent, setBoardContent] = useState({
    content: [],
    currentPage: 1,
    count: 0,
  });

  useEffect(() => {
    axios
      .post(
        "http://192.168.0.218:8080/read/pagination",
        qs.stringify({ page: "1", limit: "10" })
      )
      .then((res) => {
        setBoardContent({
          content: res.data.items,
          currentPage: 1,
          count: res.data.total_count,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navigation />
      <Board data={boardContent} />
    </div>
  );
};

export default Home;
