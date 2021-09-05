import Head from 'next/head';
import React from 'react';

import Educator from '../components/pages/starter/Educator';
import Faq from '../components/pages/starter/Faq';
import Hero from '../components/pages/starter/Hero';
import WhatYouWillLearn from '../components/pages/starter/WhatYouWillLearn';

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
