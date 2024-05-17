import React, { useEffect, useRef, useState } from "react";
import "./Home1.css";
import { useWeb3React } from "@web3-react/core";
import { walletconnect, injected } from "../connectors/connectors";
import wc from "../assets/walletconnect-seeklogo.svg"




export default function Home() {




  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);
  const [isVisible11, setIsVisible11] = useState(false);
  const [isVisible12, setIsVisible12] = useState(false);
  const [isVisible13, setIsVisible13] = useState(false);
  const [isVisible14, setIsVisible14] = useState(false);
  const [sliderState, setSliderState] = useState(0);
  const [faqState, setFAQState] = useState(0);
  const [showModal,setShowModal] = useState(false)
 
  
  useEffect(() => {
    const handleScroll = () => {
      const brandArea = document.getElementById('style-lIcJX'); // Replace 'style-lIcJX' with the actual ID of your brand area element
      if (!isVisible && isElementInViewport(brandArea)) {
         setTimeout(() => {
          setIsVisible(true);
        }, 300);
      }

      const dividerArea = document.getElementById("style-dvooP")
      if(!isVisible2 && isElementInViewport(dividerArea)){
       setTimeout(() => {
         setIsVisible2(true)
       }, 400);
      }
 
      const mintingArea = document.getElementById("minting")
      if(!isVisible3 && isElementInViewport(dividerArea)){
       setTimeout(() => {
         setIsVisible3(true)
       }, 400);
      }

      const divider2 = document.getElementById("style-eZUyE")
      if(!isVisible4 && isElementInViewport(divider2)){
       setTimeout(() => {
         setIsVisible4(true)
       }, 400);
      }

      const divider3 = document.getElementById("style-67j2l")
      if(!isVisible5 && isElementInViewport(divider3)){
       setTimeout(() => {
         setIsVisible5(true)
       }, 400);
      }

      const divider4 = document.getElementById("style-vEXo7")
      if(!isVisible6 && isElementInViewport(divider4)){
       setTimeout(() => {
         setIsVisible6(true)
       }, 400);
      }

      const divider5 = document.getElementById("style-mH626")
      if(!isVisible7 && isElementInViewport(divider5)){
       setTimeout(() => {
         setIsVisible7(true)
       }, 400);
      }

      const divider6 = document.getElementById("style-bFDAd")
      if(!isVisible8 && isElementInViewport(divider6)){
       setTimeout(() => {
         setIsVisible8(true)
       }, 400);
      }
      const divider7 = document.getElementById("style-EUZig")
      if(!isVisible9 && isElementInViewport(divider7)){
       setTimeout(() => {
         setIsVisible9(true)
       }, 400);
      }

      const divider8 = document.getElementById("style-m5n7U")
      if(!isVisible10 && isElementInViewport(divider8)){
       setTimeout(() => {
         setIsVisible10(true)
       }, 400);
      }

      const divider9 = document.getElementById("style-jGYIo")
      if(!isVisible11 && isElementInViewport(divider9)){
       setTimeout(() => {
         setIsVisible11(true)
       }, 400);
      }

      const divider10 = document.getElementById("style-58aeG")
      if(!isVisible12 && isElementInViewport(divider10)){
       setTimeout(() => {
         setIsVisible12(true)
       }, 400);
      }

      const divider11 = document.getElementById("style-mvDDl")
      if(!isVisible13 && isElementInViewport(divider11)){
       setTimeout(() => {
         setIsVisible13(true)
       }, 400);
      }

      const divider12 = document.getElementById("style-eqSEz")
      if(!isVisible14 && isElementInViewport(divider12)){
       setTimeout(() => {
         setIsVisible14(true)
       }, 400);
      }
      
      
    };



    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible,isVisible2,isVisible3,isVisible4,isVisible5,isVisible6,isVisible7,isVisible8,isVisible9,isVisible10,isVisible11]);

  // Function to check if element is in viewport
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };




  return (
    <div

      className=
      {`home page-template page-template-elementor_header_footer page page-id-24 wp-embed-responsive no-sidebar elementor-default elementor-template-full-width elementor-kit-24416 elementor-page elementor-page-24 e--ua-blink e--ua-chrome e--ua-webkit snipcss-68ioz 
      ${showModal? "modal-open" :""}
      `}
      data-elementor-device-mode="desktop"
      cz-shortcut-listen="true"
      style={showModal ? {overflow: "hidden", paddingRight: "16px"}:{}}
    >
      <div className="darkmode-trigger ">
        <label className="modeSwitch">
          <input type="checkbox" 
          onClick={()=>{document.body.setAttribute('tg-theme', 'dark')}}
          />
          <span className="icon"></span>
        </label>
      </div>
      <header>
        <div id="sticky-header" className="tg-header__area transparent-header">
          <div className="container">
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
                          <a
                            href="https://web3.edulabs.ai/"
                            aria-current="page"
                          >
                            Home
                          </a>
                        </li>
                        <li
                          id="menu-item-24477"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24477"
                        >
                          <a href="/tokenomics">
                            Tokenomics
                          </a>
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
                        <w3m-button 
                        balance="hide"
                        />
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
      <main 

      className="fix">
        <div className="gradient-position ">
          <img
            src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/others/gradient-circle.svg"
            width="500"
            alt="Background Circle"
            id="style-h9I23"
            className="style-h9I23"
          />
          <img
            src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/others/gradient-circle.svg"
            width="500"
            alt="Background Circle"
            id="style-Jlohn"
            className="style-Jlohn"
          />
        </div>
        <div

          data-elementor-type="wp-page"
          data-elementor-id="24"
          className="elementor elementor-24"
          data-elementor-post-type="page"
        >
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-3a06ec7 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="3a06ec7"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-045d5be"
                data-id="045d5be"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap"></div>
              </div>
            </div>
          </section>
          <section

            className="elementor-section elementor-top-section elementor-element elementor-element-4956fbe elementor-section-full_width elementor-section-height-default"
            data-id="4956fbe"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div

                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cd51e57"
                data-id="cd51e57"
                data-element_type="column"
              >
                <div 

                className="elementor-widget-wrap elementor-element-populated">
                  <div

                    className="elementor-element elementor-element-e0f2df0 elementor-widget elementor-widget-hero-banner"
                    data-id="e0f2df0"
                    data-element_type="widget"
                    data-widget_type="hero-banner.default"
                  >
                    <div 

                    className="elementor-widget-container">
                      <section

                        id="home"
                        className="banner-area banner-padding tg-section position-relative"
                      >
                        <div className="banner__background-wrap">
                          <div
                            className="background style-cIhzi"
                            style={{
                                backgroundImage: `url(${'https://web3.edulabs.ai/wp-content/uploads/2022/12/gradient_bg01.png'})`}}

                            data-background="https://web3.edulabs.ai/wp-content/uploads/2022/12/gradient_bg01.png"
                            id="style-cIhzi"
                          ></div>
                        </div>
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-6">
                              <div

                                className="banner__content"
                                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                                id="style-J5LIM"
                              >
                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/ethereum-01.png"
                                  width="44"
                                  alt=""
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                                  id="style-M5JAX"
                                  className="style-M5JAX"
                                />
                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-01.png"
                                  width="16"
                                  alt=""
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;"
                                  id="style-9UxKv"
                                  className="style-9UxKv"
                                />
                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-03.png"
                                  width="24"
                                  alt=""
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
                                  id="style-4QzrH"
                                  className="style-4QzrH"
                                />
                                <h2 
                                
                                className="title"
                                style={{fontWeight:"900px"}}
                                >
                                  Web 3.0 <br/>Student-Centric Tool
                                </h2>
                                <p className="desc">
                                  An educational productivity tool designed for
                                  collaboration and efficiency, powered by Web3
                                  technology for secure authentication,
                                  transparency, and tailored learning
                                  experiences.
                                </p>
                                <a
                                  href="http://edulabs.ai/#signup"
                                  target="_blank"
                                  rel="nofollow"
                                  className="banner__btn btn gradient-btn"
                                >
                                  <span>Get Started</span>{" "}
                                  <i className="unicon-arrow-right"></i>
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div style={{}}
                                className="banner__images style-awVcR"
                                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
                                id="style-awVcR"
                              >
                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/bitcoin-01.png"
                                  width="44"
                                  className="shape style-oU7oJ"
                                  alt=""
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 460;"
                                  id="style-oU7oJ"
                                />
                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/x.png"
                                  width="28"
                                  className="shape style-jJtK3"
                                  alt=""
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 480;"
                                  id="style-jJtK3"
                                />
                                <img
                                  decoding="async"
                                  className="shape dashed-line has-active-light style-vioDK"
                                  width="300"
                                  src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/others/blob-dashed.svg"
                                  alt="Blog dashed"
                                  id="style-vioDK"
                                />
                                <img
                                  decoding="async"
                                  className="shape dashed-line has-active-dark style-SwzRh"
                                  width="300"
                                  src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/others/blob-dashed-light.svg"
                                  alt="Blog dashed"
                                  id="style-SwzRh"
                                />
                                <svg
                                  style={{opacity:"0.3",left:"0px",top:"-77"  }}
                                  className="shape"
                                  viewBox="0 0 200 200"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="#F796FF"
                                    d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z"
                                    transform="translate(100 100)"
                                  ></path>
                                </svg>
                                <div className="banner__images-grid">
                                  <div className="left">
                                    <img
                                      decoding="async"
                                      src="https://web3.edulabs.ai/wp-content/uploads/2022/12/art_09.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="right">
                                    <img
                                      decoding="async"
                                      src="https://web3.edulabs.ai/wp-content/uploads/2022/12/art_06.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <a
                                  href="https://web3.edulabs.ai/"
                                  target="_blank"
                                  rel="nofollow"
                                  className="tg-circle-text"
                                >
                                  <svg
                                    className="tg-circle-text-path tg-animation-spin"
                                    viewBox="0 0 100 100"
                                    width="120"
                                    height="120"
                                  >
                                    <defs>
                                      <path
                                        id="circle"
                                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                      ></path>
                                    </defs>
                                    <text font-size="11.75px">
                                      <textPath 
                                      style={{}}
                                      xlink:href="#circle">
                                        view in web3 • view in web3 •
                                      </textPath>
                                    </text>
                                  </svg>
                                  <i className="unicon-arrow-up-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            
            className="elementor-section elementor-top-section elementor-element elementor-element-fbdf678 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="fbdf678"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6616061"
                data-id="6616061"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-82ba7b8 elementor-widget elementor-widget-brand"
                    data-id="82ba7b8"
                    data-element_type="widget"
                    data-widget_type="brand.default"
                  >
                    <div className="elementor-widget-container">
                      <div
                        className={`brand-area ${isVisible ? 'visible' : ''}`}
                        //className="brand-area style-lIcJX"
                        data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
                        id="style-lIcJX"
                      >
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-xl-10 col-12">
                              <h6 
                              
                              className="brand__title">
                                POWERED BY AMAZING PARTNERS:
                              </h6>
                              <div className="brand__list">
                                <div className="brand__item">
                                  <a href="#">
                                    <img
                                      decoding="async"
                                      src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-01.svg"
                                      className="has-active-light"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      decoding="async"
                                      src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-light-01.svg"
                                      className="has-active-dark"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="brand__item">
                                  <a href="#">
                                    <img
                                      decoding="async"
                                      src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-02.svg"
                                      className="has-active-light"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      decoding="async"
                                      src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-light-02.svg"
                                      className="has-active-dark"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="brand__item">
                                  <a href="#">
                                    <img
                                      decoding="async"
                                      src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-03.svg"
                                      className="has-active-light"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      decoding="async"
                                      src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-light-03.svg"
                                      className="has-active-dark"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="brand__item">
                                  <a href="#">
                                    <img
                                      decoding="async"
                                      src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-04.svg"
                                      className="has-active-light"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      decoding="async"
                                      src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-light-04.svg"
                                      className="has-active-dark"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="brand__item">
                                  <a href="#">
                                    <img
                                      decoding="async"
                                      src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-05.svg"
                                      className="has-active-light"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      decoding="async"
                                      src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-light-05.svg"
                                      className="has-active-dark"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-61ba82e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="61ba82e"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-36c28aa"
                data-id="36c28aa"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-a90de43 elementor-widget elementor-widget-tg-separator"
                    data-id="a90de43"
                    data-element_type="widget"
                    data-widget_type="tg-separator.default"
                  >
                    <div className="elementor-widget-container">
                      <div
                        className={`section-divider style-dvooP ${isVisible2? "visible" : ""}`}
                        data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                        id="style-dvooP"
                      >
                        <img
                          decoding="async"
                          src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className={`elementor-section elementor-top-section elementor-element elementor-element-acaa241 elementor-section-full_width elementor-section-height-default elementor-section-height-default`}
            data-id="acaa241"
            data-element_type="section"
            id="minting"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e9b5133"
                data-id="e9b5133"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-6ccf568 elementor-widget elementor-widget-features"
                    data-id="6ccf568"
                    data-element_type="widget"
                    data-widget_type="features.default"
                  >
                    <div className="elementor-widget-container">
                      <section 
                      className={`mint-area  ${isVisible3? "visible":""}`} >
                        <div className="container">
                          <div
                            className="row justify-content-center style-nLQQO"
                            data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
                            id="style-nLQQO"
                          >
                            <div className="col-xl-8 col-lg-10">
                              <div className="section__title text-center title-mb-80">
                                <h2 className="title">How It Works</h2>
                                <p className="desc">
                                  Edulabs is made to make you more efficient and
                                  productive.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                             className={`mint__lits-wrapper  ${isVisible3? "visible":""}`} 

                            data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
                          >
                            <img
                              decoding="async"
                              className="shape style-yXmib"
                              width="16"
                              src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-01.png"
                              alt=""
                              id="style-yXmib"
                            />
                            <img
                              decoding="async"
                              className="shape style-CmlyD"
                              width="28"
                              src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-02.png"
                              alt=""
                              id="style-CmlyD"
                            />
                            <img
                              decoding="async"
                              className="shape style-Y6sY2"
                              width="24"
                              src="https://web3.edulabs.ai/wp-content/uploads/2022/12/x.png"
                              alt=""
                              id="style-Y6sY2"
                            />
                            <div
                              className="row justify-content-center style-xOQgU"
                              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);"
                              id="style-xOQgU"
                            >
                              <div className="col-md-6 col-sm-9">
                                <div className="mint__item">
                                  <div className="mint__icon">
                                    <img
                                      decoding="async"
                                      className="light"
                                      src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-01.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="mint__content">
                                    <h2 className="title">Study Goals</h2>
                                    <p className="desc">
                                      Set your study goals with this app and
                                      track your progress efficiently.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-9">
                                <div className="mint__item">
                                  <div className="mint__icon">
                                    <img
                                      decoding="async"
                                      className="light"
                                      src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-02.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="mint__content">
                                    <h2 className="title">Manage Assignments</h2>
                                    <p className="desc">
                                      Manage assignments Create documents.
                                      Collaborate with others.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-9">
                                <div className="mint__item">
                                  <div className="mint__icon">
                                    <img
                                      decoding="async"
                                      className="light"
                                      src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-03.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="mint__content">
                                    <h2 className="title">Task Management</h2>
                                    <p className="desc">
                                      Manage your tasks and get things done with
                                      amazing to-do lists.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-9">
                                <div className="mint__item">
                                  <div className="mint__icon">
                                    <img
                                      decoding="async"
                                      className="light"
                                      src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-04.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="mint__content">
                                    <h2 className="title">Study Notes</h2>
                                    <p className="desc">
                                      Take amazing study notes. Share with
                                      classmates. Export as PDF.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-4f9e22e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="4f9e22e"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2a09d4d"
                data-id="2a09d4d"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-98fedc9 elementor-widget elementor-widget-tg-separator"
                    data-id="98fedc9"
                    data-element_type="widget"
                    data-widget_type="tg-separator.default"
                  >
                    <div className="elementor-widget-container">
                      <div
                        className={`section-divider style-eZUyE ${isVisible4? "visible" : ""}`}
                        data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                        id="style-eZUyE"
                      >
                        <img
                          decoding="async"
                          src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-f728a46 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="f728a46"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5541007"
                data-id="5541007"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-8694488 elementor-widget elementor-widget-tp-fact"
                    data-id="8694488"
                    data-element_type="widget"
                    data-widget_type="tp-fact.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="fact-area">
                        <div className="container">
                          <div className="fact__items-wrap position-relative">
                            <img
                              decoding="async"
                              //className={`shape style-OAvpT ${isVisible5?"visible":""}`}
                              src="https://web3.edulabs.ai/wp-content/uploads/2022/12/bitcoin-01.png"
                              width="32"
                              alt=""
                              data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;"
                              id="style-OAvpT"
                            />
                            <img
                              decoding="async"
                              //className={`shape style-DtWqF ${isVisible5?"visible":""}`}

                              src="https://web3.edulabs.ai/wp-content/uploads/2022/12/ethereum-01.png"
                              width="24"
                              alt=""
                              data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;"
                              id="style-DtWqF"
                            />
                            <div
                              className="row justify-content-center"
                              data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);"
                            >
                              <div
                                className={`col-lg-4 col-md-6 col-sm-8 style-67j2l ${isVisible5?"visible":""}`}
                                id="style-67j2l"
                              >
                                <div className="fact__item text-center">
                                  <h2 
                                  className="fact__count tg-text-gradient"
                                  >
                                    4,000+
                                  </h2>
                                  <span className="meta">Users Connected</span>
                                </div>
                              </div>
                              <div
                                className={`col-lg-4 col-md-6 col-sm-8 style-67j2l ${isVisible5?"visible":""}`}

                                id="style-67j2l"
                              >
                                <div className="fact__item text-center">
                                  <h2 className="fact__count tg-text-gradient">
                                    20,000+
                                  </h2>
                                  <span className="meta">
                                    Tasks Recorded every 5 mins.
                                  </span>
                                </div>
                              </div>
                              <div

                                className={`col-lg-4 col-md-6 col-sm-8 style-67j2l ${isVisible5?"visible":""}`}
                                id="style-67j2l"
                              >
                                <div className="fact__item text-center">
                                  <h2 className="fact__count tg-text-gradient">
                                    2.5x
                                  </h2>
                                  <span className="meta">
                                    Estimated Value Back to Users
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-a5fab69 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="a5fab69"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-789c964"
                data-id="789c964"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-f78a15a elementor-widget elementor-widget-tg-separator"
                    data-id="f78a15a"
                    data-element_type="widget"
                    data-widget_type="tg-separator.default"
                  >
                    <div className="elementor-widget-container">
                      <div
                        className={`section-divider style-vEXo7 ${isVisible6? "visible":""}`}
                        data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                        id="style-vEXo7"
                      >
                        <img
                          decoding="async"
                          src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-5b441aa elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="5b441aa"
            data-element_type="section"
            id="about"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e127129"
                data-id="e127129"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-d87ac7a elementor-widget elementor-widget-about"
                    data-id="d87ac7a"
                    data-element_type="widget"
                    data-widget_type="about.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="about-area">
                        <div className="container">
                          <div
                            className={`row justify-content-center style-mH626 ${isVisible7 ? "visible":""}`}
                            data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                            id="style-mH626"
                          >
                            <div className="col-xl-8 col-lg-10">
                              <div className="section__title text-center title-mb-80">
                                <h2 className="title">About the platform</h2>
                              </div>
                            </div>
                          </div>
                          <div className="about__row-reverse">
                            <div className="row align-items-center">
                              <div className="col-lg-6">
                                <div
                                  className={`about__img style-rvQmG ${isVisible7 ? "visible":""}`}
                                  data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
                                  id="style-rvQmG"
                                >
                                  <img
                                    decoding="async"
                                    src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-03.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div
                                className={`about__content style-Gom4l ${isVisible7 ? "visible":""}`}
                                  
                                  data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                                  id="style-Gom4l"
                                >
                                  <div className="section__title text-start">
                                    <span className="sub-title tg-text-gradient">
                                      OpenAI
                                    </span>
                                    <h2 className="title">
                                      AI is your friend, not your enemy
                                    </h2>
                                  </div>
                                  <p>
                                    Study efficiently by leveraging a
                                    cutting-edge AI integrated productivity
                                    Software!
                                  </p>
                                  <div className="about__facts-list">
                                    <div className="about__fact-item">
                                      <h3 className="count">4,500+</h3>
                                      <p>Assignments Completed</p>
                                    </div>
                                    <div className="about__fact-item">
                                      <h3 className="count">2.5x</h3>
                                      <p>Estimated User Interaction Value</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-lg-6">
                                <div
                                  className={`about__img style-bFDAd ${isVisible8?"visible":""}`}
                                  data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 200;"
                                  id="style-bFDAd"
                                >
                                  <img
                                    decoding="async"
                                    src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-02.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div
                                 className={`about__content style-K6gPX ${isVisible8?"visible":""}`}
                                  
                                  data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 300;"
                                  id="style-K6gPX"
                                >
                                  <div className="section__title text-start">
                                    <span className="sub-title tg-text-gradient">
                                      productivity suite:
                                    </span>
                                    <h2 className="title">
                                      Tools and apps for learners
                                    </h2>
                                  </div>
                                  <p>
                                    Explore the functionalities of Edulabs, your
                                    comprehensive Web3-enabled edtech platform
                                    featuring an AI tutor for optimized learning
                                    and streamlined task management. Simplify
                                    assignments, enhance collaboration, and
                                    leverage AI for enhanced productivity.
                                  </p>
                                  <div className="about__facts-list">
                                    <div className="about__icon-box">
                                      <div className="icon">
                                        <i
                                          aria-hidden="true"
                                          className="tp unicon-select-02"
                                        ></i>
                                      </div>
                                      <p>
                                        Works everywhere, (PC, tablet, or
                                        mobile).
                                      </p>
                                    </div>
                                    <div className="about__icon-box">
                                      <div className="icon">
                                        <i
                                          aria-hidden="true"
                                          className="tp unicon-select-window"
                                        ></i>
                                      </div>
                                      <p>
                                        No software to install. No updates to
                                        install. No hassle.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-d9c3e5b elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="d9c3e5b"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-871835b"
                data-id="871835b"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-4550010 elementor-widget elementor-widget-tg-separator"
                    data-id="4550010"
                    data-element_type="widget"
                    data-widget_type="tg-separator.default"
                  >
                    <div className="elementor-widget-container">
                      <div
                        className={`section-divider style-EUZig ${isVisible9? "visible":""}`}
                        data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                        id="style-EUZig"
                      >
                        <img
                          decoding="async"
                          src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-ba1394c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="ba1394c"
            data-element_type="section"
            id="roadmap"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3204e3c"
                data-id="3204e3c"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-bced05e elementor-widget elementor-widget-roadmap"
                    data-id="bced05e"
                    data-element_type="widget"
                    data-widget_type="roadmap.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="roadmap-area">
                        <div className="container">
                          <div
                            className={`row justify-content-center style-m5n7U ${isVisible10?"visible":""}`}
                            data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                            id="style-m5n7U"
                          >
                            <div className="col-xl-8 col-lg-10">
                              <div className="section__title text-center title-mb-75">
                                <h2 className="title">Edulabs's Roadmap</h2>
                              </div>
                            </div>
                          </div>
                          <div
                           
                            className={`roadmap__wrapper style-jGYIo ${isVisible11?"visible":""}`}
                            data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
                            id="style-jGYIo"
                          >
                            <div 
                            className="swiper roadmap__active swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                            >
                              <div
                                className={`swiper-wrapper swiper-wrapper${sliderState}`}
                                data-anime="targets: > * > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -400; delay: anime.stagger(200);"
                                id="swiper-wrapper-747bd286d24e1eb9"
                                aria-live="polite"
                              >
                                <div
                                  className="swiper-slide swiper-slide-active style-troIY"
                                  role="group"
                                  aria-label="1 / 4"
                                  id="style-troIY"
                                >
                                  <div
                                  className={`roadmap__card style-Yl7Sq ${isVisible11?"visible":""}`}

                                    id="style-Yl7Sq"
                                  >
                                    <div className="roadmap__percent">
                                      <span>0</span>%
                                    </div>
                                    <div className="roadmap__step">
                                      <span className="tg-text-gradient d-inline-flex">
                                        Phase 01
                                      </span>
                                    </div>
                                    <h3 className="roadmap__heading">Planning</h3>
                                    <ul className="roadmap__lists list-wrap">
                                      <li>
                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>{" "}
                                        Public release of Discord, Web
                                      </li>
                                      <li>
                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>{" "}
                                        Telegram access
                                      </li>
                                      <li>
                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>{" "}
                                        Al chat for Educators and Students
                                        release
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="swiper-slide swiper-slide-next style-cyfCM"
                                  role="group"
                                  aria-label="2 / 4"
                                  id="style-cyfCM"
                                >
                                  <div
                                  className={`roadmap__card style-BY9rJ ${isVisible11?"visible":""}`}
                                    
                                    id="style-BY9rJ"
                                  >
                                    <div className="roadmap__percent">
                                      <span>25</span>%
                                    </div>
                                    <div className="roadmap__step">
                                      <span className="tg-text-gradient d-inline-flex">
                                        Phase 02
                                      </span>
                                    </div>
                                    <h3 className="roadmap__heading">
                                      $EDUX launch
                                    </h3>
                                    <ul className="roadmap__lists list-wrap">
                                      <li>
                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>{" "}
                                        Set up Learning dApp
                                      </li>
                                      <li>
                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>{" "}
                                        Develop web social platform &amp; build
                                        out community spaces
                                      </li>
                                      <li>
                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>{" "}
                                        New DEX listing
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="swiper-slide style-wozhe"
                                  role="group"
                                  aria-label="3 / 4"
                                  id="style-wozhe"
                                >
                                  <div
                                    className={`roadmap__card style-7olpZ ${isVisible11?"visible":""}`}
                                    id="style-7olpZ"
                                  >
                                    <div className="roadmap__percent">
                                      <span>50</span>%
                                    </div>
                                    <div className="roadmap__step">
                                      <span className="tg-text-gradient d-inline-flex">
                                        Phase 03
                                      </span>
                                    </div>
                                    <h3 className="roadmap__heading">
                                      Implementation
                                    </h3>
                                    <ul className="roadmap__lists list-wrap">
                                      <li>
                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>{" "}
                                        Implement Team Sharing measures
                                      </li>
                                      <li>
                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>{" "}
                                        Premium functionality public release
                                      </li>
                                      <li>
                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>{" "}
                                        New CEX Listings
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="swiper-slide style-57Gnc"
                                  role="group"
                                  aria-label="4 / 4"
                                  id="style-57Gnc"
                                >
                                  <div
                                   className={`roadmap__card style-pvoIm ${isVisible11?"visible":""}`}

                                    id="style-pvoIm"
                                  >
                                    <div className="roadmap__percent">
                                      <span>75</span>%
                                    </div>
                                    <div className="roadmap__step">
                                      <span className="tg-text-gradient d-inline-flex">
                                        Phase 04
                                      </span>
                                    </div>
                                    <h3 className="roadmap__heading">
                                      Beta Release
                                    </h3>
                                    <ul className="roadmap__lists list-wrap">
                                      <li>
                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>{" "}
                                        Community marketplace Beta
                                      </li>
                                      <li>
                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>{" "}
                                        Animation full release for educators
                                      </li>
                                      <li>
                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>{" "}
                                        New partner integrations
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <span
                                className="swiper-notification"
                                aria-live="assertive"
                                aria-atomic="true"
                              ></span>
                            </div>
                            <div className="tg-swiper-scrollbar swiper-pagination-progressbar swiper-pagination-horizontal">
                              <span
                                className={`swiper-pagination-progressbar-fill style-c3h58${sliderState}`}
                                id="style-c3h58"
                              ></span>
                            </div>
                            <a
                              onClick={()=>{
                                if(sliderState>0){
                                  setSliderState(sliderState-1)
                                }

                              }}
                              aria-label="Previous slide"
                              
                              className={`tg-swiper-prev ${sliderState===0 ? "swiper-button-disabled" : ""}`}
                              tabindex="-1"
                              role="button"
                              aria-controls="swiper-wrapper-747bd286d24e1eb9"
                              aria-disabled={sliderState===0}
                            >
                              <i className="fas fa-chevron-left"></i>
                            </a>
                            <a
                              onClick={()=>{
                                if(sliderState<3){
                                  setSliderState(sliderState+1)
                                }

                              }}
                              aria-label="Next slide"
                              className={`tg-swiper-next ${sliderState===3 ? "swiper-button-disabled" : ""}`}
                              
                              tabindex="0"
                              role="button"
                              aria-controls="swiper-wrapper-747bd286d24e1eb9"
                              aria-disabled={sliderState===3}
                            >
                              <i className="fas fa-chevron-right"></i>
                            </a>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>          
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-a2596a3 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="a2596a3"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bce6512"
                data-id="bce6512"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-8a51db3 elementor-widget elementor-widget-tg-separator"
                    data-id="8a51db3"
                    data-element_type="widget"
                    data-widget_type="tg-separator.default"
                  >
                    <div className="elementor-widget-container">
                      <div
                        className={`section-divider style-gVrl1 ${isVisible12? "visible":""}`}
                        data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                        id="style-gVrl1"
                      >
                        <img
                          decoding="async"
                          src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-2b524a05 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="2b524a05"
            data-element_type="section"
            data-settings='{"background_background":"classic"}'
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2f411145"
                data-id="2f411145"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-7498eab elementor-widget elementor-widget-price-table"
                    data-id="7498eab"
                    data-element_type="widget"
                    data-widget_type="price-table.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-price-table">
                        <div className="elementor-price-table__header">
                          <h3 className="elementor-price-table__heading">
                            {" "}
                            Starter{" "}
                          </h3>
                          <span className="elementor-price-table__subheading">
                            {" "}
                            Free Trial{" "}
                          </span>
                        </div>
                        <div className="elementor-price-table__price">
                          <span className="elementor-price-table__currency">$</span>{" "}
                          <span className="elementor-price-table__integer-part">
                            {" "}
                            0{" "}
                          </span>
                        </div>
                        <ul className="elementor-price-table__features-list">
                          <li className="elementor-repeater-item-ef37df0">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> Create &amp; Share Spreadsheets </span>
                            </div>
                          </li>
                          <li className="elementor-repeater-item-f5295c0">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> Address and Contact Book </span>
                            </div>
                          </li>
                          <li className="elementor-repeater-item-0258802">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> Calendar Integration </span>
                            </div>
                          </li>
                          <li className="elementor-repeater-item-56490a8">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> AI Tutor </span>
                            </div>
                          </li>
                          <li className="elementor-repeater-item-bd1ea38">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> Image Editor </span>
                            </div>
                          </li>
                        </ul>
                        <div className="elementor-price-table__footer">
                          <a
                            className="elementor-price-table__button elementor-button elementor-size-md elementor-animation-grow"
                            href="#"
                          >
                            {" "}
                            Get Started{" "}
                          </a>
                        </div>
                      </div>
                      <div className="elementor-price-table__ribbon">
                        <div className="elementor-price-table__ribbon-inner">
                          {" "}
                          Free trial{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ae802d"
                data-id="ae802d"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-249d8784 elementor-widget elementor-widget-price-table"
                    data-id="249d8784"
                    data-element_type="widget"
                    data-widget_type="price-table.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-price-table">
                        <div className="elementor-price-table__header">
                          <h3 className="elementor-price-table__heading">
                            {" "}
                            Premium{" "}
                          </h3>
                          <span className="elementor-price-table__subheading">
                            {" "}
                            All access{" "}
                          </span>
                        </div>
                        <div className="elementor-price-table__price">
                          <span className="elementor-price-table__currency">$</span>{" "}
                          <span className="elementor-price-table__integer-part">
                            {" "}
                            19{" "}
                          </span>
                          <div className="elementor-price-table__after-price">
                            <span className="elementor-price-table__fractional-part">
                              {" "}
                              99{" "}
                            </span>
                            <span className="elementor-price-table__period elementor-typo-excluded">
                              Month
                            </span>
                          </div>
                        </div>
                        <ul className="elementor-price-table__features-list">
                          <li className="elementor-repeater-item-ef37df0">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> Unlimited Users </span>
                            </div>
                          </li>
                          <li className="elementor-repeater-item-631e16e">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> 10GB Storage </span>
                            </div>
                          </li>
                          <li className="elementor-repeater-item-6ea3da3">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> Create &amp; Share Documents </span>
                            </div>
                          </li>
                          <li className="elementor-repeater-item-62f2318">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> Create &amp; Share Spreadsheets </span>
                            </div>
                          </li>
                          <li className="elementor-repeater-item-b079460">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> Digital Asset Management </span>
                            </div>
                          </li>
                          <li className="elementor-repeater-item-b36f6d9">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> Quick Share </span>
                            </div>
                          </li>
                          <li className="elementor-repeater-item-80db985">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> Image Editor </span>
                            </div>
                          </li>
                          <li className="elementor-repeater-item-91ae734">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> Calendar </span>
                            </div>
                          </li>
                          <li className="elementor-repeater-item-378df87">
                            <div className="elementor-price-table__feature-inner">
                              <i className="" aria-hidden="true"></i>
                              <span> Address Book </span>
                            </div>
                          </li>
                        </ul>
                        <div className="elementor-price-table__footer">
                          <a
                            className="elementor-price-table__button elementor-button elementor-size-md elementor-animation-grow"
                            href="#"
                          >
                            {" "}
                            Get Started{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-301eeba elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="301eeba"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9e29b8a"
                data-id="9e29b8a"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-a9e5aa4 elementor-widget elementor-widget-tg-separator"
                    data-id="a9e5aa4"
                    data-element_type="widget"
                    data-widget_type="tg-separator.default"
                  >
                    <div className="elementor-widget-container">
                      <div
                        className={`section-divider style-58aeG ${isVisible12? "visible":""}`}
                        data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                        id="style-58aeG"
                      >
                        <img
                          decoding="async"
                          src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-9c9a94e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="9c9a94e"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-24c40e2"
                data-id="24c40e2"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-88d9e37 elementor-widget elementor-widget-tp-faq"
                    data-id="88d9e37"
                    data-element_type="widget"
                    data-widget_type="tp-faq.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="faq-area">
                        <div className="container">
                          <div
                            className={`row justify-content-center style-mvDDl ${isVisible13?"visible":""}`}
                            data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                            id="style-mvDDl"
                          >
                            <div className="col-xl-8 col-lg-10">
                              <div className="section__title text-center title-mb-75">
                                <h2 className="title">FAQs</h2>
                              </div>
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-xxl-7 col-xl-9 col-lg-10">
                              <div
                                className={`faq__wrapper style-SVpWC ${isVisible13?"visible":""}`}
                                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                                id="style-SVpWC"
                              >
                                <div className="accordion" id="accordionFaq">
                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="headingOne-0"
                                    >
                                      <button
                                        onClick={()=>{
                                          if(faqState==0){
                                            setFAQState(null)
                                          }else{
                                            setFAQState(0)}
                                          }

                                        }
                                        className={`accordion-button ${faqState==0?"":"collapsed"}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne-0"
                                        aria-expanded="true"
                                        aria-controls="collapseOne-0"
                                      >
                                        {" "}
                                        What is Binance Smart Chain, and how
                                        does it benefit EdTech platforms??{" "}
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseOne-0"
                                      className={`accordion-collapse collapse ${faqState===0?"show":""}`}
                                      aria-labelledby="headingOne-0"
                                      data-bs-parent="#accordionFaq"
                                    >
                                      <div className="accordion-body">
                                        <p>
                                          Binance Smart Chain is a blockchain
                                          network that supports smart contracts
                                          and decentralized applications
                                          (DApps), offering fast, low-cost
                                          transactions and scalability. In
                                          EdTech, BSC enables secure and
                                          transparent payment processing,
                                          tokenized rewards, and data
                                          immutability, enhancing user
                                          experiences and platform efficiency.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="headingOne-1"
                                    >
                                      <button
                                        onClick={()=>{
                                          if(faqState==1){
                                            setFAQState(null)
                                          }else{
                                            setFAQState(1)}
                                          }

                                        }
                                        className={`accordion-button ${faqState==1?"":"collapsed"}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne-1"
                                        aria-expanded="true"
                                        aria-controls="collapseOne-1"
                                      >
                                        {" "}
                                        What is Web3 Technology and how does it
                                        revolutionize the EdTech Space?{" "}
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseOne-1"
                                      className={`accordion-collapse collapse ${faqState===1?"show":""}`}
                                      aria-labelledby="headingOne-1"
                                      data-bs-parent="#accordionFaq"
                                    >
                                      <div className="accordion-body">
                                        <p>
                                          Web3 technology represents the
                                          decentralized web, emphasizing user
                                          ownership of data, transparent
                                          transactions, and enhanced security.
                                          In EdTech, Web3 enables personalized
                                          learning experiences, peer-to-peer
                                          interactions, and efficient content
                                          distribution, fostering innovation and
                                          collaboration.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="headingOne-2"
                                    >
                                      <button
                                        onClick={()=>{
                                          if(faqState==2){
                                            setFAQState(null)
                                          }else{
                                            setFAQState(2)}
                                          }

                                        }
                                        className={`accordion-button ${faqState==2?"":"collapsed"}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne-2"
                                        aria-expanded="true"
                                        aria-controls="collapseOne-2"
                                      >
                                        {" "}
                                        How does our platform utilize Web3
                                        principles to empower students and
                                        educators?{" "}
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseOne-2"
                                      className={`accordion-collapse collapse ${faqState===2?"show":""}`}
                                      aria-labelledby="headingOne-2"
                                      data-bs-parent="#accordionFaq"
                                    >
                                      <div className="accordion-body">
                                        <p>
                                          Our platform integrates Web3
                                          principles to offer decentralized
                                          identity management, data ownership,
                                          and peer-to-peer interactions.
                                          Students and educators can access
                                          secure and transparent learning
                                          environments, engage in collaborative
                                          projects, and benefit from tokenized
                                          incentives for active participation.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="headingOne-3"
                                    >
                                      <button
                                        onClick={()=>{
                                          if(faqState==3){
                                            setFAQState(null)
                                          }else{
                                            setFAQState(3)}
                                          }

                                        }
                                        className={`accordion-button ${faqState==3?"":"collapsed"}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne-3"
                                        aria-expanded="true"
                                        aria-controls="collapseOne-3"
                                      >
                                        {" "}
                                        Does our web3 platform support both
                                        traditional payment methods and
                                        blockchain transactions?{" "}
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseOne-3"
                                      className={`accordion-collapse collapse ${faqState===3?"show":""}`}
                                      aria-labelledby="headingOne-3"
                                      data-bs-parent="#accordionFaq"
                                    >
                                      <div className="accordion-body">
                                        <p>
                                          Yes, our platform supports both
                                          traditional payment methods and
                                          blockchain transactions. Users have
                                          the flexibility to choose between fiat
                                          currency payments and cryptocurrency
                                          transactions, ensuring accessibility
                                          and ease of use for all participants..
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="headingOne-4"
                                    >
                                      <button
                                        onClick={()=>{
                                          if(faqState==4){
                                            setFAQState(null)
                                          }else{
                                            setFAQState(4)}
                                          }

                                        }
                                        className={`accordion-button ${faqState==4?"":"collapsed"}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne-4"
                                        aria-expanded="true"
                                        aria-controls="collapseOne-4"
                                      >
                                        {" "}
                                        What role does Tokenization play in our
                                        Web3 EdTech Platform?{" "}
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseOne-4"
                                      className={`accordion-collapse collapse ${faqState===4?"show":""}`}
                                      aria-labelledby="headingOne-4"
                                      data-bs-parent="#accordionFaq"
                                    >
                                      <div className="accordion-body">
                                        <p>
                                          Tokenization on our platform enables
                                          users to earn tokens for completing
                                          tasks, contributing content, and
                                          engaging in educational activities.
                                          These tokens can be used for accessing
                                          premium features, participating in
                                          governance decisions, and unlocking
                                          rewards, enhancing user engagement and
                                          loyalty.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="headingOne-5"
                                    >
                                      <button
                                        onClick={()=>{
                                          if(faqState==5){
                                            setFAQState(null)
                                          }else{
                                            setFAQState(5)}
                                          }

                                        }
                                        className={`accordion-button ${faqState==5?"":"collapsed"}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne-5"
                                        aria-expanded="true"
                                        aria-controls="collapseOne-5"
                                      >
                                        {" "}
                                        How does our platform ensure data
                                        privacy policy?{" "}
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseOne-5"
                                      className={`accordion-collapse collapse ${faqState===5?"show":""}`}
                                      aria-labelledby="headingOne-5"
                                      data-bs-parent="#accordionFaq"
                                    >
                                      <div className="accordion-body">
                                        <p>
                                          Our platform employs advanced
                                          encryption, decentralized storage
                                          solutions, and strict data privacy
                                          policies to protect user data. Web3
                                          principles such as decentralized
                                          identity management and encrypted
                                          communication ensure that user
                                          information remains secure and private
                                          at all times.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-b660c28 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="b660c28"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-67ce644"
                data-id="67ce644"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-8069a0f elementor-widget elementor-widget-tg-separator"
                    data-id="8069a0f"
                    data-element_type="widget"
                    data-widget_type="tg-separator.default"
                  >
                    <div className="elementor-widget-container">
                      <div
                        className={`section-divider style-eqSEz ${isVisible14? "visible":""}`}
                        data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                        id="style-eqSEz"
                      >
                        <img
                          decoding="async"
                          src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-199f5ed elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="199f5ed"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-78b175c"
                data-id="78b175c"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-4265c51 elementor-widget elementor-widget-tp-cta"
                    data-id="4265c51"
                    data-element_type="widget"
                    data-widget_type="tp-cta.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="cta-area">
                        <div
                          className="cta-bg style-8HNFi"
                          data-background="https://web3.edulabs.ai/wp-content/uploads/2022/12/collection_cta.png"
                          id="style-8HNFi"
                        ></div>
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                              <div className="cta__content text-center">
                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-01.png"
                                  width="24"
                                  alt=""
                                  id="style-cMgZG"
                                  className="style-cMgZG"
                                />
                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/bitcoin-01.png"
                                  width="48"
                                  alt=""
                                  id="style-TqEh4"
                                  className="style-TqEh4"
                                />
                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/ethereum-02.png"
                                  width="40"
                                  alt=""
                                  id="style-MAgtY"
                                  className="style-MAgtY"
                                />
                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/x.png"
                                  width="24"
                                  alt=""
                                  id="style-sTTDH"
                                  className="style-sTTDH"
                                />
                                <h2 className="title">Let's Get Started</h2>
                                <a
                                  href="http://edulabs.ai/app/login"
                                  target="_blank"
                                  rel="nofollow"
                                  className="btn gradient-btn"
                                >
                                  {" "}
                                  Join community{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-40fe03b elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="40fe03b"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1589518"
                data-id="1589518"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-6df5371 elementor-widget elementor-widget-tg-separator"
                    data-id="6df5371"
                    data-element_type="widget"
                    data-widget_type="tg-separator.default"
                  >
                    <div className="elementor-widget-container">
                      <div
                        className={`"section-divider style-IHCWU ${isVisible14?"visible":""}`}
                        data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                        id="style-IHCWU"
                      >
                        <img
                          decoding="async"
                          src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-a1a4c99 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="a1a4c99"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-624e515"
                data-id="624e515"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-a77086b elementor-widget elementor-widget-tp-footer"
                    data-id="a77086b"
                    data-element_type="widget"
                    data-widget_type="tp-footer.default"
                  >
                    <div className="elementor-widget-container">
                      <footer className="footer-area section-py-80">
                        <div className="container">
                          <div className="footer__wrapper">
                            <img
                              decoding="async"
                              src="https://web3.edulabs.ai/wp-content/uploads/2022/12/ethereum-01.png"
                              width="32"
                              alt=""
                              id="style-jMxon"
                              className="style-jMxon"
                            />
                            <img
                              decoding="async"
                              src="https://web3.edulabs.ai/wp-content/uploads/2022/12/x.png"
                              width="16"
                              alt=""
                              id="style-mSCc6"
                              className="style-mSCc6"
                            />
                            <img
                              decoding="async"
                              src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-01.png"
                              width="16"
                              alt=""
                              id="style-tHpFU"
                              className="style-tHpFU"
                            />
                            <img
                              decoding="async"
                              src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-03.png"
                              width="24"
                              alt=""
                              id="style-1s5Ua"
                              className="style-1s5Ua"
                            />
                            <div className="row justify-content-center">
                              <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
                                <div className="footer__info text-center">
                                  <div className="footer-logo">
                                    <a href="https://web3.edulabs.ai/">
                                      <img
                                        decoding="async"
                                        src="https://web3.edulabs.ai/wp-content/uploads/2024/05/2.png"
                                        width="200"
                                        alt="Logo"
                                      />
                                    </a>
                                  </div>
                                  <p>
                                    Edulabs Web3.0 improves student
                                    productivity. It lets students set goals and
                                    achieve those efficiently through powerful
                                    set of features and tools.
                                  </p>
                                  <ul className="list-wrap footer__social">
                                    <li>
                                      <a href="#">
                                        <i className="fab fa-twitter"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fab fa-discord"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fab fa-instagram"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fab fa-telegram-plane"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="copyright__wrapper">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="copyright__text">
                                    <p>© 2024 Edulabs. All rights reserved.</p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="copyright__menu">
                                    <ul className="list-wrap">
                                      <li>
                                        <a href="http://edulabs.ai/privacy-policy">
                                          Privacy policy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="http://edulabs.ai/terms-of-service">
                                          Terms of use
                                        </a>
                                      </li>
                                      <li className="backTop">
                                        <a
                                          href="javascript:void(0)"
                                          className="scroll-to-target"
                                          data-target="html"
                                        >
                                          <i className="flaticon-arrowhead-up"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <link
        rel="stylesheet"
        id="e-animations-css"
        href="https://web3.edulabs.ai/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.21.4"
        type="text/css"
        media="all"
      />
      <span id="elementor-device-mode" className="elementor-screen-only"></span>
      <svg style={{ display: "none" }} className="e-font-icon-svg-symbols"></svg>
      <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
        <section id="shadow-host-companion"></section>
      </div>

      <div
        className="snipcss-modal snipcss-micromodal-slide"
        id="modal-pick-resolution"
      ></div>
      <div
        className="edge_builder edge_builder_top style-6ZFFX"
        id="style-6ZFFX"
      ></div>
      <div
        className="edge_builder edge_builder_right style-DmNBo"
        id="style-DmNBo"
      ></div>
      <div
        className="edge_builder edge_builder_bottom style-SBFJJ"
        id="style-SBFJJ"
      ></div>
      <div
        className="edge_builder edge_builder_left style-ETp72"
        id="style-ETp72"
      ></div>
      <div
        className="edge_builder2 edge_builder_top style-GBDzs"
        id="style-GBDzs"
      ></div>
      <div
        className="edge_builder2 edge_builder_right style-MlsT3"
        id="style-MlsT3"
      ></div>
      <div
        className="edge_builder2 edge_builder_bottom style-UhQdF"
        id="style-UhQdF"
      ></div>
      <div
        className="edge_builder2 edge_builder_left style-cfdH6"
        id="style-cfdH6"
      ></div>
      <div data-tether-id="1" id="style-sPxze" className="style-sPxze"></div>
      <canvas
        width="70"
        height="70"
        id="snipcss-kiwi"
        className="style-fwIYW"
      ></canvas>
      {showModal && <div class="modal-backdrop fade show"></div>}
    </div>
  );
}
