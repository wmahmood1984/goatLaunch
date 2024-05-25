import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home1";
import Tokenomics from "./components/Tokenomics";
// import Swap from "./components/Swap"
import Upload from "./components/Upload";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Marketplace from "./components/Marketplace";
import Details from "./components/Details";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>  
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="tokenomics" element={<Tokenomics />}></Route>
        {/* <Route path="swap" element={<Swap></Swap>}></Route> */}
        <Route path="mint" element={<Upload />}></Route>
        <Route path="marketplace" element={<Marketplace />}></Route>
        <Route path="details/:id" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App;
