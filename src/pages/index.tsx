import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import styled, { ThemeProvider } from 'styled-components';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import { OAuthButton } from '../components';

import config from '../config';

import { apolloClient } from '../utils';

import { initStore, useStore } from '../stores';

import { GlobalStyles } from '../styles';

import Routes from './routes';
import OAuth from './o-auth';

const APPContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const App = observer(function observerApp() {
  const store = useStore();

  useEffect(() => {
    initStore();
  }, []);

  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get('code')) {
    return <OAuth />;
  }

  if (!store.isInit) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={config.description} />
      </Helmet>

      <APPContainer>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={store.theme.theme}>
            <GlobalStyles />

            <button onClick={() => store.theme.toggleMode()}>{store.theme.mode}</button>

            <OAuthButton OAuthClientID={config.OAuthClientID} />

            <Routes />
          </ThemeProvider>
        </ApolloProvider>
      </APPContainer>
    </>
  );
});

export default App;
