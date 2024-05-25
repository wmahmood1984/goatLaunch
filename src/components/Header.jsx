import React, { useState } from 'react'
import "./Home1.css"
import { Link } from 'react-router-dom'
import wc from "../assets/walletconnect-seeklogo.svg"
import { useWeb3React } from '@web3-react/core'
import { injected } from '../connectors/connectors'

export default function Header() {
    const [showModal,setShowModal] = useState(false)
    const {activate,deactivate,account,library} = useWeb3React()
  return (
<header>
        <div id="sticky-header" className="tg-header__area transparent-header">
          <div className="">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler">
                  <i className="flaticon-menu-1"></i>
                </div>
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <a className="light-logo" href="https://web3.edulabs.ai/">
                        <img
                          src="https://web3.edulabs.ai/wp-content/uploads/2024/05/1.png"
                          height="auto"
                          style={{ maxWidth: "120px" }}
                          alt="Logo"
                        />
                      </a>
                      <a className="dark-logo" href="https://web3.edulabs.ai/">
                        <img
                          src="https://web3.edulabs.ai/wp-content/uploads/2024/05/2.png"
                          height="auto"
                          style={{ maxWidth: "120px" }}
                          alt="Logo"
                        />
                      </a>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                      <ul id="menu-blog-page-menu" className="navigation">
                        <li
                          id="menu-item-90"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-24 current_page_item menu-item-90"
                        >
                          <Link to="/">
                            Home
                          </Link>
                        </li>
                        <li
                          id="menu-item-24477"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24477"
                        >
                          <Link to="/tokenomics">
                            Tokenomics
                          </Link>
                        </li>
                        <li
                          id="menu-item-24477"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24477"
                        >
                          <Link to="/marketplace">
                            Explore NFTs
                          </Link>
                        </li>
                        <li
                          id="menu-item-24477"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24477"
                        >
                          <Link to="/mint">
                            Mint NFT
                          </Link>
                        </li>
                        <li
                          id="menu-item-91"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-91"
                        >
                          <a>Minting</a>
                        </li>
                        <li
                          id="menu-item-92"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-92"
                        >
                          <a>About</a>
                        </li>
                        <li
                          id="menu-item-93"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-93"
                        >
                          <a>Collection</a>
                        </li>
                        <li
                          id="menu-item-94"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-94"
                        >
                          <a>Roadmap</a>
                        </li>
                        <li
                          id="menu-item-89"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89"
                        >
                          <a href="https://web3.edulabs.ai/?page_id=34">Blog</a>
                        </li>
                      </ul>
                    </div>
                    <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="header-social">
                          <a href="#" className="d-none d-sm-block">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-telegram"></i>
                          </a>
                          <a
                            href="#"
                            className="d-blcok d-xl-none"
                            data-bs-toggle="modal"
                            data-bs-target="#connectModal"
                          >
                            <i className="fas fa-wallet"></i>
                          </a>
                        </li>
                        <li className="header-btn">
                         
                        <button 
                        onClick={()=>{setShowModal(true)}}
                        className="btn border-btn " data-bs-toggle="modal" data-bs-target="#connectModal">{account ? `${account.slice(0,5)}...${account.slice(-4)}` : "Connect Wallet"}</button>
                        
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="tgmobile__menu">
                  <nav className="tgmobile__menu-box">
                    <div className="close-btn">
                      <i className="flaticon-close-1"></i>
                    </div>
                    <div className="nav-logo">
                      <a className="light-logo" href="https://web3.edulabs.ai/">
                        <img
                          src="https://web3.edulabs.ai/wp-content/uploads/2024/05/1.png"
                          height="auto"
                          style={{ maxWidth: "120px" }}
                          alt="Logo"
                        />
                      </a>
                      <a className="dark-logo" href="https://web3.edulabs.ai/">
                        <img
                          src="https://web3.edulabs.ai/wp-content/uploads/2024/05/2.png"
                          height="auto"
                          style={{ maxWidth: "120px" }}
                          alt="Logo"
                        />
                      </a>
                    </div>
                    <div className="tgmobile__menu-outer">
                      <ul id="menu-blog-page-menu-1" className="navigation">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-24 current_page_item menu-item-90">
                          <a
                            href="https://web3.edulabs.ai/"
                            aria-current="page"
                          >
                            Home
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24477">
                          <a href="https://web3.edulabs.ai/?page_id=30">
                            Tokenomics
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-91">
                          <a>Minting</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-92">
                          <a>About</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-93">
                          <a>Collection</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-94">
                          <a>Roadmap</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89">
                          <a href="https://web3.edulabs.ai/?page_id=34">Blog</a>
                        </li>
                      </ul>
                    </div>
                    <div className="social-links">
                      <ul className="clearfix">
                        <li className="facebook">
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="instagram">
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="discord">
                          <a href="#">
                            <i className="fab fa-discord"></i>
                          </a>
                        </li>
                        <li className="telegram">
                          <a href="#">
                            <i className="fab fa-telegram-plane"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="tgmobile__menu-backdrop"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="connect__modal">
          <div
            className={`modal fade ${showModal? "show":""}`}
            id="connectModal"
            tabindex="-1"
            aria-hidden="true"
            style={showModal? {display:"block"}:{}}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal__wrapper">
                  <div className="modal__header">
                    <h2 className="title">Connect Wallet</h2>
                    <button 
                    onClick={()=>{setShowModal(false)}}
                    data-bs-dismiss="modal" aria-label="Close">
                      <i className="flaticon-close-1"></i>
                    </button>
                  </div>
                  <div className="modal__body text-center">
                    <p>
                      Please select a wallet to connect for start Minting your
                      eduLab
                    </p>
                    <div className="connect__section">
                      <ul className="list-wrap">
                        <li>
                          <a 
                          onClick={()=>{
                            activate(injected)
                            setShowModal(false)
                          }}
                          className="connect-meta">
                            <img
                              src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/icons/metamask.svg"
                              alt="MetaMask"
                            />
                            MetaMask
                          </a>
                        </li>
                        <li>
                          <a 
                          onClick={()=>{
                            activate(walletconnect)
                            setShowModal(false)
                          }}
                          className="connect-meta">
                            <img
                              
                              src={wc}
                              alt="MetaMask"
                            />
                            Wallet Connect
                          </a>
                        </li>
                        {/* <li>
                          <a href="#">
                            <img
                              src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/icons/bitgo.svg"
                              alt="BitGo"
                            />
                            BitGo
                          </a>
                        </li> */}
                        {/* <li>
                          <a href="#">
                            <img
                              src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/icons/trust.svg"
                              alt="Trust"
                            />
                            Trust Wallet
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/icons/coinbase.svg"
                              alt="Coinbase"
                            />
                            Coinbase
                          </a>
                        </li> */}
                      </ul>
                    </div>
                    <p className="privacy-text">
                      By connecting your wallet, you agree to our Terms of
                      Service and our Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}
