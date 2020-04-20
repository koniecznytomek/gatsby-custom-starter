import React from 'react';
import { GlobalStyle } from '../styles/global';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { helmet } from '../utils/helmet';
import Transition from './Transition';

const Layout = props => (
  <>
    <HelmetProvider>
      <Helmet {...helmet} />
      <GlobalStyle />
      <Transition {...props}>{props.children}</Transition>

    </HelmetProvider>
  </>
);

export default Layout;
