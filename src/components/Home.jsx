import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <div class="relative h-full snipcss-oFsOI">
    <div class="fixed -z-10 pointer-events-none inset-0 overflow-hidden">
        <div class="absolute top-0 left-0 right-0 -u-z-10"><img src="https://www.basejump.pro/blur-02.svg" alt="blur" class="w-full"/></div>
        <div class="fixed top-0 left-0 right-0 -u-z-10"><img src="https://www.basejump.pro/blur-01.svg" alt="blur" class="w-full"/></div>
    </div>
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 pb-4">
            <div class="flex h-32 shrink-0 items-center"><a href="/"><img class="h-16 w-auto" src="https://www.basejump.pro/logo.svg" alt="BaseJump"/></a></div>
            <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" class="-mx-2 space-y-1">
                            <li><a href="/" class="bg-blue-700/50 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"><span class="h-6 w-6 shrink-0" aria-hidden="true"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" class="svg-inline--fa fa-house " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
                                        </svg></span>Dashboard</a></li>
                            <li><a href="/presale" class="text-gray-400 hover:text-white hover:bg-black/25 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"><span class="h-6 w-6 shrink-0" aria-hidden="true"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                        </svg></span>Add Token</a></li>
                            <li><a href="/leaderboard" class="text-gray-400 hover:text-white hover:bg-black/25 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"><span class="h-6 w-6 shrink-0" aria-hidden="true"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trophy" class="svg-inline--fa fa-trophy " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor" d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"></path>
                                        </svg></span>Leaderboard</a></li>
                        </ul>
                    </li>
                    <li class="mt-auto">
                        <ul role="list" class="-mx-2 space-y-1">
                            <li><a href="https://twitter.com/basejumpdotpro" class="text-gray-400 hover:text-white hover:bg-black/25 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"><span class="h-6 w-6 shrink-0" aria-hidden="true"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg></span>Twitter</a></li>
                            <li><a href="https://t.me/basejumppro" class="text-gray-400 hover:text-white hover:bg-black/25 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"><span class="h-6 w-6 shrink-0" aria-hidden="true"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                            <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                        </svg></span>Telegram</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="lg:pl-72">
        <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200/10 bg-gray-900/10 px-4 lg:px-0 shadow-sm sm:gap-x-6 sm:pr-6 lg:pr-8"><button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden"><span class="sr-only">Open sidebar</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg></button>
            <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true"></div>
            <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 backdrop-blur-md"><label for="search-field" class="sr-only">Search</label><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="pointer-events-none absolute inset-y-0 left-4 h-full w-5 text-gray-400">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd"></path>
                </svg><input id="search-field" class="block h-full w-full border-0 py-0 pl-12 pr-0 text-gray-200 bg-black/25 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search Token... (hit enter)" type="text"/>
                <div class="flex items-center gap-x-4 lg:gap-x-6">
                    <div data-tooltip-id="points-tooltip" class="flex items-center gap-x-2 text-yellow-400 font-bold">
                        <div>⭐</div>
                        <div>0</div>
                    </div>
                    <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true"></div>
                    <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true"></div>
                    <div><button class="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]"><span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span><span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl  hover:bg-black/50">
                                <button>Connect</button>
                            </span></button></div>
                </div>
            </div>
        </div>
        <main class="py-10 relative">
            <div class="px-4 sm:px-6 lg:px-8 mx-auto">
                <div class="flex flex-col gap-y-4 text-xs mb-5 text-black items-center">
                    <div class="flex gap-x-4">
                        <div class="items-center flex gap-2 bg-green-200 p-1 pl-2 pr-3 rounded-3xl"><img src="https://www.basejump.pro/_next/static/media/placeholder.b3bdd483.jpg" class="rounded-full h-8 w-8" alt="Token Image"/>
                            <div><a class=" text-black font-semibold mr-1  text-[#FFB921] hover:underline font-bold  " href="profile?address=0x3c39F1E1F53Dd4a8B0A19B82B42781AFf2d7E4E6">d7E4E6</a><span class="font-semibold">0.01</span> ETH of<a class=" text-black font-semibold ml-1  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x91DeB06aA91d13A5ab572e62495FeceA2c8053Ac">SPELL</a></div><img src="https://api.basejump.pro:4000/static/tkn_0xe1993802dc981b1b2eb8311804985e17afb846e9a58fce07406241757af13a33.png" class="rounded-full h-8 w-8" alt="Token Image"/>
                        </div>
                        <div class="items-center flex gap-2 bg-red-200 p-1 pl-2 pr-3 rounded-3xl"><img src="https://www.basejump.pro/_next/static/media/placeholder.b3bdd483.jpg" class="rounded-full h-8 w-8" alt="Token Image"/>
                            <div><a class=" text-black font-semibold mr-1  text-[#FFB921] hover:underline font-bold  " href="profile?address=0x9de614630f2e756Fb731A789EC64dDe2F99Ef379">9Ef379</a><span class="font-semibold">0.05</span> ETH of<a class=" text-black font-semibold ml-1  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x0b4B6b641fe9151BeB3e733C05BB60Ad7d0a4D0e">$DOGHARAMBE</a></div><img src="https://api.basejump.pro:4000/static/tkn_0x137af2fad1b168f94691ff15874ba91f69f4c01e3bd4b105fa00c7e949db8476.jpg" class="rounded-full h-8 w-8" alt="Token Image"/>
                        </div>
                        <div class="items-center flex gap-2 bg-green-200 p-1 pl-2 pr-3 rounded-3xl"><img src="https://www.basejump.pro/_next/static/media/placeholder.b3bdd483.jpg" class="rounded-full h-8 w-8" alt="Token Image"/>
                            <div><a class=" text-black font-semibold mr-1  text-[#FFB921] hover:underline font-bold  " href="profile?address=0x7E42E58d76F0214272b845979466B7d9e34FAcF3">4FAcF3</a><span class="font-semibold">&lt;0.01</span> ETH of<a class=" text-black font-semibold ml-1  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x91DeB06aA91d13A5ab572e62495FeceA2c8053Ac">SPELL</a></div><img src="https://api.basejump.pro:4000/static/tkn_0xe1993802dc981b1b2eb8311804985e17afb846e9a58fce07406241757af13a33.png" class="rounded-full h-8 w-8" alt="Token Image"/>
                        </div>
                        <div class="items-center flex gap-2 bg-green-200 p-1 pl-2 pr-3 rounded-3xl"><img src="https://www.basejump.pro/_next/static/media/placeholder.b3bdd483.jpg" class="rounded-full h-8 w-8" alt="Token Image"/>
                            <div><a class=" text-black font-semibold mr-1  text-[#FFB921] hover:underline font-bold  " href="profile?address=0x498ff8B3E0Bba856b7D2F037DefA008708339e67">339e67</a><span class="font-semibold">0.02</span> ETH of<a class=" text-black font-semibold ml-1  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x91DeB06aA91d13A5ab572e62495FeceA2c8053Ac">SPELL</a></div><img src="https://api.basejump.pro:4000/static/tkn_0xe1993802dc981b1b2eb8311804985e17afb846e9a58fce07406241757af13a33.png" class="rounded-full h-8 w-8" alt="Token Image"/>
                        </div>
                        <div class="items-center flex gap-2 bg-green-200 p-1 pl-2 pr-3 rounded-3xl"><img src="https://api.basejump.pro:4000/static/0x7a8E815e5e9753c433b011148a4DD18a3b70F98A-1715446448662.png" class="rounded-full h-8 w-8" alt="Token Image"/>
                            <div><a class=" text-black font-semibold mr-1  text-[#FFB921] hover:underline font-bold  " href="profile?address=0x7a8E815e5e9753c433b011148a4DD18a3b70F98A">Chokooos</a><span class="font-semibold">0.04</span> ETH of<a class=" text-black font-semibold ml-1  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x91DeB06aA91d13A5ab572e62495FeceA2c8053Ac">SPELL</a></div><img src="https://api.basejump.pro:4000/static/tkn_0xe1993802dc981b1b2eb8311804985e17afb846e9a58fce07406241757af13a33.png" class="rounded-full h-8 w-8" alt="Token Image"/>
                        </div>
                    </div>
                </div>
                <div class="relative isolate mb-6">
                    <div class="mx-auto flex flex-col gap-8 bg-white/5 px-4 py-8 ring-1 ring-white/10 rounded-3xl sm:p-4 lg:mx-0 lg:flex-row lg:items-center lg:py-10 xl:gap-x-12 xl:px-12">
                        <div class="w-full flex-auto">
                            <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">We are in beta!</h2>
                            <div class="mt-6 flex"><button class="text-sm font-semibold leading-6 text-indigo-400">How it works <span aria-hidden="true">→</span></button></div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center gap-20">
                    <div>
                        <h2 class="text-2xl mb-4 font-bold tracking-tight text-white sm:text-2xl mt-6 text-center">🏆 Top 🏆</h2>
                        <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-6">
                            <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-4 sm:min-w-[20rem] style-cGSC2" id="style-cGSC2">
                                <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0x91DeB06aA91d13A5ab572e62495FeceA2c8053Ac">SPELL</a>
                                    <div class="text-yellow-400 text-xs"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                                        </svg><span class="ml-1">13</span></div>
                                </div><img src="https://api.basejump.pro:4000/static/tkn_0xe1993802dc981b1b2eb8311804985e17afb846e9a58fce07406241757af13a33.png" class="rounded-full h-20 w-20 m-auto mt-4" alt="Token Image"/>
                                <div class="flex justify-between mb-5">
                                    <div class="flex gap-x-4">
                                        <div class="min-w-0 flex-auto">
                                            <div class="mt-1">
                                                <div class="text-sm">0.98 / 1.58 ETH</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col sm:items-end flex-shrink-0">
                                        <div class="mt-1 flex justify-start space-x-2"><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://spellspectra.xyz/"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="window-maximize" class="svg-inline--fa fa-window-maximize " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                                                </svg></a><a class="  text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://t.me/spellspectra_base"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                                    <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                                </svg></a><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://x.com/SpellSpectra"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" class="svg-inline--fa fa-x-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                                </svg></a></div>
                                    </div>
                                </div>
                                <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                                    <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-O1xiV" id="style-O1xiV">61.98%</div>
                                </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x91DeB06aA91d13A5ab572e62495FeceA2c8053Ac"></a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0x91DeB06aA91d13A5ab572e62495FeceA2c8053Ac">View</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 class="text-2xl mb-4 font-bold tracking-tight text-white sm:text-2xl mt-6 text-center">🪂 Latest Jump 🪂</h2>
                        <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-6">
                            <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-4 sm:min-w-[20rem] style-BIi8N" id="style-BIi8N">
                                <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0x5EF159cfac8960c21B2219c789E5B810C6951B29">BOOTY</a> </div><img src="https://api.basejump.pro:4000/static/tkn_0x84a808eedd95473c024ee918344cd10aafb1c5837c7788a809b287e87ae3ee37.jpg" class="rounded-full h-20 w-20 m-auto mt-4" alt="Token Image"/>
                                <div class="flex justify-between mb-5">
                                    <div class="flex gap-x-4">
                                        <div class="min-w-0 flex-auto">
                                            <div class="mt-1">
                                                <div class="text-sm">5.05 / 5.00 ETH</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col sm:items-end flex-shrink-0">
                                        <div class="mt-1 flex justify-start space-x-2"><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://www.bootyonbase.com"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="window-maximize" class="svg-inline--fa fa-window-maximize " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                                                </svg></a><a class="  text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://t.me/BootyonBase"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                                    <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                                </svg></a><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://x.com/coopsnicoops"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" class="svg-inline--fa fa-x-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                                </svg></a></div>
                                    </div>
                                </div>
                                <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                                    <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-QM7Fx" id="style-QM7Fx">100.00%</div>
                                </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x5EF159cfac8960c21B2219c789E5B810C6951B29"></a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0x5EF159cfac8960c21B2219c789E5B810C6951B29">View</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <section aria-labelledby="filter-heading" class="grid items-center border-b border-t border-gray-200/10" data-headlessui-state="">
                        <h2 id="filter-heading" class="sr-only">Filters</h2>
                        <div class="relative col-start-1 row-start-1 py-4">
                            <div class="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
                                <div><button class="group flex items-center font-medium text-white" id="headlessui-disclosure-button-:Raimkda:" type="button" aria-expanded="false" data-headlessui-state=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="mr-2 h-5 w-5 flex-none text-white group-hover:text-blue-500">
                                            <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z" clip-rule="evenodd"></path>
                                        </svg>Filter</button></div>
                            </div>
                        </div>
                        <div class="col-start-1 row-start-1 py-4">
                            <div class="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                                <div class="relative inline-block" data-headlessui-state="">
                                    <div class="flex"><button class="group inline-flex justify-center text-sm font-medium text-white hover:text-blue-500" id="headlessui-menu-button-:Rcimkda:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">Sort: Recent Activity<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500">
                                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
                                            </svg></button></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="relative  z-1 flex flex-wrap flex-col justify-center gap-6 sm:flex-row sm:justify-between">
                    <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-8 sm:min-w-[20rem]">
                        <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0x91DeB06aA91d13A5ab572e62495FeceA2c8053Ac">SPELL</a>
                            <div class="text-yellow-400 text-xs"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                                </svg><span class="ml-1">13</span></div>
                        </div>
                        <div class="flex justify-between mb-5">
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <div class="mt-1">
                                        <div class="text-sm">0.98 / 1.58 ETH</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:items-end flex-shrink-0">
                                <div class="mt-1 flex justify-start space-x-2"><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://spellspectra.xyz/"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="window-maximize" class="svg-inline--fa fa-window-maximize " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                                        </svg></a><a class="  text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://t.me/spellspectra_base"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                            <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                        </svg></a><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://x.com/SpellSpectra"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" class="svg-inline--fa fa-x-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg></a></div>
                            </div>
                        </div>
                        <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                            <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-8UWQr" id="style-8UWQr">61.98%</div>
                        </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x91DeB06aA91d13A5ab572e62495FeceA2c8053Ac">
                            <div class="relative p-[2px] group flex flex-1 shrink-0">
                                <div class="absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-GVGEc" id="style-GVGEc"></div>
                                <div class="absolute inset-0 rounded-lg z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-PS196" id="style-PS196"></div>
                                <div class="z-10 relative w-full rounded-lg bg-black/75 overflow-hidden h-[15rem]"><img src="https://api.basejump.pro:4000/static/tkn_0xe1993802dc981b1b2eb8311804985e17afb846e9a58fce07406241757af13a33.png" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg w-1/2 z-index-1" alt="Token Image"/><img src="https://api.basejump.pro:4000/static/tkn_0xe1993802dc981b1b2eb8311804985e17afb846e9a58fce07406241757af13a33.png" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg -z-index-10 opacity-5" alt="Token Image"/></div>
                            </div>
                        </a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0x91DeB06aA91d13A5ab572e62495FeceA2c8053Ac">View</a>
                    </div>
                    <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-8 sm:min-w-[20rem]">
                        <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0x0b4B6b641fe9151BeB3e733C05BB60Ad7d0a4D0e">$DOGHARAMBE</a>
                            <div class="text-yellow-400 text-xs"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                                </svg><span class="ml-1">3</span></div>
                        </div>
                        <div class="flex justify-between mb-5">
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <div class="mt-1">
                                        <div class="text-sm">0.03 / 1.00 ETH</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:items-end flex-shrink-0">
                                <div class="mt-1 flex justify-start space-x-2"></div>
                            </div>
                        </div>
                        <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                            <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-1Gwal" id="style-1Gwal">3.27%</div>
                        </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x0b4B6b641fe9151BeB3e733C05BB60Ad7d0a4D0e">
                            <div class="relative p-[2px] group flex flex-1 shrink-0">
                                <div class="absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-XS31R" id="style-XS31R"></div>
                                <div class="absolute inset-0 rounded-lg z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-j9oLN" id="style-j9oLN"></div>
                                <div class="z-10 relative w-full rounded-lg bg-black/75 overflow-hidden h-[15rem]"><img src="https://api.basejump.pro:4000/static/tkn_0x137af2fad1b168f94691ff15874ba91f69f4c01e3bd4b105fa00c7e949db8476.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg w-1/2 z-index-1" alt="Token Image"/><img src="https://api.basejump.pro:4000/static/tkn_0x137af2fad1b168f94691ff15874ba91f69f4c01e3bd4b105fa00c7e949db8476.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg -z-index-10 opacity-5" alt="Token Image"/></div>
                            </div>
                        </a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0x0b4B6b641fe9151BeB3e733C05BB60Ad7d0a4D0e">View</a>
                    </div>
                    <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-8 sm:min-w-[20rem]">
                        <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0xC0Bd6f5662a698dc088Cf66A8D4969475A25d461">STONER</a>
                            <div class="text-yellow-400 text-xs"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                                </svg><span class="ml-1">10</span></div>
                        </div>
                        <div class="flex justify-between mb-5">
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <div class="mt-1">
                                        <div class="text-sm">0.08 / 2.69 ETH</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:items-end flex-shrink-0">
                                <div class="mt-1 flex justify-start space-x-2"><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://stonerpp.com/"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="window-maximize" class="svg-inline--fa fa-window-maximize " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                                        </svg></a><a class="  text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://t.me/stonerpepetg"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                            <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                        </svg></a><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://x.com/StonerPepeCoin"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" class="svg-inline--fa fa-x-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg></a></div>
                            </div>
                        </div>
                        <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                            <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-IBrt8" id="style-IBrt8">2.80%</div>
                        </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0xC0Bd6f5662a698dc088Cf66A8D4969475A25d461">
                            <div class="relative p-[2px] group flex flex-1 shrink-0">
                                <div class="absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-j6iKn" id="style-j6iKn"></div>
                                <div class="absolute inset-0 rounded-lg z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-CXmhh" id="style-CXmhh"></div>
                                <div class="z-10 relative w-full rounded-lg bg-black/75 overflow-hidden h-[15rem]"><img src="https://api.basejump.pro:4000/static/tkn_0x047cb600fff6d854dff848f9a66cc8c4ddf35d3ab5ee6f63f6d9a45f36933a5e.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg w-1/2 z-index-1" alt="Token Image"/><img src="https://api.basejump.pro:4000/static/tkn_0x047cb600fff6d854dff848f9a66cc8c4ddf35d3ab5ee6f63f6d9a45f36933a5e.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg -z-index-10 opacity-5" alt="Token Image"/></div>
                            </div>
                        </a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0xC0Bd6f5662a698dc088Cf66A8D4969475A25d461">View</a>
                    </div>
                    <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-8 sm:min-w-[20rem]">
                        <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0x9555A43e60125f9d2A7b5aAf1cc93FCdb1906aa2">vbucks</a>
                            <div class="text-yellow-400 text-xs"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                                </svg><span class="ml-1">2</span></div>
                        </div>
                        <div class="flex justify-between mb-5">
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <div class="mt-1">
                                        <div class="text-sm">0.01 / 1.00 ETH</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:items-end flex-shrink-0">
                                <div class="mt-1 flex justify-start space-x-2"></div>
                            </div>
                        </div>
                        <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                            <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-SBs4D" id="style-SBs4D">0.69%</div>
                        </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x9555A43e60125f9d2A7b5aAf1cc93FCdb1906aa2">
                            <div class="relative p-[2px] group flex flex-1 shrink-0">
                                <div class="absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-gxnXw" id="style-gxnXw"></div>
                                <div class="absolute inset-0 rounded-lg z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-eqGfz" id="style-eqGfz"></div>
                                <div class="z-10 relative w-full rounded-lg bg-black/75 overflow-hidden h-[15rem]"><img src="https://api.basejump.pro:4000/static/tkn_0xa840019717f142868488d0db9b7a17e1fcec822148468b537bb535891dff2fb4.gif" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg w-1/2 z-index-1" alt="Token Image"/><img src="https://api.basejump.pro:4000/static/tkn_0xa840019717f142868488d0db9b7a17e1fcec822148468b537bb535891dff2fb4.gif" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg -z-index-10 opacity-5" alt="Token Image"/></div>
                            </div>
                        </a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0x9555A43e60125f9d2A7b5aAf1cc93FCdb1906aa2">View</a>
                    </div>
                    <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-8 sm:min-w-[20rem]">
                        <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0xF843a86B0140120dD4cc8Ed4823916F33576b3EA">Kabosu</a>
                            <div class="text-yellow-400 text-xs"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                                </svg><span class="ml-1">23</span></div>
                        </div>
                        <div class="flex justify-between mb-5">
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <div class="mt-1">
                                        <div class="text-sm">0.06 / 2.00 ETH</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:items-end flex-shrink-0">
                                <div class="mt-1 flex justify-start space-x-2"><a class="  text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://t.me/kabosubasecto"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                            <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                        </svg></a><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://x.com/KabosubasedCTO"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" class="svg-inline--fa fa-x-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg></a></div>
                            </div>
                        </div>
                        <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                            <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-2ZPZO" id="style-2ZPZO">2.78%</div>
                        </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0xF843a86B0140120dD4cc8Ed4823916F33576b3EA">
                            <div class="relative p-[2px] group flex flex-1 shrink-0">
                                <div class="absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-bJZvC" id="style-bJZvC"></div>
                                <div class="absolute inset-0 rounded-lg z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-eInCX" id="style-eInCX"></div>
                                <div class="z-10 relative w-full rounded-lg bg-black/75 overflow-hidden h-[15rem]"><img src="https://api.basejump.pro:4000/static/tkn_0xa946373eacc565271875ab7f16ac826d22e757d71e0f9ec987f45a5f03111f7d.jpeg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg w-1/2 z-index-1" alt="Token Image"/><img src="https://api.basejump.pro:4000/static/tkn_0xa946373eacc565271875ab7f16ac826d22e757d71e0f9ec987f45a5f03111f7d.jpeg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg -z-index-10 opacity-5" alt="Token Image"/></div>
                            </div>
                        </a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0xF843a86B0140120dD4cc8Ed4823916F33576b3EA">View</a>
                    </div>
                    <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-8 sm:min-w-[20rem]">
                        <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0xaDe81e4ed8131882Bd8f7186A1E0CE718BEdC65e">$LXC</a> </div>
                        <div class="flex justify-between mb-5">
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <div class="mt-1">
                                        <div class="text-sm">0.00 / 2.00 ETH</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:items-end flex-shrink-0">
                                <div class="mt-1 flex justify-start space-x-2"><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://x.com/lennoxxcartel/status/1794164493569966380?s=46&amp;t=8qQ4WX95PNRQ75-XocSCzw"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="window-maximize" class="svg-inline--fa fa-window-maximize " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                                        </svg></a><a class="  text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://t.me/raretypeventures"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                            <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                        </svg></a><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://x.com/lennoxxcartel/status/1794164493569966380?s=46&amp;t=8qQ4WX95PNRQ75-XocSCzw"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" class="svg-inline--fa fa-x-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg></a></div>
                            </div>
                        </div>
                        <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                            <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-q59Xz" id="style-q59Xz">0.00%</div>
                        </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0xaDe81e4ed8131882Bd8f7186A1E0CE718BEdC65e">
                            <div class="relative p-[2px] group flex flex-1 shrink-0">
                                <div class="absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-ong7t" id="style-ong7t"></div>
                                <div class="absolute inset-0 rounded-lg z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-ohTLi" id="style-ohTLi"></div>
                                <div class="z-10 relative w-full rounded-lg bg-black/75 overflow-hidden h-[15rem]"><img src="https://www.basejump.pro/_next/static/media/placeholder.b3bdd483.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg w-1/2 z-index-1" alt="Token Image"/><img src="https://www.basejump.pro/_next/static/media/placeholder.b3bdd483.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg -z-index-10 opacity-5" alt="Token Image"/></div>
                            </div>
                        </a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0xaDe81e4ed8131882Bd8f7186A1E0CE718BEdC65e">View</a>
                    </div>
                    <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-8 sm:min-w-[20rem]">
                        <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0x3651E69Be121929D0633c36AbF2F86d246CcDA52">HHG</a>
                            <div class="text-yellow-400 text-xs"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                                </svg><span class="ml-1">1</span></div>
                        </div>
                        <div class="flex justify-between mb-5">
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <div class="mt-1">
                                        <div class="text-sm">0.00 / 5.00 ETH</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:items-end flex-shrink-0">
                                <div class="mt-1 flex justify-start space-x-2"><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="www.hiphopgiraffe.com"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="window-maximize" class="svg-inline--fa fa-window-maximize " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                                        </svg></a><a class="  text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://t.me/hiphopGiraffe"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                            <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                        </svg></a><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://x.com/GiraffeHop12089?t=AJuqFBZk8PeG5jd71J_F3g&amp;s=09"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" class="svg-inline--fa fa-x-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg></a></div>
                            </div>
                        </div>
                        <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                            <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-IrdI9" id="style-IrdI9">0.00%</div>
                        </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x3651E69Be121929D0633c36AbF2F86d246CcDA52">
                            <div class="relative p-[2px] group flex flex-1 shrink-0">
                                <div class="absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-A6d4d" id="style-A6d4d"></div>
                                <div class="absolute inset-0 rounded-lg z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-17k7G" id="style-17k7G"></div>
                                <div class="z-10 relative w-full rounded-lg bg-black/75 overflow-hidden h-[15rem]"><img src="https://api.basejump.pro:4000/static/tkn_0x7100f31f6f74bc3685d23145eb07777bbbfcd0fef2695bc18c82bcca4a9052b5.png" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg w-1/2 z-index-1" alt="Token Image"/><img src="https://api.basejump.pro:4000/static/tkn_0x7100f31f6f74bc3685d23145eb07777bbbfcd0fef2695bc18c82bcca4a9052b5.png" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg -z-index-10 opacity-5" alt="Token Image"/></div>
                            </div>
                        </a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0x3651E69Be121929D0633c36AbF2F86d246CcDA52">View</a>
                    </div>
                    <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-8 sm:min-w-[20rem]">
                        <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0x4842D9A04700150Bc557fF4B528Edd2D7A6B0b0e">EMOKOI</a>
                            <div class="text-yellow-400 text-xs"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                                </svg><span class="ml-1">5</span></div>
                        </div>
                        <div class="flex justify-between mb-5">
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <div class="mt-1">
                                        <div class="text-sm">0.00 / 2.00 ETH</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:items-end flex-shrink-0">
                                <div class="mt-1 flex justify-start space-x-2"><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://emokoi.com"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="window-maximize" class="svg-inline--fa fa-window-maximize " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                                        </svg></a><a class="  text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://t.me/+9BnRHwVrxMQ0ZTEx"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                            <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                        </svg></a><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://x.com/EmoKoiBase"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" class="svg-inline--fa fa-x-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg></a></div>
                            </div>
                        </div>
                        <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                            <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-ogo2K" id="style-ogo2K">0.03%</div>
                        </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x4842D9A04700150Bc557fF4B528Edd2D7A6B0b0e">
                            <div class="relative p-[2px] group flex flex-1 shrink-0">
                                <div class="absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-Lki51" id="style-Lki51"></div>
                                <div class="absolute inset-0 rounded-lg z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-xU8im" id="style-xU8im"></div>
                                <div class="z-10 relative w-full rounded-lg bg-black/75 overflow-hidden h-[15rem]"><img src="https://api.basejump.pro:4000/static/tkn_0x09c42a3ce9c7dd805203fe4c2ee94ca3801a1a115bb79671c00955786e452dc1.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg w-1/2 z-index-1" alt="Token Image"/><img src="https://api.basejump.pro:4000/static/tkn_0x09c42a3ce9c7dd805203fe4c2ee94ca3801a1a115bb79671c00955786e452dc1.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg -z-index-10 opacity-5" alt="Token Image"/></div>
                            </div>
                        </a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0x4842D9A04700150Bc557fF4B528Edd2D7A6B0b0e">View</a>
                    </div>
                    <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-8 sm:min-w-[20rem]">
                        <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0x82068E25e0511b6c4c99E8b82961BAAdd372eC90">$LWL</a>
                            <div class="text-yellow-400 text-xs"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                                </svg><span class="ml-1">17</span></div>
                        </div>
                        <div class="flex justify-between mb-5">
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <div class="mt-1">
                                        <div class="text-sm">0.15 / 1.69 ETH</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:items-end flex-shrink-0">
                                <div class="mt-1 flex justify-start space-x-2"><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://twitter.com/lennoxxcartel/status/1793853209284366845?t=Aw0Q6gyc1ACshUWi0OK7Kw&amp;s=19"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="window-maximize" class="svg-inline--fa fa-window-maximize " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                                        </svg></a><a class="  text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://twitter.com/lennoxxcartel/status/1793853209284366845?t=Aw0Q6gyc1ACshUWi0OK7Kw&amp;s=19"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                            <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                        </svg></a><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://twitter.com/lennoxxcartel/status/1793853209284366845?t=Aw0Q6gyc1ACshUWi0OK7Kw&amp;s=19"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" class="svg-inline--fa fa-x-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg></a></div>
                            </div>
                        </div>
                        <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                            <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-P1YWy" id="style-P1YWy">9.03%</div>
                        </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x82068E25e0511b6c4c99E8b82961BAAdd372eC90">
                            <div class="relative p-[2px] group flex flex-1 shrink-0">
                                <div class="absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-JN5jt" id="style-JN5jt"></div>
                                <div class="absolute inset-0 rounded-lg z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-zTfm5" id="style-zTfm5"></div>
                                <div class="z-10 relative w-full rounded-lg bg-black/75 overflow-hidden h-[15rem]"><img src="https://api.basejump.pro:4000/static/tkn_0xba14e34fec6d665dcdf8407ab32f84f7114a88925e3144946601099e77aef78f.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg w-1/2 z-index-1" alt="Token Image"/><img src="https://api.basejump.pro:4000/static/tkn_0xba14e34fec6d665dcdf8407ab32f84f7114a88925e3144946601099e77aef78f.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg -z-index-10 opacity-5" alt="Token Image"/></div>
                            </div>
                        </a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0x82068E25e0511b6c4c99E8b82961BAAdd372eC90">View</a>
                    </div>
                    <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-8 sm:min-w-[20rem]">
                        <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0xD1C036368FBd4A0F94dce83678fc5989B16752B7">SIGMA</a> </div>
                        <div class="flex justify-between mb-5">
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <div class="mt-1">
                                        <div class="text-sm">0.00 / 2.00 ETH</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:items-end flex-shrink-0">
                                <div class="mt-1 flex justify-start space-x-2"></div>
                            </div>
                        </div>
                        <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                            <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-55sZ6" id="style-55sZ6">0.00%</div>
                        </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0xD1C036368FBd4A0F94dce83678fc5989B16752B7">
                            <div class="relative p-[2px] group flex flex-1 shrink-0">
                                <div class="absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-TgvrY" id="style-TgvrY"></div>
                                <div class="absolute inset-0 rounded-lg z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-43OVc" id="style-43OVc"></div>
                                <div class="z-10 relative w-full rounded-lg bg-black/75 overflow-hidden h-[15rem]"><img src="https://api.basejump.pro:4000/static/tkn_0xceed13647e10e13183164c88cf0ea477b597ac4a0acf8816fc4a7db0679844cd.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg w-1/2 z-index-1" alt="Token Image"/><img src="https://api.basejump.pro:4000/static/tkn_0xceed13647e10e13183164c88cf0ea477b597ac4a0acf8816fc4a7db0679844cd.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg -z-index-10 opacity-5" alt="Token Image"/></div>
                            </div>
                        </a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0xD1C036368FBd4A0F94dce83678fc5989B16752B7">View</a>
                    </div>
                    <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-8 sm:min-w-[20rem]">
                        <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0x89979Ec194903F88a06416f4bd765c39d2570c75">$KONKE</a>
                            <div class="text-yellow-400 text-xs"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                                </svg><span class="ml-1">2</span></div>
                        </div>
                        <div class="flex justify-between mb-5">
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <div class="mt-1">
                                        <div class="text-sm">0.00 / 4.00 ETH</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:items-end flex-shrink-0">
                                <div class="mt-1 flex justify-start space-x-2"><a class="  text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://t.me/jumpKonke"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                            <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                        </svg></a><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://x.com/XKonke"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" class="svg-inline--fa fa-x-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg></a></div>
                            </div>
                        </div>
                        <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                            <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-SFtmZ" id="style-SFtmZ">0.00%</div>
                        </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x89979Ec194903F88a06416f4bd765c39d2570c75">
                            <div class="relative p-[2px] group flex flex-1 shrink-0">
                                <div class="absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-Sqzfp" id="style-Sqzfp"></div>
                                <div class="absolute inset-0 rounded-lg z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-3gMpc" id="style-3gMpc"></div>
                                <div class="z-10 relative w-full rounded-lg bg-black/75 overflow-hidden h-[15rem]"><img src="https://api.basejump.pro:4000/static/tkn_0xcb47c502893448779c9a9497f200408afc593df31cfd45b8f3f6d9e09f551e57.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg w-1/2 z-index-1" alt="Token Image"/><img src="https://api.basejump.pro:4000/static/tkn_0xcb47c502893448779c9a9497f200408afc593df31cfd45b8f3f6d9e09f551e57.jpg" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg -z-index-10 opacity-5" alt="Token Image"/></div>
                            </div>
                        </a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0x89979Ec194903F88a06416f4bd765c39d2570c75">View</a>
                    </div>
                    <div class="block bg-neutral-600/25 rounded-3xl overflow-hidden shrink-0 flex-1 p-8 sm:min-w-[20rem]">
                        <div class="flex gap-x-4 mt-1 justify-center"><a class="  truncate text-3xl text-green-400  text-[#FFB921] hover:underline font-bold  " href="viewpresale?tokenAddress=0x757a7cAba00c68c9a7A0726ba1e628Bd46392921">NICK</a>
                            <div class="text-yellow-400 text-xs"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                                </svg><span class="ml-1">4</span></div>
                        </div>
                        <div class="flex justify-between mb-5">
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <div class="mt-1">
                                        <div class="text-sm">0.12 / 2.50 ETH</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:items-end flex-shrink-0">
                                <div class="mt-1 flex justify-start space-x-2"><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://nickonbase.xyz/"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="window-maximize" class="svg-inline--fa fa-window-maximize " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                                        </svg></a><a class="  text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://t.me/NickBase"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                            <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                        </svg></a><a class=" text-white hover:text-blue-500  text-[#FFB921] hover:underline font-bold  " target="_blank" rel="noopener noreferrer" href="https://x.com/justnickether/"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" class="svg-inline--fa fa-x-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg></a></div>
                            </div>
                        </div>
                        <div class="w-full bg-neutral-600/25 rounded-md overflow-hidden shrink-0 mb-4">
                            <div class="bg-blue-700/50 p-1.5 text-center text-xs font-medium leading-none text-white style-YxB6G" id="style-YxB6G">4.60%</div>
                        </div><a class=" mt-1 truncate text-xs leading-5 text-gray-400  text-[#FFB921] hover:underline font-bold  " href="/viewpresale?tokenAddress=0x757a7cAba00c68c9a7A0726ba1e628Bd46392921">
                            <div class="relative p-[2px] group flex flex-1 shrink-0">
                                <div class="absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-2K4zJ" id="style-2K4zJ"></div>
                                <div class="absolute inset-0 rounded-lg z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] style-2KkYA" id="style-2KkYA"></div>
                                <div class="z-10 relative w-full rounded-lg bg-black/75 overflow-hidden h-[15rem]"><img src="https://api.basejump.pro:4000/static/tkn_0xc0d91340dcaf751f5bfe649d021a11bd1e546436c6d59052c3c4280ac3c5083e.png" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg w-1/2 z-index-1" alt="Token Image"/><img src="https://api.basejump.pro:4000/static/tkn_0xc0d91340dcaf751f5bfe649d021a11bd1e546436c6d59052c3c4280ac3c5083e.png" class="absolute left-0 top-0 right-0 bottom-0 m-auto rounded-lg -z-index-10 opacity-5" alt="Token Image"/></div>
                            </div>
                        </a><a class=" flex text-lg text-white font-bold bg-black/25 hover:bg-black/50 p-3 rounded-md mt-5 w-full text-center justify-center undefined " href="viewpresale?tokenAddress=0x757a7cAba00c68c9a7A0726ba1e628Bd46392921">View</a>
                    </div>
                </div>
                <div>
                    <div class="flex justify-center mt-6 mb-6 text-2xl"><button class="text-green-400 hover:underline font-bold p-4 style-9eDX5" id="style-9eDX5">1</button><button class="text-green-400 hover:underline font-bold p-4 style-3SKCo" id="style-3SKCo">2</button><button class="text-green-400 hover:underline font-bold p-4 style-gsWaJ" id="style-gsWaJ">3</button><button class="text-green-400 hover:underline font-bold p-4 style-NtD9z" id="style-NtD9z">4</button><button class="text-green-400 hover:underline font-bold p-4 style-MqHKf" disabled="" id="style-MqHKf">...</button><button class="text-green-400 hover:underline font-bold p-4 style-AhRV1" id="style-AhRV1">54</button><button class="text-green-400 hover:underline font-bold p-4 style-xij9h" id="style-xij9h">55</button><button class="text-green-400 hover:underline font-bold p-4 style-52jqS" id="style-52jqS">56</button></div>
                </div>
            </div>
        </main>
    </div>
</div>
  )
}
