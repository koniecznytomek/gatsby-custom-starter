import React from 'react';
import SEO from '../utils/helmetWrapper';
import LinkFadeDown from '../components/TransitionLinks/LinkFadeDown';

export const AboutPage = () => (
  <>
    <SEO title="Home" description="This is home page" />
    <h1>About page</h1>
    <LinkFadeDown url={'/'}>Home</LinkFadeDown>
  </>
);
export default AboutPage;
