import React, { useEffect } from 'react'
import "./Home2.css"

export default function Home2({setDarkTheme,darkTheme}) {
    console.log("second",darkTheme)
    useEffect(()=>{
        document.body.setAttribute('tg-theme', 'dark')
    },[])
  return (
    <div className="
    
    home page-template page-template-elementor_header_footer page page-id-24 wp-embed-responsive no-sidebar elementor-default elementor-template-full-width elementor-kit-24416 elementor-page elementor-page-24 e--ua-blink e--ua-chrome e--ua-webkit  snipcss-FIMzJ" data-elementor-device-mode="desktop" cz-shortcut-listen="true">
    <div className="darkmode-trigger ">
        <label className="modeSwitch ">
            <input 
            onClick={()=>{
                document.body.removeAttribute('tg-theme')
            
            }}
            type="checkbox" className=""/>
            <span className="icon "></span>
        </label>
    </div>
    <header className="">
        <div id="sticky-header" className="tg-header__area transparent-header ">
            <div className="container ">
                <div className="row ">
                    <div className="col-12 ">
                        <div className="mobile-nav-toggler "><i className="flaticon-menu-1 "></i></div>
                        <div className="tgmenu__wrap ">
                            <nav className="tgmenu__nav ">
                                <div className="logo ">
                                    <a className="light-logo " href="https://web3.edulabs.ai/">
                                        <img src="https://web3.edulabs.ai/wp-content/uploads/2024/05/1.png" height="auto" style={{maxWidth: "120px"}} alt="Logo" className=""/>
                                    </a>
                                    <a className="dark-logo " href="https://web3.edulabs.ai/">
                                        <img src="https://web3.edulabs.ai/wp-content/uploads/2024/05/2.png" height="auto" style={{maxWidth: "120px"}} alt="Logo" className=""/>
                                    </a>
                                </div>
                                <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex ">
                                    <ul id="menu-blog-page-menu" className="navigation ">
                                        <li id="menu-item-90" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-24 current_page_item menu-item-90 "><a href="https://web3.edulabs.ai/" aria-current="page" className="">Home</a></li>
                                        <li id="menu-item-24477" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24477 "><a href="https://web3.edulabs.ai/?page_id=30" className="">Tokenomics</a></li>
                                        <li id="menu-item-91" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-91 "><a className="">Minting</a></li>
                                        <li id="menu-item-92" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-92 "><a className="">About</a></li>
                                        <li id="menu-item-93" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-93 "><a className="">Collection</a></li>
                                        <li id="menu-item-94" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-94 "><a className="">Roadmap</a></li>
                                        <li id="menu-item-89" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89 "><a href="https://web3.edulabs.ai/?page_id=34" className="">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="tgmenu__action ">
                                    <ul className="list-wrap ">
                                        <li className="header-social ">
                                            <a href="#" className="d-none d-sm-block "><i className="fab fa-twitter "></i></a>
                                            <a href="#" className=""><i className="fab fa-telegram "></i></a>
                                            <a href="#" className="d-blcok d-xl-none " data-bs-toggle="modal" data-bs-target="#connectModal"><i className="fas fa-wallet "></i></a>
                                        </li>
                                        <li className="header-btn "><button className="btn border-btn " data-bs-toggle="modal" data-bs-target="#connectModal">Connect wallet</button></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="tgmobile__menu ">
                            <nav className="tgmobile__menu-box ">
                                <div className="close-btn "><i className="flaticon-close-1 "></i></div>
                                <div className="nav-logo ">
                                    <a className="light-logo " href="https://web3.edulabs.ai/">
                                        <img src="https://web3.edulabs.ai/wp-content/uploads/2024/05/1.png" height="auto" style={{maxWidth: "120px"}} alt="Logo" className=""/>
                                    </a>
                                    <a className="dark-logo " href="https://web3.edulabs.ai/">
                                        <img src="https://web3.edulabs.ai/wp-content/uploads/2024/05/2.png" height="auto" style={{maxWidth: "120px"}} alt="Logo" className=""/>
                                    </a>
                                </div>
                                <div className="tgmobile__menu-outer ">
                                    <ul id="menu-blog-page-menu-1" className="navigation ">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-24 current_page_item menu-item-90 "><a href="https://web3.edulabs.ai/" aria-current="page" className="">Home</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24477 "><a href="https://web3.edulabs.ai/?page_id=30" className="">Tokenomics</a></li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-91 "><a className="">Minting</a></li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-92 "><a className="">About</a></li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-93 "><a className="">Collection</a></li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-94 "><a className="">Roadmap</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89 "><a href="https://web3.edulabs.ai/?page_id=34" className="">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="social-links ">
                                    <ul className="clearfix ">
                                        <li className="facebook ">
                                            <a href="#" className=""><i className="fab fa-facebook-f "></i></a>
                                        </li>
                                        <li className="twitter ">
                                            <a href="#" className=""><i className="fab fa-twitter "></i></a>
                                        </li>
                                        <li className="instagram ">
                                            <a href="#" className=""><i className="fab fa-instagram "></i></a>
                                        </li>
                                        <li className="discord ">
                                            <a href="#" className=""><i className="fab fa-discord "></i></a>
                                        </li>
                                        <li className="telegram ">
                                            <a href="#" className=""><i className="fab fa-telegram-plane "></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="tgmobile__menu-backdrop "></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="connect__modal ">
            <div className="modal fade " id="connectModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content ">
                        <div className="modal__wrapper ">
                            <div className="modal__header ">
                                <h2 className="title ">Connect Wallet</h2>
                                <button data-bs-dismiss="modal" aria-label="Close" className="">
                                    <i className="flaticon-close-1 "></i>
                                </button>
                            </div>
                            <div className="modal__body text-center ">
                                <p className="">Please select a wallet to connect for start Minting your eduLab</p>
                                <div className="connect__section ">
                                    <ul className="list-wrap ">
                                        <li className="">
                                            <a href="#" className="connect-meta "><img src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/icons/metamask.svg" alt="MetaMask" className=""/>MetaMask</a>
                                        </li>
                                        <li className="">
                                            <a href="#" className=""><img src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/icons/bitgo.svg" alt="BitGo" className=""/>BitGo</a>
                                        </li>
                                        <li className="">
                                            <a href="#" className=""><img src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/icons/trust.svg" alt="Trust" className=""/>Trust Wallet</a>
                                        </li>
                                        <li className="">
                                            <a href="#" className=""><img src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/icons/coinbase.svg" alt="Coinbase" className=""/>Coinbase</a>
                                        </li>
                                    </ul>
                                </div>
                                <p className="privacy-text ">By connecting your wallet, you agree to our Terms of Service and our Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main className="fix ">
        <div className="gradient-position ">
            <img src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/others/gradient-circle.svg" width="500" alt="Background Circle" className=" style-ej1SS" id="style-ej1SS"/>
            <img src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/others/gradient-circle.svg" width="500" alt="Background Circle" className=" style-GqCmz" id="style-GqCmz"/>
        </div>
        <div data-elementor-type="wp-page" data-elementor-id="24" className="elementor elementor-24 " data-elementor-post-type="page">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-3a06ec7 elementor-section-full_width elementor-section-height-default " data-id="3a06ec7" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-045d5be " data-id="045d5be" data-element_type="column">
                        <div className="elementor-widget-wrap ">
                        </div>
                    </div>
                </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-4956fbe elementor-section-full_width elementor-section-height-default " data-id="4956fbe" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cd51e57 " data-id="cd51e57" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated 127-128">
                            <div className="elementor-element elementor-element-e0f2df0 elementor-widget elementor-widget-hero-banner " data-id="e0f2df0" data-element_type="widget" data-widget_type="hero-banner.default">
                                <div className="elementor-widget-container ">
                                    <section id="home" className="banner-area banner-padding tg-section position-relative ">
                                        <div className="banner__background-wrap ">
                                            <div className="background  style-IZbST" data-background="https://web3.edulabs.ai/wp-content/uploads/2022/12/gradient_bg01.png" id="style-IZbST"></div>
                                        </div>
                                        <div className="container ">
                                            <div className="row ">
                                                <div className="col-lg-6 ">
                                                    <div className="banner__content tg-content  style-OwtdA" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;" id="style-OwtdA">
                                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/ethereum-01.png" width="44" alt="" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" className=" style-G8LQy" id="style-G8LQy"/>
                                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-01.png" width="16" alt="" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;" className=" style-qV4Bo" id="style-qV4Bo"/>
                                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-03.png" width="24" alt="" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;" className=" style-bg6nT" id="style-bg6nT"/>
                                                        <h2 className="title ">Web 3.0 Student-Centric Tool</h2>
                                                        <p className="desc ">An educational productivity tool designed for collaboration and efficiency, powered by Web3 technology for secure authentication, transparency, and tailored learning experiences.</p>
                                                        <a href="http://edulabs.ai/#signup" target="_blank" rel="nofollow" className="banner__btn btn gradient-btn ">
                                                            <span className="">Get Started</span> <i className="unicon-arrow-right "></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 ">
                                                    <div className="banner__images  style-1RWws" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;" id="style-1RWws">
                                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/bitcoin-01.png" width="44" className="shape  style-6A2KS" alt="" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 460;" id="style-6A2KS"/>
                                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/x.png" width="28" className="shape  style-9cEFx" alt="" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 480;" id="style-9cEFx"/>
                                                        <img decoding="async" className="shape dashed-line has-active-light  style-N9AEX" width="300" src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/others/blob-dashed.svg" alt="Blog dashed" id="style-N9AEX"/>
                                                        <img decoding="async" className="shape dashed-line has-active-dark  style-UemUB" width="300" src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/others/blob-dashed-light.svg" alt="Blog dashed" id="style-UemUB"/>
                                                        <svg style={{top: "-17%", opacity: ".3"}} className="shape " viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#F796FF" d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z" transform="translate(100 100)">
                                                            </path>
                                                        </svg>
                                                        <div className="banner__images-grid ">
                                                            <div className="left "><img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/art_09.jpg" alt="" className=""/></div>
                                                            <div className="right "><img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/art_06.jpg" alt="" className=""/></div>
                                                        </div>
                                                        <a href="https://web3.edulabs.ai/" target="_blank" rel="nofollow" className="tg-circle-text ">
                                                            <svg className="tg-circle-text-path tg-animation-spin " viewBox="0 0 100 100" width="120" height="120">
                                                                <defs className="">
                                                                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0">
                                                                    </path>
                                                                </defs>
                                                                <text font-size="11.75" className="">
                                                                    <textPath xlink:href="#circle" className="">view in web3 • view in web3 •</textPath>
                                                                </text>
                                                            </svg>
                                                            <i className="unicon-arrow-up-right "></i>
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
            <section className="elementor-section elementor-top-section elementor-element elementor-element-fbdf678 elementor-section-full_width elementor-section-height-default " data-id="fbdf678" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6616061 " data-id="6616061" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-82ba7b8 elementor-widget elementor-widget-brand " data-id="82ba7b8" data-element_type="widget" data-widget_type="brand.default">
                                <div className="elementor-widget-container ">
                                    <div className="brand-area  style-KPbW2" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;" id="style-KPbW2">
                                        <div className="container ">
                                            <div className="row justify-content-center ">
                                                <div className="col-xl-10 col-12 ">
                                                    <h6 className="brand__title ">POWERED BY AMAZING PARTNERS:</h6>
                                                    <div className="brand__list ">
                                                        <div className="brand__item ">
                                                            <a href="#" className=""><img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-01.svg" className="has-active-light " alt=""/></a>
                                                            <a href="#" className=""><img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-light-01.svg" className="has-active-dark " alt=""/></a>
                                                        </div>
                                                        <div className="brand__item ">
                                                            <a href="#" className=""><img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-02.svg" className="has-active-light " alt=""/></a>
                                                            <a href="#" className=""><img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-light-02.svg" className="has-active-dark " alt=""/></a>
                                                        </div>
                                                        <div className="brand__item ">
                                                            <a href="#" className=""><img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-03.svg" className="has-active-light " alt=""/></a>
                                                            <a href="#" className=""><img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-light-03.svg" className="has-active-dark " alt=""/></a>
                                                        </div>
                                                        <div className="brand__item ">
                                                            <a href="#" className=""><img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-04.svg" className="has-active-light " alt=""/></a>
                                                            <a href="#" className=""><img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-light-04.svg" className="has-active-dark " alt=""/></a>
                                                        </div>
                                                        <div className="brand__item ">
                                                            <a href="#" className=""><img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-05.svg" className="has-active-light " alt=""/></a>
                                                            <a href="#" className=""><img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/wallet-light-05.svg" className="has-active-dark " alt=""/></a>
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
            <section className="elementor-section elementor-top-section elementor-element elementor-element-61ba82e elementor-section-full_width elementor-section-height-default " data-id="61ba82e" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-36c28aa " data-id="36c28aa" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-a90de43 elementor-widget elementor-widget-tg-separator " data-id="a90de43" data-element_type="widget" data-widget_type="tg-separator.default">
                                <div className="elementor-widget-container ">
                                    <div className="section-divider  style-Tq55v" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" id="style-Tq55v">
                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg" alt="" className=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-acaa241 elementor-section-full_width elementor-section-height-default " data-id="acaa241" data-element_type="section" id="minting">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e9b5133 " data-id="e9b5133" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-6ccf568 elementor-widget elementor-widget-features " data-id="6ccf568" data-element_type="widget" data-widget_type="features.default">
                                <div className="elementor-widget-container ">
                                    <section className="mint-area ">
                                        <div className="container ">
                                            <div className="row justify-content-center  style-aoSV3" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;" id="style-aoSV3">
                                                <div className="col-xl-8 col-lg-10 ">
                                                    <div className="section__title text-center title-mb-80 ">
                                                        <h2 className="title ">How It Works</h2>
                                                        <p className="desc ">Edulabs is made to make you more efficient and productive.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mint__lits-wrapper " data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;">
                                                <img decoding="async" className="shape  style-4v3bH" width="16" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-01.png" alt="" id="style-4v3bH"/>
                                                <img decoding="async" className="shape  style-yUyQN" width="28" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-02.png" alt="" id="style-yUyQN"/>
                                                <img decoding="async" className="shape  style-h4wDJ" width="24" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/x.png" alt="" id="style-h4wDJ"/>
                                                <div className="row justify-content-center  style-5oHRf" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);" id="style-5oHRf">
                                                    <div className="col-md-6 col-sm-9 ">
                                                        <div className="mint__item ">
                                                            <div className="mint__icon ">
                                                                <img decoding="async" className="light " src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-01.png" alt=""/>
                                                            </div>
                                                            <div className="mint__content ">
                                                                <h2 className="title ">Study Goals</h2>
                                                                <p className="desc ">Set your study goals with this app and track your progress efficiently.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-9 ">
                                                        <div className="mint__item ">
                                                            <div className="mint__icon ">
                                                                <img decoding="async" className="light " src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-02.png" alt=""/>
                                                            </div>
                                                            <div className="mint__content ">
                                                                <h2 className="title ">Manage Assignments</h2>
                                                                <p className="desc ">Manage assignments Create documents. Collaborate with others.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-9 ">
                                                        <div className="mint__item ">
                                                            <div className="mint__icon ">
                                                                <img decoding="async" className="light " src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-03.png" alt=""/>
                                                            </div>
                                                            <div className="mint__content ">
                                                                <h2 className="title ">Task Management</h2>
                                                                <p className="desc ">Manage your tasks and get things done with amazing to-do lists.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-9 ">
                                                        <div className="mint__item ">
                                                            <div className="mint__icon ">
                                                                <img decoding="async" className="light " src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-04.png" alt=""/>
                                                            </div>
                                                            <div className="mint__content ">
                                                                <h2 className="title ">Study Notes</h2>
                                                                <p className="desc ">Take amazing study notes. Share with classmates. Export as PDF.</p>
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
            <section className="elementor-section elementor-top-section elementor-element elementor-element-4f9e22e elementor-section-full_width elementor-section-height-default " data-id="4f9e22e" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2a09d4d " data-id="2a09d4d" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-98fedc9 elementor-widget elementor-widget-tg-separator " data-id="98fedc9" data-element_type="widget" data-widget_type="tg-separator.default">
                                <div className="elementor-widget-container ">
                                    <div className="section-divider  style-7o3Nf" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" id="style-7o3Nf">
                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg" alt="" className=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-f728a46 elementor-section-full_width elementor-section-height-default " data-id="f728a46" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5541007 " data-id="5541007" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-8694488 elementor-widget elementor-widget-tp-fact " data-id="8694488" data-element_type="widget" data-widget_type="tp-fact.default">
                                <div className="elementor-widget-container ">
                                    <section className="fact-area ">
                                        <div className="container ">
                                            <div className="fact__items-wrap position-relative ">
                                                <img decoding="async" className="shape  style-2pln4" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/bitcoin-01.png" width="32" alt="" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;" id="style-2pln4"/>
                                                <img decoding="async" className="shape  style-zl2L2" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/ethereum-01.png" width="24" alt="" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;" id="style-zl2L2"/>
                                                <div className="row justify-content-center " data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);">
                                                    <div className="col-lg-4 col-md-6 col-sm-8  style-XPSah" id="style-XPSah">
                                                        <div className="fact__item text-center ">
                                                            <h2 className="fact__count tg-text-gradient ">4,000+</h2>
                                                            <span className="meta ">Users Connected</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-8  style-EQBL8" id="style-EQBL8">
                                                        <div className="fact__item text-center ">
                                                            <h2 className="fact__count tg-text-gradient ">20,000+</h2>
                                                            <span className="meta ">Tasks Recorded every 5 mins.</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-8  style-cFVmG" id="style-cFVmG">
                                                        <div className="fact__item text-center ">
                                                            <h2 className="fact__count tg-text-gradient ">2.5x</h2>
                                                            <span className="meta ">Estimated Value Back to Users</span>
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
            <section className="elementor-section elementor-top-section elementor-element elementor-element-a5fab69 elementor-section-full_width elementor-section-height-default " data-id="a5fab69" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-789c964 " data-id="789c964" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-f78a15a elementor-widget elementor-widget-tg-separator " data-id="f78a15a" data-element_type="widget" data-widget_type="tg-separator.default">
                                <div className="elementor-widget-container ">
                                    <div className="section-divider  style-miqpK" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" id="style-miqpK">
                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg" alt="" className=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-5b441aa elementor-section-full_width elementor-section-height-default " data-id="5b441aa" data-element_type="section" id="about">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e127129 " data-id="e127129" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-d87ac7a elementor-widget elementor-widget-about " data-id="d87ac7a" data-element_type="widget" data-widget_type="about.default">
                                <div className="elementor-widget-container ">
                                    <section className="about-area ">
                                        <div className="container ">
                                            <div className="row justify-content-center  style-b86IL" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;" id="style-b86IL">
                                                <div className="col-xl-8 col-lg-10 ">
                                                    <div className="section__title text-center title-mb-80 ">
                                                        <h2 className="title ">About the platform</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="about__row-reverse ">
                                                <div className="row align-items-center ">
                                                    <div className="col-lg-6 ">
                                                        <div className="about__img  style-QAY2S" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;" id="style-QAY2S">
                                                            <img decoding="async" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-03.png" alt="" className=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 ">
                                                        <div className="about__content  style-qxJbE" data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;" id="style-qxJbE">
                                                            <div className="section__title text-start ">
                                                                <span className="sub-title tg-text-gradient ">OpenAI</span>
                                                                <h2 className="title ">AI is your friend, not your enemy</h2>
                                                            </div>
                                                            <p className="">Study efficiently by leveraging a cutting-edge AI integrated productivity Software!</p>
                                                            <div className="about__facts-list ">
                                                                <div className="about__fact-item ">
                                                                    <h3 className="count ">4,500+</h3>
                                                                    <p className="">Assignments Completed</p>
                                                                </div>
                                                                <div className="about__fact-item ">
                                                                    <h3 className="count ">2.5x</h3>
                                                                    <p className="">Estimated User Interaction Value</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center ">
                                                    <div className="col-lg-6 ">
                                                        <div className="about__img  style-oDnl9" data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 200;" id="style-oDnl9">
                                                            <img decoding="async" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-02.png" alt="" className=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 ">
                                                        <div className="about__content  style-brExk" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 300;" id="style-brExk">
                                                            <div className="section__title text-start ">
                                                                <span className="sub-title tg-text-gradient ">productivity suite:</span>
                                                                <h2 className="title ">Tools and apps for learners</h2>
                                                            </div>
                                                            <p className="">Explore the functionalities of Edulabs, your comprehensive Web3-enabled edtech platform featuring an AI tutor for optimized learning and streamlined task management. Simplify assignments, enhance collaboration, and leverage AI for enhanced productivity.</p>
                                                            <div className="about__facts-list ">
                                                                <div className="about__icon-box ">
                                                                    <div className="icon ">
                                                                        <i aria-hidden="true" className="tp unicon-select-02 "></i>
                                                                    </div>
                                                                    <p className="">Works everywhere, (PC, tablet, or mobile).</p>
                                                                </div>
                                                                <div className="about__icon-box ">
                                                                    <div className="icon ">
                                                                        <i aria-hidden="true" className="tp unicon-select-window "></i>
                                                                    </div>
                                                                    <p className="">No software to install. No updates to install. No hassle.</p>
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
            <section className="elementor-section elementor-top-section elementor-element elementor-element-d9c3e5b elementor-section-full_width elementor-section-height-default " data-id="d9c3e5b" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-871835b " data-id="871835b" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-4550010 elementor-widget elementor-widget-tg-separator " data-id="4550010" data-element_type="widget" data-widget_type="tg-separator.default">
                                <div className="elementor-widget-container ">
                                    <div className="section-divider  style-2zPtH" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" id="style-2zPtH">
                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg" alt="" className=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-ba1394c elementor-section-full_width elementor-section-height-default " data-id="ba1394c" data-element_type="section" id="roadmap">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3204e3c " data-id="3204e3c" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-bced05e elementor-widget elementor-widget-roadmap " data-id="bced05e" data-element_type="widget" data-widget_type="roadmap.default">
                                <div className="elementor-widget-container ">
                                    <section className="roadmap-area ">
                                        <div className="container ">
                                            <div className="row justify-content-center  style-wZQMh" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;" id="style-wZQMh">
                                                <div className="col-xl-8 col-lg-10 ">
                                                    <div className="section__title text-center title-mb-75 ">
                                                        <h2 className="title ">Edulabs's Roadmap</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="roadmap__wrapper  style-xbw1B" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;" id="style-xbw1B">
                                                <div className="swiper roadmap__active swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden ">
                                                    <div className="swiper-wrapper " data-anime="targets: > * > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -400; delay: anime.stagger(200);" id="swiper-wrapper-2a324e53d120ad2a" aria-live="polite">
                                                        <div className="swiper-slide swiper-slide-active  style-C9hoA" role="group" aria-label="1 / 4" id="style-C9hoA">
                                                            <div className="roadmap__card  style-WfUGo" id="style-WfUGo">
                                                                <div className="roadmap__percent ">
                                                                    <span className="">0</span>%
                                                                </div>
                                                                <div className="roadmap__step ">
                                                                    <span className="tg-text-gradient d-inline-flex ">Phase 01</span>
                                                                </div>
                                                                <h3 className="roadmap__heading ">Planning</h3>
                                                                <ul className="roadmap__lists list-wrap ">
                                                                    <li className="">
                                                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex "></i> Public release of Discord, Web
                                                                    </li>
                                                                    <li className="">
                                                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex "></i> Telegram access
                                                                    </li>
                                                                    <li className="">
                                                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex "></i> Al chat for Educators and Students release
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide swiper-slide-next  style-lvz9G" role="group" aria-label="2 / 4" id="style-lvz9G">
                                                            <div className="roadmap__card  style-G8U8A" id="style-G8U8A">
                                                                <div className="roadmap__percent ">
                                                                    <span className="">25</span>%
                                                                </div>
                                                                <div className="roadmap__step ">
                                                                    <span className="tg-text-gradient d-inline-flex ">Phase 02</span>
                                                                </div>
                                                                <h3 className="roadmap__heading ">$EDUX launch</h3>
                                                                <ul className="roadmap__lists list-wrap ">
                                                                    <li className="">
                                                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex "></i> Set up Learning dApp
                                                                    </li>
                                                                    <li className="">
                                                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex "></i> Develop web social platform &amp; build out community spaces
                                                                    </li>
                                                                    <li className="">
                                                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex "></i> New DEX listing
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide  style-TQno2" role="group" aria-label="3 / 4" id="style-TQno2">
                                                            <div className="roadmap__card  style-1STHA" id="style-1STHA">
                                                                <div className="roadmap__percent ">
                                                                    <span className="">50</span>%
                                                                </div>
                                                                <div className="roadmap__step ">
                                                                    <span className="tg-text-gradient d-inline-flex ">Phase 03</span>
                                                                </div>
                                                                <h3 className="roadmap__heading ">Implementation</h3>
                                                                <ul className="roadmap__lists list-wrap ">
                                                                    <li className="">
                                                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex "></i> Implement Team Sharing measures
                                                                    </li>
                                                                    <li className="">
                                                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex "></i> Premium functionality public release
                                                                    </li>
                                                                    <li className="">
                                                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex "></i> New CEX Listings
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide  style-G71eZ" role="group" aria-label="4 / 4" id="style-G71eZ">
                                                            <div className="roadmap__card  style-ODTQ8" id="style-ODTQ8">
                                                                <div className="roadmap__percent ">
                                                                    <span className="">75</span>%
                                                                </div>
                                                                <div className="roadmap__step ">
                                                                    <span className="tg-text-gradient d-inline-flex ">Phase 04</span>
                                                                </div>
                                                                <h3 className="roadmap__heading ">Beta Release</h3>
                                                                <ul className="roadmap__lists list-wrap ">
                                                                    <li className="">
                                                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex "></i> Community marketplace Beta
                                                                    </li>
                                                                    <li className="">
                                                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex "></i> Animation full release for educators
                                                                    </li>
                                                                    <li className="">
                                                                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex "></i> New partner integrations
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="swiper-notification " aria-live="assertive" aria-atomic="true"></span>
                                                </div>
                                                <div className="tg-swiper-scrollbar swiper-pagination-progressbar swiper-pagination-horizontal "><span className="swiper-pagination-progressbar-fill  style-HVdF6" id="style-HVdF6"></span></div>
                                                <a aria-label="Previous slide" href="#prev" className="tg-swiper-prev swiper-button-disabled " tabindex="-1" role="button" aria-controls="swiper-wrapper-2a324e53d120ad2a" aria-disabled="true"><i className="fas fa-chevron-left "></i></a>
                                                <a aria-label="Next slide" href="#next" className="tg-swiper-next " tabindex="0" role="button" aria-controls="swiper-wrapper-2a324e53d120ad2a" aria-disabled="false"><i className="fas fa-chevron-right "></i></a>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-a2596a3 elementor-section-full_width elementor-section-height-default " data-id="a2596a3" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bce6512 " data-id="bce6512" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-8a51db3 elementor-widget elementor-widget-tg-separator " data-id="8a51db3" data-element_type="widget" data-widget_type="tg-separator.default">
                                <div className="elementor-widget-container ">
                                    <div className="section-divider  style-4UyDD" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" id="style-4UyDD">
                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg" alt="" className=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-2b524a05 elementor-section-content-middle elementor-section-boxed elementor-section-height-default " data-id="2b524a05" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2f411145 " data-id="2f411145" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-7498eab elementor-widget elementor-widget-price-table " data-id="7498eab" data-element_type="widget" data-widget_type="price-table.default">
                                <div className="elementor-widget-container ">
                                    <div className="elementor-price-table ">
                                        <div className="elementor-price-table__header ">
                                            <h3 className="elementor-price-table__heading "> Starter </h3>
                                            <span className="elementor-price-table__subheading "> Free Trial </span>
                                        </div>
                                        <div className="elementor-price-table__price ">
                                            <span className="elementor-price-table__currency ">$</span> <span className="elementor-price-table__integer-part "> 0 </span>
                                        </div>
                                        <ul className="elementor-price-table__features-list ">
                                            <li className="elementor-repeater-item-ef37df0 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> Create &amp; Share Spreadsheets </span>
                                                </div>
                                            </li>
                                            <li className="elementor-repeater-item-f5295c0 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> Address and Contact Book </span>
                                                </div>
                                            </li>
                                            <li className="elementor-repeater-item-0258802 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> Calendar Integration </span>
                                                </div>
                                            </li>
                                            <li className="elementor-repeater-item-56490a8 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> AI Tutor </span>
                                                </div>
                                            </li>
                                            <li className="elementor-repeater-item-bd1ea38 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> Image Editor </span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="elementor-price-table__footer ">
                                            <a className="elementor-price-table__button elementor-button elementor-size-md elementor-animation-grow " href="#"> Get Started </a>
                                        </div>
                                    </div>
                                    <div className="elementor-price-table__ribbon ">
                                        <div className="elementor-price-table__ribbon-inner "> Free trial </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ae802d " data-id="ae802d" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-249d8784 elementor-widget elementor-widget-price-table " data-id="249d8784" data-element_type="widget" data-widget_type="price-table.default">
                                <div className="elementor-widget-container ">
                                    <div className="elementor-price-table ">
                                        <div className="elementor-price-table__header ">
                                            <h3 className="elementor-price-table__heading "> Premium </h3>
                                            <span className="elementor-price-table__subheading "> All access </span>
                                        </div>
                                        <div className="elementor-price-table__price ">
                                            <span className="elementor-price-table__currency ">$</span> <span className="elementor-price-table__integer-part "> 19 </span>
                                            <div className="elementor-price-table__after-price ">
                                                <span className="elementor-price-table__fractional-part "> 99 </span>
                                                <span className="elementor-price-table__period elementor-typo-excluded ">Month</span>
                                            </div>
                                        </div>
                                        <ul className="elementor-price-table__features-list ">
                                            <li className="elementor-repeater-item-ef37df0 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> Unlimited Users </span>
                                                </div>
                                            </li>
                                            <li className="elementor-repeater-item-631e16e ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> 10GB Storage </span>
                                                </div>
                                            </li>
                                            <li className="elementor-repeater-item-6ea3da3 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> Create &amp; Share Documents </span>
                                                </div>
                                            </li>
                                            <li className="elementor-repeater-item-62f2318 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> Create &amp; Share Spreadsheets </span>
                                                </div>
                                            </li>
                                            <li className="elementor-repeater-item-b079460 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> Digital Asset Management </span>
                                                </div>
                                            </li>
                                            <li className="elementor-repeater-item-b36f6d9 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> Quick Share </span>
                                                </div>
                                            </li>
                                            <li className="elementor-repeater-item-80db985 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> Image Editor </span>
                                                </div>
                                            </li>
                                            <li className="elementor-repeater-item-91ae734 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> Calendar </span>
                                                </div>
                                            </li>
                                            <li className="elementor-repeater-item-378df87 ">
                                                <div className="elementor-price-table__feature-inner ">
                                                    <i className="" aria-hidden="true"></i>
                                                    <span className=""> Address Book </span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="elementor-price-table__footer ">
                                            <a className="elementor-price-table__button elementor-button elementor-size-md elementor-animation-grow " href="#"> Get Started </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-301eeba elementor-section-full_width elementor-section-height-default " data-id="301eeba" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9e29b8a " data-id="9e29b8a" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-a9e5aa4 elementor-widget elementor-widget-tg-separator " data-id="a9e5aa4" data-element_type="widget" data-widget_type="tg-separator.default">
                                <div className="elementor-widget-container ">
                                    <div className="section-divider  style-sXUZl" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" id="style-sXUZl">
                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg" alt="" className=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-9c9a94e elementor-section-full_width elementor-section-height-default " data-id="9c9a94e" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-24c40e2 " data-id="24c40e2" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-88d9e37 elementor-widget elementor-widget-tp-faq " data-id="88d9e37" data-element_type="widget" data-widget_type="tp-faq.default">
                                <div className="elementor-widget-container ">
                                    <section className="faq-area ">
                                        <div className="container ">
                                            <div className="row justify-content-center  style-xw5Ur" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;" id="style-xw5Ur">
                                                <div className="col-xl-8 col-lg-10 ">
                                                    <div className="section__title text-center title-mb-75 ">
                                                        <h2 className="title ">FAQs</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center ">
                                                <div className="col-xxl-7 col-xl-9 col-lg-10 ">
                                                    <div className="faq__wrapper  style-7qNjo" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;" id="style-7qNjo">
                                                        <div className="accordion " id="accordionFaq">
                                                            <div className="accordion-item ">
                                                                <h2 className="accordion-header " id="headingOne-0">
                                                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne-0" aria-expanded="true" aria-controls="collapseOne-0"> What is Binance Smart Chain, and how does it benefit EdTech platforms?? </button>
                                                                </h2>
                                                                <div id="collapseOne-0" className="accordion-collapse collapse show " aria-labelledby="headingOne-0" data-bs-parent="#accordionFaq">
                                                                    <div className="accordion-body ">
                                                                        <p className="">Binance Smart Chain is a blockchain network that supports smart contracts and decentralized applications (DApps), offering fast, low-cost transactions and scalability. In EdTech, BSC enables secure and transparent payment processing, tokenized rewards, and data immutability, enhancing user experiences and platform efficiency.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item ">
                                                                <h2 className="accordion-header " id="headingOne-1">
                                                                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne-1" aria-expanded="true" aria-controls="collapseOne-1"> What is Web3 Technology and how does it revolutionize the EdTech Space? </button>
                                                                </h2>
                                                                <div id="collapseOne-1" className="accordion-collapse collapse " aria-labelledby="headingOne-1" data-bs-parent="#accordionFaq">
                                                                    <div className="accordion-body ">
                                                                        <p className="">Web3 technology represents the decentralized web, emphasizing user ownership of data, transparent transactions, and enhanced security. In EdTech, Web3 enables personalized learning experiences, peer-to-peer interactions, and efficient content distribution, fostering innovation and collaboration.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item ">
                                                                <h2 className="accordion-header " id="headingOne-2">
                                                                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne-2" aria-expanded="true" aria-controls="collapseOne-2"> How does our platform utilize Web3 principles to empower students and educators? </button>
                                                                </h2>
                                                                <div id="collapseOne-2" className="accordion-collapse collapse " aria-labelledby="headingOne-2" data-bs-parent="#accordionFaq">
                                                                    <div className="accordion-body ">
                                                                        <p className="">Our platform integrates Web3 principles to offer decentralized identity management, data ownership, and peer-to-peer interactions. Students and educators can access secure and transparent learning environments, engage in collaborative projects, and benefit from tokenized incentives for active participation.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item ">
                                                                <h2 className="accordion-header " id="headingOne-3">
                                                                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne-3" aria-expanded="true" aria-controls="collapseOne-3"> Does our web3 platform support both traditional payment methods and blockchain transactions? </button>
                                                                </h2>
                                                                <div id="collapseOne-3" className="accordion-collapse collapse " aria-labelledby="headingOne-3" data-bs-parent="#accordionFaq">
                                                                    <div className="accordion-body ">
                                                                        <p className="">Yes, our platform supports both traditional payment methods and blockchain transactions. Users have the flexibility to choose between fiat currency payments and cryptocurrency transactions, ensuring accessibility and ease of use for all participants..</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item ">
                                                                <h2 className="accordion-header " id="headingOne-4">
                                                                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne-4" aria-expanded="true" aria-controls="collapseOne-4"> What role does Tokenization play in our Web3 EdTech Platform? </button>
                                                                </h2>
                                                                <div id="collapseOne-4" className="accordion-collapse collapse " aria-labelledby="headingOne-4" data-bs-parent="#accordionFaq">
                                                                    <div className="accordion-body ">
                                                                        <p className="">Tokenization on our platform enables users to earn tokens for completing tasks, contributing content, and engaging in educational activities. These tokens can be used for accessing premium features, participating in governance decisions, and unlocking rewards, enhancing user engagement and loyalty.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item ">
                                                                <h2 className="accordion-header " id="headingOne-5">
                                                                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne-5" aria-expanded="true" aria-controls="collapseOne-5"> How does our platform ensure data privacy policy? </button>
                                                                </h2>
                                                                <div id="collapseOne-5" className="accordion-collapse collapse " aria-labelledby="headingOne-5" data-bs-parent="#accordionFaq">
                                                                    <div className="accordion-body ">
                                                                        <p className="">Our platform employs advanced encryption, decentralized storage solutions, and strict data privacy policies to protect user data. Web3 principles such as decentralized identity management and encrypted communication ensure that user information remains secure and private at all times.</p>
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
            <section className="elementor-section elementor-top-section elementor-element elementor-element-b660c28 elementor-section-full_width elementor-section-height-default " data-id="b660c28" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-67ce644 " data-id="67ce644" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-8069a0f elementor-widget elementor-widget-tg-separator " data-id="8069a0f" data-element_type="widget" data-widget_type="tg-separator.default">
                                <div className="elementor-widget-container ">
                                    <div className="section-divider  style-pkNto" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" id="style-pkNto">
                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg" alt="" className=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-199f5ed elementor-section-full_width elementor-section-height-default " data-id="199f5ed" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-78b175c " data-id="78b175c" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-4265c51 elementor-widget elementor-widget-tp-cta " data-id="4265c51" data-element_type="widget" data-widget_type="tp-cta.default">
                                <div className="elementor-widget-container ">
                                    <section className="cta-area ">
                                        <div className="cta-bg  style-vOcT3" data-background="https://web3.edulabs.ai/wp-content/uploads/2022/12/collection_cta.png" id="style-vOcT3"></div>
                                        <div className="container ">
                                            <div className="row justify-content-center ">
                                                <div className="col-xl-6 col-lg-8 ">
                                                    <div className="cta__content text-center ">
                                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-01.png" width="24" alt="" className=" style-gU5jH" id="style-gU5jH"/>
                                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/bitcoin-01.png" width="48" alt="" className=" style-D4DfI" id="style-D4DfI"/>
                                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/ethereum-02.png" width="40" alt="" className=" style-tdpTi" id="style-tdpTi"/>
                                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/x.png" width="24" alt="" className=" style-Fy9or" id="style-Fy9or"/>
                                                        <h2 className="title ">Let's Get Started</h2>
                                                        <a href="http://edulabs.ai/app/login" target="_blank" rel="nofollow" className="btn gradient-btn "> Join community </a>
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
            <section className="elementor-section elementor-top-section elementor-element elementor-element-40fe03b elementor-section-full_width elementor-section-height-default " data-id="40fe03b" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1589518 " data-id="1589518" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-6df5371 elementor-widget elementor-widget-tg-separator " data-id="6df5371" data-element_type="widget" data-widget_type="tg-separator.default">
                                <div className="elementor-widget-container ">
                                    <div className="section-divider  style-VdDIj" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" id="style-VdDIj">
                                        <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg" alt="" className=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-a1a4c99 elementor-section-full_width elementor-section-height-default " data-id="a1a4c99" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no ">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-624e515 " data-id="624e515" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated ">
                            <div className="elementor-element elementor-element-a77086b elementor-widget elementor-widget-tp-footer " data-id="a77086b" data-element_type="widget" data-widget_type="tp-footer.default">
                                <div className="elementor-widget-container ">
                                    <footer className="footer-area section-py-80 ">
                                        <div className="container ">
                                            <div className="footer__wrapper ">
                                                <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/ethereum-01.png" width="32" alt="" className=" style-wJaMW" id="style-wJaMW"/>
                                                <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/x.png" width="16" alt="" className=" style-dkTaS" id="style-dkTaS"/>
                                                <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-01.png" width="16" alt="" className=" style-mlyoR" id="style-mlyoR"/>
                                                <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-03.png" width="24" alt="" className=" style-2tjiL" id="style-2tjiL"/>
                                                <div className="row justify-content-center ">
                                                    <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11 ">
                                                        <div className="footer__info text-center ">
                                                            <div className="footer-logo ">
                                                                <a href="https://web3.edulabs.ai/" className="">
                                                                    <img decoding="async" src="https://web3.edulabs.ai/wp-content/uploads/2024/05/2.png" width="200" alt="Logo" className=""/>
                                                                </a>
                                                            </div>
                                                            <p className="">Edulabs Web3.0 improves student productivity. It lets students set goals and achieve those efficiently through powerful set of features and tools.</p>
                                                            <ul className="list-wrap footer__social ">
                                                                <li className=""><a href="#" className=""><i className="fab fa-twitter "></i></a></li>
                                                                <li className=""><a href="#" className=""><i className="fab fa-discord "></i></a></li>
                                                                <li className=""><a href="#" className=""><i className="fab fa-instagram "></i></a></li>
                                                                <li className=""><a href="#" className=""><i className="fab fa-telegram-plane "></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="copyright__wrapper ">
                                                    <div className="row ">
                                                        <div className="col-md-6 ">
                                                            <div className="copyright__text ">
                                                                <p className="">© 2024 Edulabs. All rights reserved.</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 ">
                                                            <div className="copyright__menu ">
                                                                <ul className="list-wrap ">
                                                                    <li className=""><a href="http://edulabs.ai/privacy-policy" className="">Privacy policy</a></li>
                                                                    <li className=""><a href="http://edulabs.ai/terms-of-service" className="">Terms of use</a></li>
                                                                    <li className="backTop ">
                                                                        <a href="javascript:void(0)" className="scroll-to-target " data-target="html"><i className="flaticon-arrowhead-up "></i></a>
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
    <link rel="stylesheet" id="e-animations-css" href="https://web3.edulabs.ai/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.21.4" type="text/css" media="all" className="72"/>
    <span id="elementor-device-mode" className="elementor-screen-only "></span>
    <svg style={{display: "none"}} className="e-font-icon-svg-symbols "></svg>
    <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb" className="">
        <section id="shadow-host-companion" className=""></section>
    </div>
    <div className="edge_builder edge_builder_top  style-e5GFg" id="style-e5GFg"></div>
    <div className="edge_builder edge_builder_right  style-xUnPQ" id="style-xUnPQ"></div>
    <div className="edge_builder edge_builder_bottom  style-i2m3p" id="style-i2m3p"></div>
    <div className="edge_builder edge_builder_left  style-NlAoC" id="style-NlAoC"></div>
    <div className=" -slide " id="modal-pick-resolution"></div>
    <div className="edge_builder2 edge_builder_top  style-sCkDG" id="style-sCkDG"></div>
    <div className="edge_builder2 edge_builder_right  style-ybNfm" id="style-ybNfm"></div>
    <div className="edge_builder2 edge_builder_bottom  style-YtgPr" id="style-YtgPr"></div>
    <div className="edge_builder2 edge_builder_left  style-Qj9bd" id="style-Qj9bd"></div>
    <div data-tether-id="1" className=" style-j9n1x" id="style-j9n1x"></div>
    <div id="snipcss-panel-container" className="style-5yGs7">
        <div id="snipcss-button-relative-container">
            <div className="snipcss_birdcontainer style-zzCzM" id="style-zzCzM"><img className="snipcss_bird style-r3CXr" src="chrome-extension://hbdnoadcmapfbngbodpppofgagiclicf/img/kiwi_transparent_run_text.png" id="style-r3CXr"/></div><button id="snipcss-close" className=""><span id="snipcss-close-svg"><svg viewBox="0 0 24 24" className="close">
                        <path d="M 2 2 L 22 22 M 2 22 L22 2" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path>
                    </svg></span></button>
        </div>
        <div className="snipcss-shadowcontainer"></div>
    </div>
    <div className=" -slide" id="modal-pick-resolution"></div>
    <div className="edge_builder edge_builder_top style-5GKbI" id="style-5GKbI"></div>
    <div className="edge_builder edge_builder_right style-zBHxD" id="style-zBHxD"></div>
    <div className="edge_builder edge_builder_bottom style-UCwC2" id="style-UCwC2"></div>
    <div className="edge_builder edge_builder_left style-B7ssb" id="style-B7ssb"></div>
    <div className="edge_builder2 edge_builder_top style-KYNvT" id="style-KYNvT"></div>
    <div className="edge_builder2 edge_builder_right style-4ptgU" id="style-4ptgU"></div>
    <div className="edge_builder2 edge_builder_bottom style-FTnqx" id="style-FTnqx"></div>
    <div className="edge_builder2 edge_builder_left style-aPCIp" id="style-aPCIp"></div>
    <div data-tether-id="1" id="style-TRV95" className="style-TRV95"></div><canvas width="70" height="70" id="snipcss-kiwi" className="style-hIdem"></canvas>
</div>
  )
}