import Head from 'next/head';
import React from 'react';

import { Educator } from '../components/Pages/Starter/Educator';
import { Hero } from '../components/Pages/Starter/Hero';
import { WhatYouWillLearn } from '../components/Pages/Starter/WhatYouWillLearn';

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
        <WhatYouWillLearn />
        <Educator />
      </main>
    </>
  );
}
