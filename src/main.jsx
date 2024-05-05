import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <Web3ReactProvider getLibrary={getLibrary}>
        <App />
        </Web3ReactProvider></Router>
  
  </React.StrictMode>,
)
