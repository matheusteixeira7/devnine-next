import Head from 'next/head';
import React from 'react';

import { DevnineHigher } from '../components/Pages/Booster/DevnineHigher';
import { DontJumpThisStep } from '../components/Pages/Booster/DontJumpThisStep';
import { EndCta } from '../components/Pages/Booster/EndCta';
import { Faq } from '../components/Pages/Booster/Faq';
import { Hero } from '../components/Pages/Booster/Hero';
import { MoreThanTeach } from '../components/Pages/Booster/MoreThanTeach';
import { ResourcesList } from '../components/Pages/Booster/ResourcesList';
import { RightDirection } from '../components/Pages/Booster/RightDirection';

export default function Booster() {
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
        <RightDirection />
        <DevnineHigher />
        <ResourcesList />
        <MoreThanTeach />
        <DontJumpThisStep />
        <Faq />
        <EndCta />
      </main>
    </>
  );
}
