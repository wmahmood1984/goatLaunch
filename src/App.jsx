import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";

import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import 'react-multi-carousel/lib/styles.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>  
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />}></Route>

      </Routes>
    </>
  );
}

export default App;
