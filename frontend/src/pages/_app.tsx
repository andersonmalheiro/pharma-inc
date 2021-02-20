import React from 'react';
import Head from 'next/head';
import { GlobalStyle } from '../styles/globals';
import 'reactjs-popup/dist/index.css';
import { Provider } from 'react-redux';
import { store } from 'store/store';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
