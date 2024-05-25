import React, { useEffect, useState } from "react";
import "./Marketplace.css";
import Header from "./Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useWeb3React } from "@web3-react/core";
import { ERC721ABI, ERC721Address, defaultRpc, defualtChain } from "../config";
import Web3 from "web3";
import Card from "./Card";
import { ethers } from "ethers";
import FAQ from "./FAQ";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Marketplace2() {
  const { activate, deactivate, account, library, chainId } = useWeb3React();
  const wchain = chainId ? chainId : defualtChain;
  const web3 = new Web3(new Web3.providers.HttpProvider(defaultRpc));
  const contractR = new web3.eth.Contract(ERC721ABI, ERC721Address);
  const [data, setData] = useState();

  useEffect(() => {
    const abc = async () => {
      const _data = await contractR.methods.getArray().call();
      setData(_data);
    };

    abc();
  }, [account]);
  console.log("data", data);

  return (
    data && (
      <div id="__next" data-reactroot="" class="snipcss-gXTGL">
        <nav class="sticky top-0 z-[1100] h-[72px] bg-bg/80 shadow-[0px_1px_0px_rgba(0,0,0,0.05)] backdrop-blur-md dark:shadow-[0px_1px_0px_rgba(255,255,255,0.05)] lg:h-[80px]">
          <Header />
        </nav>
        <div class="flex flex-1 flex-col">
          <header class="relative">
            <div class='absolute inset-0 -z-10 bg-gradient-to-b from-blue-bg to-bg after:mask-to-t after:absolute after:top-0 after:h-3/4 after:w-full after:bg-[url("/pattern.svg")] after:bg-[length:48px_48px] after:opacity-5'></div>
            <div class="mx-auto mt-10 mb-6 w-full max-w-[1440px] px-6 lg:mt-12 lg:mb-10 lg:px-8">
              <h2 class="ts-headline-4 text-gray-900 lg:ts-headline-2">
                Buy, sell, and lend your NFTs
              </h2>
              <p class="ts-body-3 mt-2 text-gray-500 lg:ts-body-2">
                Best place to liquify your illiquidity
              </p>
            </div>
          </header>
          <section class="mx-auto mb-10 w-full max-w-[1440px] lg:mb-16">
            <div class="relative">
              <div class="flex justify-center overflow-hidden lg:mx-8">
                <div class="w-[1400px] translate-x-[175px] will-change-transform lg:translate-x-0">
                  <div class="swiper">
                    <div class="swiper-wrapper">
                      <Carousel
                        itemClass="carousel"
                        autoPlay={true}
                        style={{ margin: "0px" }}
                        containerClass={`w-full`}
                        responsive={responsive}
                      >
                        {data &&
                          data.map((v, e) => (
                            <div class="swiper-slide !w-[350px] px-3">
                              <div class="group overflow-hidden rounded-xl border border-gray-300 bg-bg link-box">
                                <Card
                                  uri={v[4]}
                                  id={v[0]}
                                  price={ethers.utils.formatEther(v[3])}
                                ></Card>
                              </div>
                            </div>
                          ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="mx-auto mb-10 w-full max-w-[1440px] lg:mb-16">
            <div class="relative overflow-hidden lg:mx-8 lg:rounded-xl">
              <div
                class="absolute inset-[-40px] z-[-1] flex items-center justify-center bg-center blur-2xl filter transition-[background-image] duration-300 will-change-transform style-IYq8N"
                id="style-IYq8N"
              >
                <div class="absolute inset-0 bg-black/[.24]"></div>
              </div>
              <div class="flex flex-col py-10 lg:flex-row">
                <div class="flex flex-1 flex-col justify-between px-6 lg:px-10">
                  <h4 class="ts-headline-5 font-bold text-button-text lg:ts-headline-4">
                    Largest Sale
                  </h4>
                  <div class="hidden lg:flex lg:flex-col">
                    <div class="flex items-center space-x-3">
                      <img
                        class="h-10 w-10 shrink-0 overflow-hidden rounded-full"
                        src="https://cdn.x2y2.io/nfts/119ca7c868784aeeaf75990002e8d57b.png"
                      />
                      <span class="ts-body-2 font-bold text-button-text line-clamp-2">
                        Ajin Youth Rebels
                      </span>
                    </div>
                    <p class="ts-caption mt-4 flex-1 text-button-text line-clamp-5">
                      Ajin Youth Rebels (AYOR) is the official NFT collection by
                      X2Y2. The 10,000 strong Ajin(亜人) Rebels are forced to
                      fight against the Central Empire to protect their homeland
                      using inborn abilities and magic. Ajins may look like
                      human beings but they have animalstic ears and horns
                      inherited from their ancestors.
                    </p>
                  </div>
                </div>
                <div class="relative mt-6 flex min-w-0 justify-center overflow-hidden lg:mt-0 lg:pr-10">
                  <div class="flex justify-center overflow-hidden lg:w-[584px] lg:justify-start xl:w-[888px]">
                    <div class="w-[912px] will-change-transform lg:-translate-x-3">
                      <div class="swiper">
                        <div class="swiper-wrapper">
                          <Carousel
                            itemClass="carousel"
                            autoPlay={true}
                            style={{ margin: "0px" }}
                            containerClass={`w-full`}
                            responsive={responsive2}
                          >
                            {data &&
                              data.map((v, e) => (
                                <div class="swiper-slide !w-[350px] px-3">
                                  <div class="group overflow-hidden rounded-xl border border-gray-300 bg-bg link-box">
                                    <Card
                                      uri={v[4]}
                                      id={v[0]}
                                      price={ethers.utils.formatEther(v[3])}
                                    ></Card>
                                  </div>
                                </div>
                              ))}
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="mx-auto w-full max-w-[1440px]">
            <div
              class="mx-6 cursor-pointer rounded-xl bg-[length:100%_auto] bg-center p-6 lg:mx-8 lg:p-10"
              style={{
                backgroundImage:
                  "url('https://cdn.x2y2.io/frontend/Pn/I1bNQ_an8U3I0i/1440.jpg')",
              }}
            >
              <h4 class="ts-headline-5 text-button-text lg:ts-headline-4">
                Royalties are paid instantly
              </h4>
              <p class="ts-caption-2 mt-1 flex items-center text-button-text lg:ts-caption">
                <span>
                  Learn more about how to set royalties for your collections.
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 h-6 w-6 self-start"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.793 7.793a1 1 0 0 0 0 1.414L12.586 12l-2.793 2.793a1 1 0 1 0 1.414 1.414l3.5-3.5a1 1 0 0 0 0-1.414l-3.5-3.5a1 1 0 0 0-1.414 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </p>
            </div>
          </section>

          <section class="mx-auto w-full max-w-[1440px] py-10 lg:py-16">
            <h2 class="ts-headline-5 text-center lg:ts-headline-4">
              Supported by
            </h2>
            <p class="ts-caption-2 mt-2 text-center text-gray-500 lg:ts-caption">
              Our data providers and partners
            </p>
            <div class="mt-8">
              <div class="grid grid-cols-partners gap-6 px-6 xl:px-0">
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://gem.xyz"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/pb/XpB1eFeeRfARIn/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nftsensei.xyz"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/9e/NbNd7NMzAngDkp/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://tokun.app/"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/tu/eQ3UJly1U3kqcd/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://uniswap.org/"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/43/jR4pfzbX0ncmaq/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nftgo.io"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/Hp/83t_bvYo78roSA/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://gopluslabs.io/"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/uX/1zrRhgVPh-LPYB/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://traitsniper.com"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/Mf/v_wtvpvMiZ2kZ9/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://raritysniper.com"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/0Z/tero12bnkX16JV/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://opensea.io"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/as/e-NA2Gaue6thx9/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nfttrack.ai"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/cO/O8FOZJBiGwkd6Q/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nftscan.com"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/mm/gAMtw4YEYGi51T/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nftnerds.ai"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/Sb/c2rWMzrVxbTXnw/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://tinyastro.io/"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/er/TP1xM7-Pr36lDx/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nansen.ai/"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/bf/_PJpdCDJ6l_cN9/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nfteye.io"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/IN/10vb67ZSJbIGGA/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://b4fomo.io/"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/l9/VTVlWGp2Qdtl9d/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://defined.fi/"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/ci/XXh_91Ue-iR84q/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nftscoring.com"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/Wf/XteFirpagIV2V0/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.atlas.xyz"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/8f/rntxZL6K1t6TQa/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.fusion.xyz/"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/4V/U76pQZpCDqKo6M/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a
                    class="mx-auto block h-[40px] w-[100px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://nftflip.ai/"
                  >
                    <picture>
                      <img
                        class="object-center h-full w-full"
                        style={{ objectFit: "contain" }}
                        src="https://cdn.x2y2.io/frontend/Ao/Si4_Iftl7cYrug/280.png"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <FAQ/>
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
                      style={{ opacity: "1", transform: "scale(1)" }}
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
                          style={{ opacity: "1", transform: "translateY(0px)" }}
                        >
                          <div class="col-xl-8 col-lg-10 snipcss0-12-118-119">
                            <div class="section__title text-center title-mb-80 snipcss0-13-119-120">
                              <h2 class="title snipcss0-14-120-121">
                                At The Core
                              </h2>
                              <p class="desc snipcss0-14-120-122">
                                The $EDUX token is essential to Edulabs AI's
                                function, serving as a medium of exchange to
                                upgrade user experience via Premium, participate
                                in the community marketplace, mint NFTs, and
                                earn via staking. $EDUX can also be earned by
                                users via our Learn to Earn program
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
                                style={{
                                  opacity: "1",
                                  transform: "translateX(0px)",
                                }}
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
                      style={{ opacity: "1", transform: "scale(1)" }}
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
                                style={{
                                  top: "0%",
                                  left: "-16%",
                                  opacity: "1",
                                  transform: "scale(1)",
                                }}
                                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                                class="snipcss0-14-146-147"
                              />

                              <img
                                decoding="async"
                                src="https://web3.edulabs.ai/wp-content/uploads/2022/12/bitcoin-01.png"
                                width="48"
                                alt=""
                                style={{
                                  bottom: "16%",
                                  left: "-8%",
                                  opacity: "1",
                                  transform: "scale(1)",
                                }}
                                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
                                class="snipcss0-14-146-148"
                              />

                              <img
                                decoding="async"
                                src="https://web3.edulabs.ai/wp-content/uploads/2022/12/ethereum-02.png"
                                width="40"
                                alt=""
                                style={{
                                  top: "0%",
                                  right: "-16%",
                                  opacity: "1",
                                  transform: "scale(1)",
                                }}
                                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
                                class="snipcss0-14-146-149"
                              />

                              <img
                                decoding="async"
                                src="https://web3.edulabs.ai/wp-content/uploads/2022/12/x.png"
                                width="24"
                                alt=""
                                style={{
                                  bottom: "16%",
                                  right: "-8%",
                                  opacity: "1",
                                  transform: "scale(1)",
                                }}
                                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;"
                                class="snipcss0-14-146-150"
                              />

                              <h2 class="title snipcss0-14-146-151">
                                We make it easy to Learn
                              </h2>
                              <p class="snipcss0-14-146-152">
                                Manage all your Education Studies at one place.
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
                        style={{
                          backgroundImage:
                            'url("https://web3.edulabs.ai/wp-content/uploads/2022/12/footer-bg.png")',
                        }}
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
        <div id="style-heHtU" class="style-heHtU"></div>
      </div>
    )
  );
}
