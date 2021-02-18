import Head from 'next/head';
import { Navbar, Table } from 'components';
import { StyledMain } from './index.styles';

const columns = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Gender',
    key: 'gender',
  },
  {
    title: 'Birth',
    key: 'birth',
  },
];

const data = [
  {
    name: 'José',
    gender: 'male',
    birth: '22/12/1998'
  },
  {
    name: 'José',
    gender: 'male',
    birth: '22/12/1998'
  },
  {
    name: 'José',
    gender: 'male',
    birth: '22/12/1998'
  },
  {
    name: 'José',
    gender: 'male',
    birth: '22/12/1998'
  },
];

export default function Home() {
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
