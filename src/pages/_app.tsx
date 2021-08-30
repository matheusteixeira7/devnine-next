import type { AppProps } from 'next/app';
import React from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SocialMediaFooter } from '../components/SocialMediaFooter';
import { GlobalStyle } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </>
  );
}

export default MyApp;
