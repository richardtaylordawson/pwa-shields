module.exports = {
  siteMetadata: {
    siteUrl: `https://www.pwa-shields.com`, // for gatsby-plugin-sitemap
    title: `PWA Shields`,
    description: `Personalize your app's README with custom, fun, PWA shields in SVG`,
    twitterHandle: `@richard_codes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PWA Shields`,
        short_name: `PWA Shields`,
        start_url: `/`,
        background_color: `#5B6168`,
        theme_color: `#5B6168`,
        display: `standalone`,
        icon: `src/images/favicon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-142412414-8",
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
        host: "https://www.pwa-shields.com",
        sitemap: "https://www.pwa-shields.com/sitemap.xml",
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
