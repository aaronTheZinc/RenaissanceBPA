import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

export default function Button() {
  const history = useHistory();
  const toInfo = () => history.push("/info");
  return (
    <div>
      <button className='info-button' onClick={toInfo}>Info</button>
    </div>
  );
}
