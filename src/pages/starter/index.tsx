import Head from 'next/head';
import React from 'react';

import { Educator } from './Educator';
import { Faq } from './Faq';
import { Hero } from './Hero';
import { WhatYouWillLearn } from './WhatYouWillLearn';

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
        <Faq />
        <Hero />
      </main>
    </>
  );
}
