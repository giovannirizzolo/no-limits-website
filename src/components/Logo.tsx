import React, { Component } from "react";
import logo from "../assets/vitruvian.svg";

type LogoType = {
    width: number,
    height: number
}
const Logo: React.FC<LogoType> = ({width, height}) => {
    return <img src={logo} alt="" width={width} height={height} />;
};

export default Logo;