import Head from 'next/head';
import React from 'react';

import { DevnineHigher } from './DevnineHigher';
import { DontJumpThisStep } from './DontJumpThisStep';
import { EndCta } from './EndCta';
import { Faq } from './Faq';
import { Hero } from './Hero';
import { MoreThanTeach } from './MoreThanTeach';
import { ResourcesList } from './ResourcesList';
import { RightDirection } from './RightDirection';

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
