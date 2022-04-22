import React from "react";
import "./Examples.css";

export default function Examples(props) {
  if (props.examples) {
    return <div className="Example">{props.examples}</div>;
  } else {
    return null;
  }
}
