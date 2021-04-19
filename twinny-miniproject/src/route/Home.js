import React from "react";
import axios from "axios";
import { Navigation, Board } from "../component";

const Home = () => {
  axios
    .get("http://192.168.0.218:8080/read/all")
    // .get(
    //   "http://192.168.0.218:8080/read/pagination",
    //   { page: "1", linit: "5" },
    //   headers
    // )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  return (
    <div>
      <Navigation />
      <Board />
    </div>
  );
};

export default Home;
