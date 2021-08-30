import Head from 'next/head';
import React from 'react';

import { GenerateValue } from '../components/GenerateValue';

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
        <GenerateValue />
      </main>
    </>
  );
}
