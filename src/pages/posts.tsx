import Head from 'next/head';
import React from 'react';

import { Method } from '../components/Method';

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
        <Method />
      </main>
    </>
  );
}
