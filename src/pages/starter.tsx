import Head from 'next/head';
import React from 'react';

import { Hero } from '../components/Pages/Starter/Hero';

export default function Starter() {
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
      </main>
    </>
  );
}
