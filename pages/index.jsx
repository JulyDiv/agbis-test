import React from 'react';
import Head from 'next/head'
import { Header } from '../components/Header';
import { Service } from '../components/Service';

export default function Home() {
  return (
    <>
      <Head>
        <title>Agbis-test</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <Service />
    </>
  );
}
