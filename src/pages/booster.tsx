import Head from 'next/head';
import React from 'react';

import DevnineHigher from '../components/pages/booster/DevnineHigher';
import DontJumpThisStep from '../components/pages/booster/DontJumpThisStep';
import EndCta from '../components/pages/booster/EndCta';
import Faq from '../components/pages/booster/Faq';
import Hero from '../components/pages/booster/Hero';
import MoreThanTeach from '../components/pages/booster/MoreThanTeach';
import ResourcesList from '../components/pages/booster/ResourcesList';
import RightDirection from '../components/pages/booster/RightDirection';

export default function Booster() {
  return (
    <>
      <Head>
        <title>Devnine</title>
        <meta
          name="description"
          content="Devnine, ajudando você a programar melhorr"
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
