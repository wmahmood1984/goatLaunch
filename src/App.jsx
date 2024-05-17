import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home1";
import Tokenomics from "./components/Tokenomics";
import Swap from "./components/Swap"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="tokenomics" element={<Tokenomics />}></Route>
        <Route path="swap" element={<Swap></Swap>}></Route>
      </Routes>
    </>
  );
}

export default App;
