import React from "react";
import Header from "../header/index";
import "./index.css";
import Post from '../posts/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header />
      <Router>
      <Route path='/' component={Post}/>
      <Route path='/info' component={Post}/>
      </Router>
    </div>
  );
}
