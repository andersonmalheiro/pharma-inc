import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Navbar, Table, TableColumn } from 'components';
import { StyledMain } from './index.styles';
import { httpClient, UserService } from '../api';
import { User } from 'api/services/models';

interface HomeProps {
  data: User[];
}

export default function Home({ data }: HomeProps) {
  const [users, setUsers] = useState<User[]>([]);
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
    setUsers(data);
  }, []);

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

export async function getStaticProps() {
  const userService = new UserService(httpClient);
  const response = await userService.getUsers({ results: 50 });
  const data = response.results;

  return {
    props: {
      data,
    },
  };
}
