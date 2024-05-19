import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

// import { createWeb3Modal } from '@web3modal/wagmi/react'
// import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

// import { WagmiProvider } from 'wagmi'
// import { arbitrum, mainnet } from 'wagmi/chains'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// // 0. Setup queryClient
// const queryClient = new QueryClient()

// // 1. Get projectId at https://cloud.walletconnect.com
// const projectId = 'b27a2874021a4091a9123942dd0b075f'

// // 2. Create wagmiConfig
// const metadata = {
//   name: 'Web3Modal',
// //  description: 'Web3Modal Example',
//   url: 'https://web3edulabs.surge.sh/#', // origin must match your domain & subdomain
//   icons: ['https://avatars.githubusercontent.com/u/37784886']
// }

// const chains = [mainnet, arbitrum]
// const config = defaultWagmiConfig({
//   chains,
//   projectId,
//   metadata,

// })

// // 3. Create modal
// createWeb3Modal({
//   wagmiConfig: config,
//   projectId,
//   enableAnalytics: true, // Optional - defaults to your Cloud configuration
//   enableOnramp: true // Optional - false as default
// })

// export function Web3ModalProvider({ children }) {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </WagmiProvider>
//   )
// }

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
      </Web3ReactProvider>
       
      </Router>
  
  </React.StrictMode>,
)
