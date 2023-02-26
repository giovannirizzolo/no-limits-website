import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Values from "./components/Values";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Header />
            <HeroSection />
            <Values />
        </div>
    );
}

export default App;