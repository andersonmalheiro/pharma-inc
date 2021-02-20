import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { Navbar } from 'components';
import { UserList } from 'components/user-list';
import { StyledMain } from '../styles/index.styles';

interface HomeProps {
  page?: number;
}

export default function Home({ page }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Pharma Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <StyledMain>
        <UserList pageNumber={page} />
      </StyledMain>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const page = ctx.query.page;
  return { page };
};
