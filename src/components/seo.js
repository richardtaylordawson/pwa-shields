import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Favicon from "./../../static/images/favicon.svg"

export const SEO = ({ metaTitle, metaDescription }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            twitterHandle
          }
        }
      }
    `
  )

  const { siteUrl, twitterHandle } = site.siteMetadata
  const shareImageUrl = `${siteUrl}/images/social-share.png`

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      link={[{ rel: "shortcut icon", type: "image/svg", href: `${Favicon}` }]}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:site_name`,
          content: metaTitle,
        },
        {
          itemprop: `name`,
          content: metaTitle,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:text:title`,
          content: metaTitle,
        },
        {
          name: `twitter:image:alt`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          itemprop: `description`,
          content: metaDescription,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:image`,
          content: shareImageUrl,
        },
        {
          itemprop: `image`,
          content: shareImageUrl,
        },
        {
          name: `twitter:image`,
          content: shareImageUrl,
        },
        {
          property: `og:image:type`,
          content: `image/png`,
        },
        {
          property: `og:image:width`,
          content: `640`,
        },
        {
          property: `og:image:height`,
          content: `320`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: twitterHandle,
        },
        {
          name: `twitter:creator`,
          content: twitterHandle,
        },
      ]}
    />
  )
}
