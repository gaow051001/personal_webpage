/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // flags: {
  //   DEV_SSR: true
  // },
  siteMetadata: {
    title: `Wei-Jie_Personal_Webpage`,
    // siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: "/personal_webpage",
  plugins: ["gatsby-plugin-styled-components",]
};