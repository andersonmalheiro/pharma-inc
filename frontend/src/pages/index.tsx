import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Navbar, Table, TableColumn } from 'components';
import { StyledMain } from '../styles/index.styles';
import { httpClient, UserService } from '../api';
import { User } from 'api/services/models';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface HomeProps {
  data: User[];
}

export default function Home({ data }: HomeProps) {
  const router = useRouter()

  const columns: TableColumn[] = [
    {
      key: 'full_name',
      title: 'Name',
    },
    {
      key: 'gender',
      title: 'Gender',
    },
    {
      key: 'birth_date',
      title: 'Birth',
    },
  ];

  useEffect(() => {
    console.log(router.query)
  }, [])

  return (
    <div>
      <Head>
        <title>Pharma Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <StyledMain>
        <Table columns={columns} data={data} />
      </StyledMain>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);
  const userService = new UserService(httpClient);
  const response = await userService.getUsers({ results: 50 });
  const data = response.results;

  return {
    props: {
      data,
    },
  };
}
