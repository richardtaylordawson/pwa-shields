module.exports = {
  siteMetadata: {
    title: `PWA Shields - Richard Taylor Dawson`,
    description: `Unique, fun, and original PWA badges in SVG`,
    author: `Richard Taylor Dawson`,
    siteUrl: `https://pwa-shields.richarddawson.codes`
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
        display: `minimal-ui`,
        icon: `static/site/favicons/128x128.svg`,
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
        host: 'https://pwa-shields.richarddawson.codes',
        sitemap: 'https://pwa-shields.richarddawson.codes/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', }]
      }
    },
  ]
}
