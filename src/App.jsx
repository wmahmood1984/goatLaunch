import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";

import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import 'react-multi-carousel/lib/styles.css';
import Add from "./components/Add";
import Sidebar from "./components/Sidebar";
function App() {
  const[selected,setSelected] = useState(0)

  return (
    <>  
    <ToastContainer/>
      <Sidebar selected={selected} setSelected={setSelected}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="add" element={<Add />}></Route>

      </Routes>
    </>
  );
}

export default App;
