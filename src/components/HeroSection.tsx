import React from "react";

const heroImgSrc = 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
const HeroSection = () => {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse space-y-0 items-center px-6 mx-auto mt-10 md:flex-row md:space-y-0">
                <div className="flex flex-col space-y-12 mb-32 md:w-1/2">
                    <h1 className="font-bold text-4xl md:text-5xl text-center md:text-start">Il tuo benessere, la nostra priorità</h1>
                    <p className="max-w-sm text-center md:text-start">Vieni a riscoprire il vero valore del benessere. La NoLimits ti sta aspettando!</p>
                    <a href="#" className="baseline px-4 py-2 text-gray-300 border-solid border-2 border-yellow-500 hover:bg-opacity-30 hover:bg-slate-300 hover:text-yellow-500">Scopri di più</a>
                </div>
                <div className="md:w-1/2 rounded-md">
                    <img src={heroImgSrc} alt=""  />
                </div>
            </div>
            
        </section>
    );
};

export default HeroSection;
