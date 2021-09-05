import Head from 'next/head';
import React from 'react';

import { NewsLetter } from '../components/NewsLetter';
import { BestStep } from './index/BestStep';
import { Hero } from './index/Hero';
import { MediaChannels } from './index/MediaChannels';
import { Method } from './index/Method';
import { ReadyToDiveIn } from './index/ReadyToDiveIn';

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
        <BestStep />
        <Method />
        <MediaChannels />
        <NewsLetter />
        <ReadyToDiveIn />
      </main>
    </>
  );
}
