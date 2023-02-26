import React, { Component } from "react";
import logo from "../assets/vitruvian.svg";

type LogoType = {
    width: number;
    height: number;
};
const Logo: React.FC<LogoType> = ({ width, height }) => {
    return (
        <div>
            <img src={logo} alt="NoLimits logo" width={width} height={height} />
        </div>
    );
};

export default Logo;
