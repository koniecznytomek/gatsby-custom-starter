import React from 'react';
import SEO from '../utils/helmetWrapper';
import LinkFadeDown from '../components/TransitionLinks/LinkFadeDown';

export const HomePage = () => (
  <>
    <SEO title="Home" description="This is home page" />
    <h1>Home page</h1>
    <LinkFadeDown url={'/about'}>About</LinkFadeDown>
  </>
);
export default HomePage;
