import React from "react";
import Header from "../header/index";
import "./index.css";
import Post from '../posts/index'

export default function Home() {
  return (
    <div>
      <Header />
      <Post />
    </div>
  );
}
