const domain = 'https://tomekkonieczny.com';
const title = 'Tomek Konieczny';
const description = 'My personal portfolio';
const image = '';
export const helmet = {
  title,
  titleTemplate: '%s - Portfolio',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'msapplication-navbutton-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'theme-color', content: '#000' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },

    { property: 'og:title', content: title },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: '1200px' },
    { property: 'og:image:height', content: '630px' },
    { property: 'og:image:alt', content: description },

    { name: 'twitter:title', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: `${domain}${image}` },
    { name: 'twitter:site', content: '@tomekkoniec' },
    { name: 'twitter:creator', content: '@tomekkoniec' },
    { name: 'twitter:description', content: description },
  ],
};