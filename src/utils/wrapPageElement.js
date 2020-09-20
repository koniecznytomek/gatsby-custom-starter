import React from 'react';
import Layout from '../components/layout';
import '../styles/animations.css';
import '../styles/global.css';

const CustomLayout = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export default CustomLayout;
