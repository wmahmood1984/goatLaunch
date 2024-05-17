import React, { useState,useEffect } from "react";
import "./Tokenomics.css"

const upper = {marginLeft:"10%",width:"80%", height:"45%",marginTop:"5%", boxShadow: "0px 0px 25px 10px #888888", textAlign:"center",borderRadius:"15px" } 
const lower = {marginLeft:"10%",width:"80%", height:"45%",marginTop:"5%", boxShadow: "0px 0px 25px 10px #888888", textAlign:"center",borderRadius:"15px" }

const TextInput = ({ className, label, ...props }) => {
  return (
    <div className="">
      {label && <div className="">{label}</div>}
      <div className="">
        <input className="" {...props} />
      </div>
    </div>
  );
};


export default function Swap() {
  const [refSwap,setRefswap] = useState (false)
  const [BUSDBalance,setBUSDBalance] = useState(0)

  const [TVLBalance,setTVLBalance] = useState(0)
  const [TVLamount,setTVLAmount] = useState()

  const [amount,setAmount] = useState()


  const swapTVL = async ()=>{
    //setTitle("Swapping TVL")
    try {
   //   const tx1 = await SwapContract.buyTVL(parseEther(amount),{gasLimit:300000})
   //   await tx1.wait()
      // if(tx1){
      //   setToggle(!toggle)
      //   setOpen(false)
      //   setAmount("")
      // }

    } catch (error) {
      console.log("Error in approve TVL",error)
      // setTitle("Transaction in Error")
      // setOpen(false)
      
    }
  }  
  
  
  
  
  const approveTVL = async ()=>{
    // if(account){
    //   setOpen(true)
    //   setTitle("Approving the BUSD")
    //   try {
    //     const tx1 = await BUSDContract.approve(TVLSwap,parseEther(amount),{gasLimit:300000})
    //     await tx1.wait()
        
    //     if(tx1){
    //       swapTVL()
    //     }
  
    //   } catch (error) {
    //     console.log("Error in approve TVL",error)
    //   }
    // }else{
    //   window.alert("Please connnect your wallet")
    // }

  }



  const swapBUSD = async ()=>{
    // setTitle("Swapping BUSD")

    // try {
    //   const tx1 = await SwapContract.sellTVL(parseEther(TVLamount),{gasLimit:3000000})
    //   await tx1.wait()
    //   if(tx1){
    //     setToggle(!toggle)
    //     setOpen(false)
    //     setTVLAmount("")
    //   }

    // } catch (error) {
    //   console.log("Error in approve TVL",error)
    //   setTitle("Transaction in Error")
    //   setOpen(false)
      
    // }
  }  
  
  
  
  
  const approveBUSD = async ()=>{
  // if(account){
  //   setOpen(true)
  //   setTitle("Approving the TVL")
  //   try {
  //     const tx1 = await TVLContract.approve(TVLSwap,parseEther(TVLamount),{gasLimit:3000000})
  //     await tx1.wait()
      
  //     if(tx1){
  //       swapBUSD()
  //     }

  //   } catch (error) {
  //     console.log("Error in approve BUSD",error)
  //   }
  // }else{
  //   window.alert("Please connect your walet")
  // }

  }
  return (
    <div
      class="page-template page-template-elementor_header_footer page page-id-30 wp-embed-responsive no-sidebar elementor-default elementor-template-full-width elementor-kit-24416 elementor-page elementor-page-30 e--ua-blink e--ua-chrome e--ua-webkit snipcss0-0-0-1 XXsnipcss_extracted_selector_selectionXX tether-element-attached-top tether-element-attached-center tether-target-attached-top tether-target-attached-center"
      data-elementor-device-mode="desktop"
      cz-shortcut-listen="true"
    >
      <div class="darkmode-trigger snipcss0-1-1-2">
        <label class="modeSwitch snipcss0-2-2-3">
          <input type="checkbox" class="snipcss0-3-3-4" />
          <span class="icon snipcss0-3-3-5"></span>
        </label>
      </div>

      <header class="header-style-two snipcss0-1-1-6">
        <div
          id="sticky-header"
          class="tg-header__area transparent-header snipcss0-2-6-7"
        >
          <div class="container snipcss0-3-7-8">
            <div class="row snipcss0-4-8-9">
              <div class="col-12 snipcss0-5-9-10">
                <div class="mobile-nav-toggler snipcss0-6-10-11">
                  <i class="flaticon-menu-1 snipcss0-7-11-12"></i>
                </div>
                <div class="tgmenu__wrap snipcss0-6-10-13">
                  <nav class="tgmenu__nav snipcss0-7-13-14">
                    <div class="logo snipcss0-8-14-15">
                      <a
                        class="light-logo snipcss0-9-15-16"
                        href="https://web3.edulabs.ai/"
                      >
                        <img
                          src="https://web3.edulabs.ai/wp-content/uploads/2024/05/1.png"
                          height="auto"
                          style={{ maxWidth: "120px" }}
                          alt="Logo"
                          class="snipcss0-10-16-17"
                        />
                      </a>
                      <a
                        class="dark-logo snipcss0-9-15-18"
                        href="https://web3.edulabs.ai/"
                      >
                        <img
                          src="https://web3.edulabs.ai/wp-content/uploads/2024/05/2.png"
                          height="auto"
                          style={{ maxWidth: "120px" }}
                          alt="Logo"
                          class="snipcss0-10-18-19"
                        />
                      </a>
                    </div>
                    <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex snipcss0-8-14-20">
                      <ul
                        id="menu-main-menu"
                        class="navigation snipcss0-9-20-21"
                      >
                        <li
                          id="menu-item-77"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-77 snipcss0-10-21-22"
                        >
                          <a
                            href="https://web3.edulabs.ai/"
                            class="snipcss0-11-22-23"
                          >
                            Home
                          </a>
                        </li>
                        <li
                          id="menu-item-66"
                          class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-30 current_page_item menu-item-66 snipcss0-10-21-24"
                        >
                          <a
                            href="/swap"
                            aria-current="page"
                            class="snipcss0-11-24-25"
                          >
                            Swap
                          </a>
                        </li>
                        <li
                          id="menu-item-66"
                          class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-30 current_page_item menu-item-66 snipcss0-10-21-24"
                        >
                          <a
                            href="/tokenomics"
                            aria-current="page"
                            class="snipcss0-11-24-25"
                          >
                            Tokenomics
                          </a>
                        </li>
                        <li
                          id="menu-item-68"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-68 snipcss0-10-21-26"
                        >
                          <a href="#collection" class="snipcss0-11-26-27">
                            Collection
                          </a>
                        </li>
                        <li
                          id="menu-item-67"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-67 snipcss0-10-21-28"
                        >
                          <a href="#about" class="snipcss0-11-28-29">
                            About
                          </a>
                        </li>
                        <li
                          id="menu-item-69"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-69 snipcss0-10-21-30"
                        >
                          <a href="#roadmap" class="snipcss0-11-30-31">
                            Roadmap
                          </a>
                        </li>
                        <li
                          id="menu-item-84"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-84 snipcss0-10-21-32"
                        >
                          <a
                            href="https://web3.edulabs.ai/?page_id=34"
                            class="snipcss0-11-32-33"
                          >
                            Blog
                          </a>
                        </li>
                      </ul>{" "}
                    </div>
                  </nav>
                </div>

                <div class="tgmobile__menu snipcss0-6-10-34">
                  <nav class="tgmobile__menu-box snipcss0-7-34-35">
                    <div class="close-btn snipcss0-8-35-36">
                      <i class="flaticon-close-1 snipcss0-9-36-37"></i>
                    </div>
                    <div class="nav-logo snipcss0-8-35-38">
                      <a
                        class="light-logo snipcss0-9-38-39"
                        href="https://web3.edulabs.ai/"
                      >
                        <img
                          src="https://web3.edulabs.ai/wp-content/uploads/2024/05/1.png"
                          height="auto"
                          style={{ maxWidth: "120px" }}
                          alt="Logo"
                          class="snipcss0-10-39-40"
                        />
                      </a>

                      <a
                        class="dark-logo snipcss0-9-38-41"
                        href="https://web3.edulabs.ai/"
                      >
                        <img
                          src="https://web3.edulabs.ai/wp-content/uploads/2024/05/2.png"
                          height="auto"
                          style={{ maxWidth: "120px" }}
                          alt="Logo"
                          class="snipcss0-10-41-42"
                        />
                      </a>
                    </div>
                    <div class="tgmobile__menu-outer snipcss0-8-35-43">
                      <ul
                        id="menu-main-menu-1"
                        class="navigation snipcss0-9-43-44"
                      >
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-77 snipcss0-10-44-45">
                          <a
                            href="https://web3.edulabs.ai/"
                            class="snipcss0-11-45-46"
                          >
                            Home
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-30 current_page_item menu-item-66 snipcss0-10-44-47">
                          <a
                            href="https://web3.edulabs.ai/?page_id=30"
                            aria-current="page"
                            class="snipcss0-11-47-48"
                          >
                            Tokenomics
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-68 snipcss0-10-44-49">
                          <a href="#collection" class="snipcss0-11-49-50">
                            Collection
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-67 snipcss0-10-44-51">
                          <a href="#about" class="snipcss0-11-51-52">
                            About
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-69 snipcss0-10-44-53">
                          <a href="#roadmap" class="snipcss0-11-53-54">
                            Roadmap
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-84 snipcss0-10-44-55">
                          <a
                            href="https://web3.edulabs.ai/?page_id=34"
                            class="snipcss0-11-55-56"
                          >
                            Blog
                          </a>
                        </li>
                      </ul>{" "}
                    </div>

                    <div class="social-links snipcss0-8-35-57">
                      <ul class="clearfix snipcss0-9-57-58">
                        <li class="facebook snipcss0-10-58-59">
                          <a href="#" class="snipcss0-11-59-60">
                            <i class="fab fa-facebook-f snipcss0-12-60-61"></i>
                          </a>
                        </li>

                        <li class="twitter snipcss0-10-58-62">
                          <a href="#" class="snipcss0-11-62-63">
                            <i class="fab fa-twitter snipcss0-12-63-64"></i>
                          </a>
                        </li>

                        <li class="instagram snipcss0-10-58-65">
                          <a href="#" class="snipcss0-11-65-66">
                            <i class="fab fa-instagram snipcss0-12-66-67"></i>
                          </a>
                        </li>

                        <li class="discord snipcss0-10-58-68">
                          <a href="#" class="snipcss0-11-68-69">
                            <i class="fab fa-discord snipcss0-12-69-70"></i>
                          </a>
                        </li>

                        <li class="telegram snipcss0-10-58-71">
                          <a href="#" class="snipcss0-11-71-72">
                            <i class="fab fa-telegram-plane snipcss0-12-72-73"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div class="tgmobile__menu-backdrop snipcss0-6-10-74"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main class="fix snipcss0-1-1-75">
        <div class="gradient-position snipcss0-2-75-76">
          <img
            src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/others/gradient-circle.svg"
            style={{ left: "-4%", top: "-4%" }}
            width="500"
            alt="Background Circle"
            class="snipcss0-3-76-77"
          />
          <img
            src="https://web3.edulabs.ai/wp-content/themes/nerko/assets/img/others/gradient-circle.svg"
            style={{ right: "-4%", bottom: "-4%" }}
            width="500"
            alt="Background Circle"
            class="snipcss0-3-76-78"
          />
        </div>

        <div
          data-elementor-type="wp-page"
          data-elementor-id="30"
          class="elementor elementor-30 snipcss0-2-75-79"
          data-elementor-post-type="page"
        >
          <section
            class="elementor-section elementor-top-section elementor-element elementor-element-af3c653 elementor-section-full_width elementor-section-height-default snipcss0-3-79-80"
            data-id="af3c653"
            data-element_type="section"
          >
            <div class="elementor-container elementor-column-gap-no snipcss0-4-80-81">
              <div
                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f3681a3 snipcss0-5-81-82"
                data-id="f3681a3"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated snipcss0-6-82-83">
                  <div
                    class="elementor-element elementor-element-eb7dc61 elementor-widget elementor-widget-hero-banner snipcss0-7-83-84"
                    data-id="eb7dc61"
                    data-element_type="widget"
                    data-widget_type="hero-banner.default"
                  >
                    <div class="elementor-widget-container snipcss0-8-84-85">
                      <section
                        id="home"
                        // style={{
                        //     textAlign:"center",
                        //     minHeight:"100vh",
                        //     padding:"150px 0 100px",
                        //     display:"flex",
                        //     alignItems:"center",

                        // }}
                        className="banner-area banner-style-two tg-section position-relative snipcss0-9-85-86"
                      >
                        <div class="banner__background-wrap snipcss0-10-86-87">
                          <div
                            class="background snipcss0-11-87-88"
                            data-background="https://web3.edulabs.ai/wp-content/uploads/2022/12/collection-grid.png"
                            style={{
                              backgroundImage: `url(https://web3.edulabs.ai/wp-content/uploads/2022/12/collection-grid.png)`,
                            }}
                          ></div>
                        </div>
                        <div 
                        
                        class="container snipcss0-10-86-89">
                          <div class="row justify-content-center snipcss0-11-89-90">
                            <div class="col-xl-7 col-lg-9 snipcss0-12-90-91">
                              <div

                                class="banner__content-two tg-content snipcss0-13-91-92"
                                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                                // style={{
                                //   opacity: "1",
                                //   transform: "translateY(0px)",
                                  
                                // }}
                              >
                                <img
                                  decoding="async"
                                  class="top-left snipcss0-14-92-93"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/ethereum-01.png"
                                  width="44"
                                  alt=""
                                  style={{
                                    top: "-20%",
                                    left: "50%",
                                    opacity: "1",
                                    transform: "scale(1)",
                                  }}
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                                />

                                <img
                                  decoding="async"
                                  class="top-right snipcss0-14-92-94"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/x.png"
                                  width="24"
                                  alt=""
                                  style={{
                                    top: " 20%",
                                    right: "-20%",
                                    opacity: "1",
                                    transform: "scale(1)",
                                  }}
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;"
                                />

                                <img
                                  decoding="async"
                                  class="left-align snipcss0-14-92-95"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-01.png"
                                  width="16"
                                  alt=""
                                  style={{
                                    top: "16%",
                                    left: "-16%",
                                    opacity: "1",
                                    transform: "scale(1)",
                                  }}
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;"
                                />

                                <img
                                  decoding="async"
                                  class="bottom-left snipcss0-14-92-96"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/bitcoin-01.png"
                                  width="44"
                                  alt=""
                                  style={{bottom: "-16%", left: "16%", opacity: "1", transform: "scale(1)"}}
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
                                />

                                <img
                                  decoding="async"
                                  class="bottom-right snipcss0-14-92-97"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-03.png"
                                  width="24"
                                  alt=""
                                  style={{bottom: "-16%", right: "16%", opacity: "1", transform: "scale(1)"}}
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
                                />
{!refSwap? 
       <div>
        <strong>Swap BUSD to TVL</strong>
       <div style={!refSwap? upper : lower}>
       <h1 style={{marginTop:"10px"}}>Your Existing BUSD balance : {Number(BUSDBalance).toFixed(2)}</h1> 
         <TextInput
         
          style={{width:"80%"}}
          className=""
          label="Enter BUSD Value here"
          name="BUSD Amount"
          type="number"
          placeholder="Enter your BUSD Value"
          value={amount}
          onChange={async (e) => {
           setAmount(e.target.value)
           const _tvlPrice = await SwapContract.getTVLOutputAmount(parseEther(e.target.value))
           setTVLAmount(formatEther(_tvlPrice))
         
         }}
         />
         <button 
         onClick={approveTVL}
         style={{marginTop:"2%",marginBottom:"10px", width:"30%"}} variant="contained"> SWAP </button>
 
 
 
       </div>
       <button onClick={()=>{setRefswap(!refSwap)}}><img width="50px" style={{marginTop:"20px"}} src=""/></button>
       <div style={!refSwap? lower : upper}>
       <h1>Your Existing TVL balance : {Number(TVLBalance).toFixed(2)} </h1>
       <TextInput
          style={{width:"80%"}}
          className=""
          label="Enter TVL Value here"
          name="TVL Amount"
          type="number"
          placeholder="Enter your TVL Value"
          value={TVLamount}
          onChange={async (e) => {
           setTVLAmount(e.target.value)
           const _BUSDPrice = await SwapContract.getBUSDOutputamount(parseEther( e.target.value))
           setAmount(formatEther(_BUSDPrice) )
         
         }}
 
         />
 
       <button onClick={approveBUSD} style={{marginTop:"2%",marginBottom:"10px", width:"30%"}} variant="contained">Swap</button>
       </div>
 
       </div> : 
       <div>
        <strong>Swap TVL to BUSD</strong>
       <div style={refSwap? upper : lower}>
       <h1>Your Existing TVL balance : {Number(TVLBalance).toFixed(2)} </h1>
       <TextInput
          style={{width:"80%"}}
          className=""
          label="Enter TVL Value here"
          name="TVL Amount"
          type="number"
          placeholder="Enter your TVL Value"
          value={TVLamount}
          onChange={async (e) => {
           setTVLAmount(e.target.value)
           const _BUSDPrice = await SwapContract.getBUSDOutputamount(parseEther( e.target.value))
           setAmount(formatEther(_BUSDPrice) )
         
         }}
 
         />
 
       <button onClick={approveBUSD} style={{marginTop:"2%",marginBottom:"10px", width:"30%"}} variant="contained"> SWAP </button>
       </div>
       <button onClick={()=>{setRefswap(!refSwap)}}><img width="50px" style={{marginTop:"20px"}} src=""/></button>
       <div style={refSwap? lower : upper}>
       <h1>Your Existing BUSD balance : {Number(BUSDBalance).toFixed(2)}</h1> 
         <TextInput
         
          style={{width:"80%"}}
          className=""
          label="Enter BUSD Value here"
          name="BUSD Amount"
          type="number"
          placeholder="Enter your BUSD Value"
          value={amount}
          onChange={async (e) => {
           setAmount(e.target.value)
           const _tvlPrice = await SwapContract.getTVLOutputAmount(parseEther(e.target.value))
           setTVLAmount(formatEther(_tvlPrice))
         
         }}
         />
         <button 
         onClick={approveTVL}
         style={{marginTop:"2%",marginBottom:"10px", width:"30%"}} variant="contained"> SWAP </button>
 
 
 
       </div>
       
 
       </div>
      }
                                
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
            class="elementor-section elementor-top-section elementor-element elementor-element-a4a8a98 elementor-section-full_width elementor-section-height-default snipcss0-3-79-102"
            data-id="a4a8a98"
            data-element_type="section"
            data-settings='{"background_background":"classic"}'
          >
            <div class="elementor-container elementor-column-gap-no snipcss0-4-102-103">
              <div
                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8488498 snipcss0-5-103-104"
                data-id="8488498"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated snipcss0-6-104-105">
                  <div
                    class="elementor-element elementor-element-5338ecf elementor-widget elementor-widget-tg-separator snipcss0-7-105-106"
                    data-id="5338ecf"
                    data-element_type="widget"
                    data-widget_type="tg-separator.default"
                  >
                    <div class="elementor-widget-container snipcss0-8-106-107">
                      <div
                        class="section-divider snipcss0-9-107-108"
                        data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                        style={{opacity: "1", transform: "scale(1)"}}
                      >
                        <img
                          decoding="async"
                          src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg"
                          alt=""
                          class="snipcss0-10-108-109"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="elementor-section elementor-top-section elementor-element elementor-element-21cf104 elementor-section-full_width elementor-section-height-default snipcss0-3-79-110"
            data-id="21cf104"
            data-element_type="section"
            id="about"
            data-settings='{"background_background":"classic"}'
          >
            <div class="elementor-container elementor-column-gap-no snipcss0-4-110-111">
              <div
                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3800853 snipcss0-5-111-112"
                data-id="3800853"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated snipcss0-6-112-113">
                  <div
                    class="elementor-element elementor-element-a4b55a9 elementor-widget elementor-widget-about snipcss0-7-113-114"
                    data-id="a4b55a9"
                    data-element_type="widget"
                    data-widget_type="about.default"
                  >
                    <div class="elementor-widget-container snipcss0-8-114-115">
                      <section class="about-area snipcss0-9-115-116">
                        <div class="container snipcss0-10-116-117">
                          <div
                            class="row justify-content-center snipcss0-11-117-118"
                            data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                            style={{opacity: "1", transform: "translateY(0px)"}}
                          >
                            <div class="col-xl-8 col-lg-10 snipcss0-12-118-119">
                              <div class="section__title text-center title-mb-80 snipcss0-13-119-120">
                                <h2 class="title snipcss0-14-120-121">
                                  At The Core
                                </h2>
                                <p class="desc snipcss0-14-120-122">
                                  The $EDUX token is essential to Edulabs AI's
                                  function, serving as a medium of exchange to
                                  upgrade user experience via Premium,
                                  participate in the community marketplace, mint
                                  NFTs, and earn via staking. $EDUX can also be
                                  earned by users via our Learn to Earn program
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="about__row-reverse snipcss0-11-117-123">
                            <div class="row align-items-center snipcss0-12-123-124">
                              <div class="col-lg-6 snipcss0-13-124-125">
                                <div
                                  class="about__content snipcss0-14-125-126"
                                  data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                                  style={{opacity: "1", transform: "translateX(0px)"}}
                                >
                                  <div class="section__title text-start snipcss0-15-126-127"></div>
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
            class="elementor-section elementor-top-section elementor-element elementor-element-641ca88 elementor-section-full_width elementor-section-height-default snipcss0-3-79-128"
            data-id="641ca88"
            data-element_type="section"
          >
            <div class="elementor-container elementor-column-gap-no snipcss0-4-128-129">
              <div
                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8fa0bd6 snipcss0-5-129-130"
                data-id="8fa0bd6"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated snipcss0-6-130-131">
                  <div
                    class="elementor-element elementor-element-59194d0 elementor-widget elementor-widget-tg-separator snipcss0-7-131-132"
                    data-id="59194d0"
                    data-element_type="widget"
                    data-widget_type="tg-separator.default"
                  >
                    <div class="elementor-widget-container snipcss0-8-132-133">
                      <div
                        class="section-divider snipcss0-9-133-134"
                        data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                        style={{opacity: "1", transform: "scale(1)"}}
                      >
                        <img
                          decoding="async"
                          src="https://web3.edulabs.ai/wp-content/uploads/2022/12/divider-01.svg"
                          alt=""
                          class="snipcss0-10-134-135"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="elementor-section elementor-top-section elementor-element elementor-element-93678dc elementor-section-full_width elementor-section-height-default snipcss0-3-79-136"
            data-id="93678dc"
            data-element_type="section"
          >
            <div class="elementor-container elementor-column-gap-no snipcss0-4-136-137">
              <div
                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e11a525 snipcss0-5-137-138"
                data-id="e11a525"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated snipcss0-6-138-139">
                  <div
                    class="elementor-element elementor-element-63865c5 elementor-widget elementor-widget-tp-cta snipcss0-7-139-140"
                    data-id="63865c5"
                    data-element_type="widget"
                    data-widget_type="tp-cta.default"
                  >
                    <div class="elementor-widget-container snipcss0-8-140-141">
                      <section class="cta-area style-two snipcss0-9-141-142">
                        <div class="container snipcss0-10-142-143">
                          <div class="row justify-content-center snipcss0-11-143-144">
                            <div class="col-xl-6 col-lg-8 snipcss0-12-144-145">
                              <div class="cta__content style-two text-center snipcss0-13-145-146">
                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/circle-01.png"
                                  width="24"
                                  alt=""
                                  style={{top: "0%", left: "-16%", opacity: "1", transform: "scale(1)"}}
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                                  class="snipcss0-14-146-147"
                                />

                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/bitcoin-01.png"
                                  width="48"
                                  alt=""
                                  style={{bottom: "16%", left: "-8%", opacity: "1", transform: "scale(1)"}}
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
                                  class="snipcss0-14-146-148"
                                />

                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/ethereum-02.png"
                                  width="40"
                                  alt=""
                                  style={{top: "0%", right: "-16%", opacity: "1", transform: "scale(1)"}}
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
                                  class="snipcss0-14-146-149"
                                />

                                <img
                                  decoding="async"
                                  src="https://web3.edulabs.ai/wp-content/uploads/2022/12/x.png"
                                  width="24"
                                  alt=""
                                  style={{bottom: "16%", right: "-8%", opacity: "1", transform: "scale(1)"}}
                                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;"
                                  class="snipcss0-14-146-150"
                                />

                                <h2 class="title snipcss0-14-146-151">
                                  We make it easy to Learn
                                </h2>
                                <p class="snipcss0-14-146-152">
                                  Manage all your Education Studies at one
                                  place.
                                </p>

                                <a
                                  href="#"
                                  target="_blank"
                                  rel="nofollow"
                                  class="btn gradient-btn snipcss0-14-146-153"
                                >
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
            class="elementor-section elementor-top-section elementor-element elementor-element-e2edee8 elementor-section-full_width elementor-section-height-default snipcss0-3-79-154"
            data-id="e2edee8"
            data-element_type="section"
          >
            <div class="elementor-container elementor-column-gap-no snipcss0-4-154-155">
              <div
                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-65066d6 snipcss0-5-155-156"
                data-id="65066d6"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated snipcss0-6-156-157">
                  <div
                    class="elementor-element elementor-element-fd3d02a elementor-widget elementor-widget-tp-footer snipcss0-7-157-158"
                    data-id="fd3d02a"
                    data-element_type="widget"
                    data-widget_type="tp-footer.default"
                  >
                    <div class="elementor-widget-container snipcss0-8-158-159">
                      <footer class="footer-area footer-style-two section-py-80 snipcss0-9-159-160">
                        <div
                          class="footer-bg snipcss0-10-160-161"
                          data-background="https://web3.edulabs.ai/wp-content/uploads/2022/12/footer-bg.png"
                          style={{backgroundImage: 'url("https://web3.edulabs.ai/wp-content/uploads/2022/12/footer-bg.png")'}}
                        ></div>

                        <div class="container snipcss0-10-160-162">
                          <div class="footer__wrapper snipcss0-11-162-163">
                            <div class="row justify-content-center snipcss0-12-163-164">
                              <div class="col-xl-5 col-lg-7 col-md-9 col-sm-11 snipcss0-13-164-165">
                                <div class="footer__info text-center snipcss0-14-165-166">
                                  <ul class="list-wrap footer__social snipcss0-15-166-167">
                                    <li class="snipcss0-16-167-168">
                                      <a href="#" class="snipcss0-17-168-169">
                                        <i class="fab fa-twitter snipcss0-18-169-170"></i>
                                      </a>
                                    </li>

                                    <li class="snipcss0-16-167-171">
                                      <a href="#" class="snipcss0-17-171-172">
                                        <i class="fab fa-discord snipcss0-18-172-173"></i>
                                      </a>
                                    </li>

                                    <li class="snipcss0-16-167-174">
                                      <a href="#" class="snipcss0-17-174-175">
                                        <i class="fab fa-instagram snipcss0-18-175-176"></i>
                                      </a>
                                    </li>

                                    <li class="snipcss0-16-167-177">
                                      <a href="#" class="snipcss0-17-177-178">
                                        <i class="fab fa-telegram-plane snipcss0-18-178-179"></i>
                                      </a>
                                    </li>

                                    <li class="snipcss0-16-167-180">
                                      <a href="#" class="snipcss0-17-180-181">
                                        <i class="fab fa-youtube snipcss0-18-181-182"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div class="copyright__wrapper-two snipcss0-12-163-183">
                              <div class="row justify-content-center snipcss0-13-183-184">
                                <div class="col-md-8 snipcss0-14-184-185">
                                  <div class="copyright__menu snipcss0-15-185-186">
                                    <ul class="list-wrap justify-content-center snipcss0-16-186-187">
                                      <li class="snipcss0-17-187-188">
                                        <a href="#" class="snipcss0-18-188-189">
                                          Privacy policy
                                        </a>
                                      </li>
                                      <li class="snipcss0-17-187-190">
                                        <a href="#" class="snipcss0-18-190-191">
                                          Terms of use
                                        </a>
                                      </li>
                                    </ul>
                                  </div>

                                  <div class="copyright__text text-center snipcss0-15-185-192">
                                    <p class="snipcss0-16-192-193">
                                      © 2024 Edulabs. All rights reserved.
                                    </p>
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

      <span
        id="elementor-device-mode"
        class="elementor-screen-only snipcss0-1-1-194"
      ></span>
      <svg
        style={{ display: "none" }}
        class="e-font-icon-svg-symbols snipcss0-1-1-195"
      ></svg>

      <div
        id="loom-companion-mv3"
        ext-id="liecbddmkiiihnedobmlmillhodjkdmb"
        class="snipcss0-1-1-196"
      >
        <section
          id="shadow-host-companion"
          class="snipcss0-2-196-197"
        ></section>
      </div>
      <div
        class="edge_builder edge_builder_top snipcss0-1-1-198"
        style={{ top: "8px", left: "825px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder edge_builder_right snipcss0-1-1-199"
        style={{ top: "8px", left: "964px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder edge_builder_bottom snipcss0-1-1-200"
        style={{ top: "90px", left: "825px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder edge_builder_left snipcss0-1-1-201"
        style={{ top: "8px", left: "823px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="snipcss-modal snipcss-micromodal-slide snipcss0-1-1-210 snipcss0-1-1-202"
        id="modal-pick-resolution"
      ></div>
      <div
        class="edge_builder2 edge_builder_top snipcss0-1-1-211 snipcss0-1-1-203"
        style={{ top: "-2px", left: "0px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder2 edge_builder_right snipcss0-1-1-212 snipcss0-1-1-204"
        style={{ top: "-4px", left: "-4px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder2 edge_builder_bottom snipcss0-1-1-213 snipcss0-1-1-205"
        style={{ top: "-4px", left: "-4px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder2 edge_builder_left snipcss0-1-1-214 snipcss0-1-1-206"
        style={{ top: "-2px", left: "-2px", height: "0px", width: "0px" }}
      ></div>
      <div
        data-tether-id="1"
        style={{ top: "0px", left: "0px", position: "absolute" }}
        class="snipcss0-1-1-215 snipcss0-1-1-207"
      ></div>
      <div
        class="snipcss-modal snipcss-micromodal-slide snipcss0-1-1-216"
        id="modal-pick-resolution"
      ></div>
      <div
        class="edge_builder edge_builder_top snipcss0-1-1-217"
        style={{ top: "8px", left: "825px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder edge_builder_right snipcss0-1-1-218"
        style={{ top: "8px", left: "964px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder edge_builder_bottom snipcss0-1-1-219"
        style={{ top: "90px", left: "825px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder edge_builder_left snipcss0-1-1-220"
        style={{ top: "8px", left: "823px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder2 edge_builder_top snipcss0-1-1-221"
        style={{ top: "-2px", left: "0px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder2 edge_builder_right snipcss0-1-1-222"
        style={{ top: "-4px", left: "-4px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder2 edge_builder_bottom snipcss0-1-1-223"
        style={{ top: "-4px", left: "-4px", height: "0px", width: "0px" }}
      ></div>
      <div
        class="edge_builder2 edge_builder_left snipcss0-1-1-224"
        style={{ top: "-2px", left: "-2px", height: "0px", width: "0px" }}
      ></div>
      <div
        data-tether-id="1"
        style={{ top: "0px", left: "0px", position: "absolute" }}
        class="snipcss0-1-1-225"
      ></div>
    </div>
  );
}
