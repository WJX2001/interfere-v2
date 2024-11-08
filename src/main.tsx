// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.tsx';
// import { BrowserRouter } from 'react-router-dom';

// createRoot(document.getElementById('root')!).render(
//   <BrowserRouter>
//     <StrictMode>
//       <App />
//     </StrictMode>
//   </BrowserRouter>,
// );


import '@rainbow-me/rainbowkit/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import merge from 'lodash.merge';
import App from './App';
import { config } from './wagmi';

const queryClient = new QueryClient();

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor:'linear-gradient(248.86deg, #B6509E 10.51%, #2EBAC6 93.41%)',
    connectButtonBackground: '#383D51',
  },
  radii: {
    actionButton: '0',
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={myTheme}>
            <App />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>
  </BrowserRouter>,
);
