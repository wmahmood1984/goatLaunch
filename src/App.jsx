import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-multi-carousel/lib/styles.css";
import Add from "./components/Add";
import Sidebar from "./components/Sidebar";
import Details from "./components/Details";
import { useWeb3React } from "@web3-react/core";
import { Buffer } from "buffer";
import Admin from "./components/Admin";

function App() {
  const { account } = useWeb3React();
  const [selected, setSelected] = useState(0);
  const siweSign = async (siweMessage) => {
    try {
      const from = "0xB17A69062b5B893017673C4C12ca52580DA941b5";
      const msg = `0x${Buffer.from(siweMessage, "utf8").toString("hex")}`;
      const sign = await window.ethereum // Or window.ethereum if you don't support EIP-6963.
        .request({
          method: "personal_sign",
          params: [msg, from],
        });
      siweResult.innerHTML = sign;
    } catch (err) {
      console.error(err);
      siweResult.innerHTML = `Error: ${err.message}`;
    }
  };

  const abc = async () => {
    const domain = window.location.host;
    const from = "0xB17A69062b5B893017673C4C12ca52580DA941b5";
    const siweMessage = `${domain} wants you to sign in with your Ethereum account:\n${from}\n\nI accept the MetaMask Terms of Service: https://community.metamask.io/tos\n\nURI: https://${domain}\nVersion: 1\nChain ID: 1\nNonce: 32891757\nIssued At: 2021-09-30T16:25:24.000Z`;
    siweSign(siweMessage);
  };

  return (
    //     <div>

    // <h4>Sign-In with Ethereum</h4>
    // <button type="button" onClick={abc}>Sign-In with Ethereum</button>
    // <p class="alert">Result:<span id="siweResult"></span></p>
    //     </div>
    <div>
      <ToastContainer />
      <Sidebar selected={selected} setSelected={setSelected} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="add"
          element={<Add selected={selected} setSelected={setSelected} />}
        ></Route>
        <Route path="adminpanel" element={<Admin />}></Route>
        <Route path="details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
