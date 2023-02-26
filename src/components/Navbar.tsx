import React, { useCallback } from "react";
import { ClassesObj, TailwindBreakpoint, TailwindModifier, TailwindThemeModifier } from "../types/tailwind.types";
import { mergeClasses, setStyles } from "../types/utils/tailwind.utils";

type NavLink = {
    path: `/${string}`;
    name: string;
};

const navElements: Array<NavLink> = [
    { path: "/", name: "Home" },
    { path: "/the-team", name: "Il Team" },
    { path: "/values", name: "I Valori" },
    { path: "/about-us", name: "Su di noi" },
];

const navLinkClassesObj: ClassesObj = {
    lg: ["dark:hover:bg-transparent", "dark:hover:text-white", "hover:text-primary-700", "hover:bg-transparent", "dark:hover:bg-transparent", "border-0", "p-0"],
    dark: ["text-gray-400", "hover:text-white", "border-gray-700", "hover:bg-gray-700"],
    hover: ["bg-gray-50"],
};

const Navbar = () => {
    return (
        <div className="hidden md:flex items-center">
            <ul className="flex font-medium lg:space-x-6">
                {navElements.map(({ path, name }, idx) => (
                    <li>
                        <a key={`navEl-${idx}`} className={`block py-2 pr-4 pl-3 text-gray-700 border-gray-100 ${setStyles(navLinkClassesObj)}`} href={path}>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
