import React from "react";
import "./Grid.css";

export default function Grid(props) {
    return (<div className="grid" class="col-md-3">{props.children}</div>)
}