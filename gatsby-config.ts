import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://pwa-shields.richardtaylordawson.com`, // for gatsby-plugin-sitemap
    title: `PWA Shields`,
    description: `Personalize your app's README with custom, fun, PWA shields in SVG`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-K9ZMDNM4F7",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WF9BBDH",
        includeInDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://pwa-shields.richardtaylordawson.com",
        sitemap: "https://pwa-shields.richardtaylordawson.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}

export default config
