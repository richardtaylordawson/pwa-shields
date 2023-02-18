module.exports = {
  siteMetadata: {
    siteUrl: `https://www.pwa-shields.com`, // for gatsby-plugin-sitemap
    title: `PWA Shields`,
    description: `Personalize your app's README with custom, fun, PWA shields in SVG`,
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
        background_color: `#353A3F`,
        theme_color: `#353A3F`,
        display: `standalone`,
        icon: `static/images/favicon.svg`,
        description: `Personalize your app's README with custom, fun, PWA shields in SVG`,
        features: [
          "Create & customize shields",
          "View documentation",
          "No network connection needed",
        ],
        screenshots: [
          {
            src:
              "https://www.pwa-shields.com/images/screenshots/home-screen.png",
          },
          {
            src: "https://www.pwa-shields.com/images/screenshots/series.png",
          },
          {
            src: "https://www.pwa-shields.com/images/screenshots/create.png",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
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
