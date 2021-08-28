import Head from 'next/head';
import React from 'react';

import { GenerateValue } from '../components/GenerateValue';
import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Devnine</title>
        <meta
          name="description"
          content="Devnine, ajudando você a programar melhor"
        />
      </Head>
      <main>
        <Hero />
        <GenerateValue />
      </main>
    </>
  );
}
