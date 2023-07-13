import React from "react";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

function SmallDevice(props) {
  return (
    <button className="btn-mobile-nav" onClick={props.onClick}>
      <SlMenu className="icon-mobile-nav" name="menu" />
      <VscChromeClose className="icon-mobile-nav" name="close" />
    </button>
  );
}

export default SmallDevice;
