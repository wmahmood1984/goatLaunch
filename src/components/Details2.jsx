import React, { useEffect, useState } from "react";
import "./Details.css";
import { useWeb3React } from "@web3-react/core";
import {
  BUSD,
  ERC721ABI,
  ERC721Address,
  defaultRpc,
  defualtChain,
  tokenAbi,
} from "../config";
import Web3 from "web3";
import axios from "axios";
import { Contract, ethers } from "ethers";
import { writeFunction } from "./writeFun";

export const getContract = (library, account, add, abi) => {
  const signer = library?.getSigner(account).connectUnchecked();
  var contract = new Contract(add, abi, signer);
  return contract;
};

export default function Details2({ id }) {
  const { account, library, chainId } = useWeb3React();
  const contractW = getContract(library, account, ERC721Address, ERC721ABI);
  const BUSDW = getContract(library, account, BUSD, tokenAbi);
  const wchain = chainId ? chainId : defualtChain;
  const web3 = new Web3(new Web3.providers.HttpProvider(defaultRpc));
  const ERC721ContractR = new web3.eth.Contract(ERC721ABI, ERC721Address);
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);
  const [image, setImage] = useState("");
  const [uri, setUri] = useState("");
  const [admin, setAdmin] = useState("");
  const [AFS, setAFS] = useState(true);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const abc = async () => {
      const _data = await ERC721ContractR.methods.getArray().call();

      setData(_data[id]);
      setAFS(_data[id].AFS);
      setPrice(ethers.utils.formatEther(_data[id].price));
      const _admin = await ERC721ContractR.methods.admin().call();

      setAdmin(_admin);

      const _image = await axios.get(_data[id][4]);
      setImage(_image.data.image);
      setUri(_image.data);
    };
    abc();
  }, [toggle]);

  console.log("details", data);

  return (
    data &&
    image &&
    uri && (
      <div className="containers">
        <div className="rows" style={{ border: "none" }}>
          <div className="pic">
            <img style={{ position: "relative" }} className="" src={image} />
          </div>
          <div className="info">
            <h3>Detail information</h3>
            <br />
            <div className="infoDetails">
              <div className="detailsRow">Name: {uri.name}</div>
              <div className="detailsRow">Description: {uri.description}</div>
              {admin && admin == account ? (
                <div className="detailsRow">
                  Price:{" "}
                  <input
                    style={{width:"70%",marginLeft:"5px",border:"none",borderBottom:"1px solid black", outline:"none"}}
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>
              ) : (
                <div className="detailsRow">
                  Price: {ethers.utils.formatEther(data.price)}
                </div>
              )}
              <div className="detailsRow">
                Owner: {`${data.owner.slice(0, 4)}...${data.owner.slice(-5)}`}
              </div>

              <div className="detailsRow">
                Availabel for Sale: {AFS? "Yes":"No"}
              </div>
            </div>
            {admin && admin == account ? (
              <div>
                <br />
                <button
                  onClick={() => {
                    writeFunction(
                      "Change price",
                      contractW,
                      "changePrice",
                      () => {
                        setToggle(false);
                      },
                      () => {
                        setToggle(false);
                      },
                      setToggle,
                      id,
                      ethers.utils.parseEther(price.toString()),
                      { gasLimit: 300000 }
                    );
                  }}
                  style={{
                    padding: "0px",
                    height: "30px",
                    cursor: "pointer",
                    color: "white",
                    width: "150px",
                    margin: "auto",
                    marginTop: "10px",
                    textAlign: "center",
                    border: "none",
                  }}
                  class="banner__btn gradient-btn gradient-btn-2"
                >
                  Change Price
                </button>

                <br />
                {AFS ? 
                    <button
                  onClick={() => {
                    writeFunction(
                      "Remove from sale",
                      contractW,
                      "notToSale",
                      () => {
                        setToggle(false);
                        
                      },
                      () => {
                        setToggle(false);
                      },
                      setToggle,
                      id,
                      { gasLimit: 300000 }
                    );
                  }}
                  style={{
                    padding: "0px",
                    height: "30px",
                    cursor: "pointer",
                    color: "white",
                    width: "150px",
                    margin: "auto",
                    marginTop: "10px",
                    textAlign: "center",
                    border: "none",
                    fontSize: "15px",
                  }}
                  class="banner__btn gradient-btn gradient-btn-2"
                >
                  remove from Sale
                </button>:<button
                  onClick={() => {
                    writeFunction(
                      "Put on Sale",
                      contractW,
                      "putToSale",
                      () => {
                        setToggle(false);
                       
                      },
                      () => {
                        setToggle(false);
                      },
                      setToggle,
                      id,
                      
                      { gasLimit: 300000 }
                    );
                  }}
                  style={{
                    padding: "0px",
                    height: "30px",
                    cursor: "pointer",
                    color: "white",
                    width: "150px",
                    margin: "auto",
                    marginTop: "10px",
                    textAlign: "center",
                    border: "none",
                    fontSize: "15px",
                  }}
                  class="banner__btn gradient-btn gradient-btn-2"
                >
                  Put on Sale
                </button>
                }
                
              </div>
            ) : (
              <div>
                <br />
                <button
                  onClick={() => {
                    writeFunction(
                      "Approve",
                      BUSDW,
                      "approve",
                      () => {
                        setToggle(false);
                        writeFunction(
                          "Purchase",
                          contractW,
                          "purchaseOnly",
                          () => {
                            setToggle(false);
                          },
                          () => {
                            setToggle(false);
                          },
                          setToggle,
                          id,

                          { gasLimit: 300000 }
                        );
                      },
                      () => {
                        setToggle(false);
                      },
                      setToggle,
                      ERC721Address,
                      data[3],
                      { gasLimit: 300000 }
                    );
                  }}
                  style={{
                    padding: "0px",
                    height: "30px",
                    cursor: "pointer",
                    color: "white",
                    width: "150px",
                    margin: "auto",
                    marginTop: "10px",
                    textAlign: "center",
                    border: "none",
                  }}
                  class="banner__btn gradient-btn gradient-btn-2"
                >
                  Buy only
                </button>

                <br />
                <button
                  onClick={() => {
                    writeFunction(
                      "Approve",
                      BUSDW,
                      "approve",
                      () => {
                        setToggle(false);
                        writeFunction(
                          "Purchase",
                          contractW,
                          "purchaseAndAFS",
                          () => {
                            setToggle(false);
                          },
                          () => {
                            setToggle(false);
                          },
                          setToggle,
                          id,

                          { gasLimit: 300000 }
                        );
                      },
                      () => {
                        setToggle(false);
                      },
                      setToggle,
                      ERC721Address,
                      data[3],
                      { gasLimit: 300000 }
                    );
                  }}
                  style={{
                    padding: "0px",
                    height: "30px",
                    cursor: "pointer",
                    color: "white",
                    width: "150px",
                    margin: "auto",
                    marginTop: "10px",
                    textAlign: "center",
                    border: "none",
                    fontSize: "15px",
                  }}
                  class="banner__btn gradient-btn gradient-btn-2"
                >
                  Buy & Put for Sale
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}
