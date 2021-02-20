import React from 'react';
import Head from 'next/head';
import { Navbar } from 'components';
import { UserList } from 'components/user-list';
import { StyledMain } from '../styles/index.styles';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pharma Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <StyledMain>
        <UserList />
      </StyledMain>
    </div>
  );
}
