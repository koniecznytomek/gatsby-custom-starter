import React from 'react';
import { GlobalStyle } from '../styles/global';
import Transition from './Transition';

const Layout = props => (
  <>
    <GlobalStyle />
    <Transition {...props}>{props.children}</Transition>
  </>
);

export default Layout;
