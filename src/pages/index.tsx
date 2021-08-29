import Head from 'next/head';
import React from 'react';

import { BestStep } from '../components/BestStep';
import { GenerateValue } from '../components/GenerateValue';
import { Hero } from '../components/Hero';
import { Method } from '../components/Method';

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
        <BestStep />
        <Method />
      </main>
    </>
  );
}
