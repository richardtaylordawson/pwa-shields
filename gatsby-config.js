module.exports = {
  siteMetadata: {
    title: `PWA Shields - Richard Taylor Dawson`,
    description: `Personalize your app's README with custom, fun, PWA shields in SVG`,
    author: `Richard Taylor Dawson`,
    siteUrl: `https://www.pwa-shields.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PWA Shields`,
        short_name: `PWA Shields`,
        start_url: `/`,
        background_color: `#5B6168`,
        theme_color: `#5B6168`,
        display: `standalone`,
        icon: `static/images/favicon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-142412414-8',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.pwa-shields.com',
        sitemap: 'https://www.pwa-shields.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', }]
      }
    },
  ]
}
