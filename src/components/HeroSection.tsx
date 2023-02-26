import React from "react";

const HeroSection = () => {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse space-y-0 items-center px-6 mx-auto mt-10 md:flex-row md:space-y-0">
                <div className="flex flex-col space-y-12 mb-32 md:w-1/2">
                    <h1 className="font-bold text-4xl md:text-5xl text-center md:text-start">Il tuo benessere, la nostra priorità</h1>
                    <p className="max-w-sm text-center md:text-start">Vieni a riscoprire il vero valore del benessere. La NoLimits ti sta aspettando!</p>
                    <a href="#" className="baseline px-4 py-2 text-gray-300 border-solid border-2 border-yellow-500">Scopri di più</a>
                </div>
            </div>
            <div className="container flex flex-col"></div>
        </section>
    );
};

export default HeroSection;
