import Head from 'next/head';
import React from 'react';

import BestStep from '../components/pages/index/BestStep';
import Hero from '../components/pages/index/Hero';
import MediaChannels from '../components/pages/index/MediaChannels';
import Method from '../components/pages/index/Method';

export default function Posts() {
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
        <BestStep />
        <Method />
        <MediaChannels />
      </main>
    </>
  );
}
