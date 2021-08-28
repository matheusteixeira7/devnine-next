import Head from 'next/head';
import React from 'react';

import { Hero } from '../components/Home/Hero';

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
        <section>
          <Hero />
        </section>
      </main>
    </>
  );
}
