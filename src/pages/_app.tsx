import type { AppProps } from 'next/app';
import React from 'react';

import { Header } from '../components/Header';
import { GlobalStyle } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
