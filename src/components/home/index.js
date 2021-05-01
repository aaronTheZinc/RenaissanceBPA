import React from "react";
import Header from "../header/index";
import "./index.css";
import Post from '../posts/index'
import Landing from '../landing/index'
import InfoButton from '../infoButton/infoButton'

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
      {/* <InfoButton/> */}
      <Router>
        <switch>
        <Route path='/' component={Landing}/>
      <Route path='/info' component={Post}/>
        </switch>
      </Router>
    </div>
  );
}
