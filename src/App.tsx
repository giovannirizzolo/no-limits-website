import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Header />
            <HeroSection />
        </div>
    );
}

export default App;
