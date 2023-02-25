import React from "react";

type NavLink = {
    path: `/${string}`;
    name: string;
};

type TNavbar = {
    navElements: Array<NavLink>;
};

const navElements: Array<NavLink> = [
    { path: "/", name: "Home" },
    { path: "/the-team", name: "The Team" },
    { path: "/values", name: "Values" },
    { path: "/about-us", name: "About Us" },
];
const Navbar: React.FC<TNavbar> = () => {
    return (
        <div className="flex text-green">
            {navElements.map(({ path, name }, idx) => (
                <a key={`navEl-${idx}`}className="text-red hover:text-green" href={path}>{name}</a>
            ))}
        </div>
    );
};

export default Navbar;
