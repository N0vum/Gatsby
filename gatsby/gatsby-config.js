const dotenv = require('dotenv');

dotenv.config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `Travel blog`,
    siteUrl: `https://www.travel.blog`,
    description: `Project`,
    author: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'krmjkxm7',
        dataSet: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
