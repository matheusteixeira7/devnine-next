import Head from 'next/head';
import React from 'react';

import { BestStep } from '../components/Pages/Home/BestStep';

export default function Videos() {
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
        <BestStep />
      </main>
    </>
  );
}
