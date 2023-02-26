import React, { Component } from "react";

type TValueCard = {
    icon: React.ReactNode,
    title: string,
    description: string
}
const ValueCard: React.FC<TValueCard> = ({icon, title, description}) => {
    return (
        <div className="container flex flex-col p-6 rounded-xl items-center space-y-6 bg-neutral-900 shadow-lg shadow-bg-neutral-900/50">
            {icon}
            <h3 className="text-2xl text-white font-bold">{title}</h3>
            <p className="text-white text-center">{description}</p>
        </div>
    );
};

export default ValueCard;
