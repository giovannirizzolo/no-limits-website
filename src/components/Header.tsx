import React from "react";
import HeaderCTA from "./HeaderCTA";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <nav className="relative container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Logo width={64} height={64} />
            <Navbar />
            <HeaderCTA />
          </div>
        </nav>
    );
};

export default Header;
