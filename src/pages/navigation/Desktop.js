import React from "react";

function Desktop(props) {
  return (
    <ul className="navigation_list">
      <li className="navigation_list_item">
        <a href="#home" onClick={props.onClick}>
          {" "}
          Home
        </a>
      </li>
      <li className="navigation_list_item">
        <a href="#section-meal" onClick={props.onClick}>
          New
        </a>
      </li>
      <li className="navigation_list_item">
        <a href="#section-meal" onClick={props.onClick}>
          Popular{" "}
        </a>
      </li>
      <li className="navigation_list_item">
        <a href="#home" onClick={props.onClick}>
          {" "}
          Trending
        </a>
      </li>
      <li className="navigation_list_item">
        <a href="#section-meal" onClick={props.onClick}>
          Categories{" "}
        </a>
      </li>
    </ul>
  );
}

export default Desktop;
