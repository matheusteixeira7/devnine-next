import Head from 'next/head';
import React from 'react';

import { NewsLetter } from '../components/NewsLetter';
import { BestStep } from '../components/Pages/Home/BestStep';
import { GenerateValue } from '../components/Pages/Home/GenerateValue';
import { Hero } from '../components/Pages/Home/Hero';
import { MediaChannels } from '../components/Pages/Home/MediaChannels';
import { Method } from '../components/Pages/Home/Method';

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
        <MediaChannels />
        <NewsLetter />
      </main>
    </>
  );
}
